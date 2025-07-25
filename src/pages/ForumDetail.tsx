import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  serverTimestamp,
  Timestamp,
  limit,
  startAfter,
} from "firebase/firestore";
import type { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import { formatDistanceToNow } from "date-fns";

type Post = {
  id: string;
  text: string;
  sender: string;
  createdAt: Timestamp;
  parentId?: string;
};

type PostWithReplies = Post & { replies: Post[] };

export default function ForumDetail() {
  const { countryName } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState("");
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [editedText, setEditedText] = useState("");
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");
  const [lastVisible, setLastVisible] =
    useState<QueryDocumentSnapshot<DocumentData> | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const pageSize = 10;

  useEffect(() => {
    if (user && countryName) {
      loadPosts();
    }
  }, [user, countryName]);

  const loadPosts = async (loadMore = false) => {
    if (!countryName) return;

    let q = query(
      collection(db, "forum", countryName, "messages"),
      orderBy("createdAt", "desc"),
      limit(pageSize)
    );

    if (loadMore && lastVisible) {
      q = query(
        collection(db, "forum", countryName, "messages"),
        orderBy("createdAt", "desc"),
        startAfter(lastVisible),
        limit(pageSize)
      );
    }

    const snap = await getDocs(q);
    const fetched = snap.docs.map((d) => ({
      ...(d.data() as Post),
      id: d.id,
    }));

    if (loadMore) {
      setPosts((prev) => [...prev, ...fetched]);
    } else {
      setPosts(fetched);
    }

    setLastVisible(snap.docs[snap.docs.length - 1]);
    if (fetched.length < pageSize) setHasMore(false);
  };

  const handlePost = async () => {
    if (!newPost.trim() || !user || !countryName) return;

    await addDoc(collection(db, "forum", countryName, "messages"), {
      text: newPost.trim(),
      sender: user.email || "Anonymous",
      createdAt: serverTimestamp(),
    });

    setNewPost("");
    await loadPosts();
  };

  const handleDelete = async (postId: string) => {
    if (!countryName) return;

    try {
      await deleteDoc(doc(db, "forum", countryName, "messages", postId));
      setPosts((prev) => prev.filter((p) => p.id !== postId));
      console.log("Post deleted successfully");
    } catch (error) {
      console.error("Failed to delete post:", error);
      alert("Failed to delete post. Please try again.");
    }
  };

  const handleEdit = (id: string, text: string) => {
    setEditingPostId(id);
    setEditedText(text);
  };

  const handleSaveEdit = async () => {
    if (!countryName || !editingPostId) return;

    await updateDoc(doc(db, "forum", countryName, "messages", editingPostId), {
      text: editedText,
    });

    setEditingPostId(null);
    setEditedText("");
    await loadPosts();
  };

  const handleReply = async (parent: Post) => {
    if (!replyText.trim() || !user || !countryName) return;

    await addDoc(collection(db, "forum", countryName, "messages"), {
      text: replyText.trim(),
      sender: user.email || "Anonymous",
      createdAt: serverTimestamp(),
      parentId: parent.id,
    });

    setReplyText("");
    setReplyingTo(null);
    await loadPosts();
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-6 text-center">
        <h2 className="text-2xl font-bold">Log in to see the forum.</h2>
      </div>
    );
  }

  const nestedPosts: PostWithReplies[] = [];
  const parentPosts = posts.filter((p) => !p.parentId);
  const replyPosts = posts.filter((p) => p.parentId);

  parentPosts
    .sort((a, b) => b.createdAt.toMillis() - a.createdAt.toMillis())
    .forEach((parent) => {
      const replies = replyPosts
        .filter((r) => r.parentId === parent.id)
        .sort((a, b) => a.createdAt.toMillis() - b.createdAt.toMillis());

      nestedPosts.push({ ...parent, replies });
    });

  return (
    <div className="min-h-screen w-full  bg-gray-900 bg-cover bg-center bg-no-repeat text-white p-4 sm:p-6 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-gray-800 p-4 sm:p-6 rounded shadow">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-2">
          Welcome to the {countryName} Travel Forum!
        </h2>
        <p className="text-center text-gray-300 mb-6">
          Ask questions, share tips, and connect with fellow travelers.
        </p>

        <div className="max-h-[600px] overflow-y-auto mb-4">
          {nestedPosts.length === 0 ? (
            <p className="text-gray-400 text-center">No posts yet.</p>
          ) : (
            nestedPosts.map((p) => {
              const isPoster = p.sender === user.email;
              return (
                <PostBlock
                  key={p.id}
                  post={p}
                  isPoster={isPoster}
                  editingPostId={editingPostId}
                  editedText={editedText}
                  replyTo={replyingTo}
                  replyText={replyText}
                  setReplyTo={setReplyingTo}
                  setReplyText={setReplyText}
                  setEditedText={setEditedText}
                  setEditingPostId={setEditingPostId}
                  onPostReply={() => handleReply(p)}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  onSaveEdit={handleSaveEdit}
                  userEmail={user.email}
                />
              );
            })
          )}

          {hasMore && (
            <button
              onClick={() => loadPosts(true)}
              className="mt-2 w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded"
            >
              Show older posts
            </button>
          )}
        </div>

        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          rows={3}
          placeholder="Write your post..."
          className="w-full bg-gray-600 text-white p-3 rounded mb-2"
        />
        <button
          onClick={handlePost}
          className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded mb-4"
        >
          Post
        </button>

        <button
          onClick={() => navigate("/bucketlist")}
          className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded"
        >
          ← Back to Bucket List
        </button>
      </div>
    </div>
  );
}

function PostBlock({
  post,
  isPoster,
  editingPostId,
  editedText,
  replyTo,
  replyText,
  setReplyTo,
  setReplyText,
  setEditedText,
  setEditingPostId,
  onPostReply,
  onEdit,
  onDelete,
  onSaveEdit,
  userEmail,
}: {
  post: PostWithReplies;
  isPoster: boolean;
  editingPostId: string | null;
  editedText: string;
  replyTo: string | null;
  replyText: string;
  setReplyTo: (id: string | null) => void;
  setReplyText: (txt: string) => void;
  setEditedText: (txt: string) => void;
  setEditingPostId: (id: string | null) => void;
  onPostReply: () => void;
  onEdit: (id: string, text: string) => void;
  onDelete: (id: string) => void;
  onSaveEdit: () => void;
  userEmail?: string | null;
}) {
  const relativeTime = post.createdAt?.toDate
    ? formatDistanceToNow(post.createdAt.toDate(), { addSuffix: true })
    : "Just now";

  return (
    <div className="mb-6 p-4 bg-gray-600 rounded shadow-sm">
      <div className="flex justify-between items-center text-sm text-gray-200 mb-2">
        <span className="font-semibold">{post.sender}</span>
        <span className="italic text-xs">{relativeTime}</span>
      </div>

      {editingPostId === post.id ? (
        <>
          <textarea
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="w-full bg-gray-500 text-white p-2 rounded resize-none mb-2"
            rows={3}
          />
          <div className="flex justify-end gap-2">
            <button
              onClick={() => {
                setEditingPostId(null);
                setEditedText("");
              }}
              className="text-sm bg-gray-400 px-3 py-1 rounded"
            >
              Cancel
            </button>
            <button
              onClick={onSaveEdit}
              className="text-sm bg-green-500 hover:bg-green-600 px-3 py-1 rounded"
            >
              Save
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="bg-gray-900 text-white p-3 rounded mb-2">
            <p>{post.text}</p>
          </div>
          <div className="flex gap-4 text-sm text-gray-200">
            <button
              onClick={() => setReplyTo(post.id)}
              className="text-blue-400 hover:underline"
            >
              Reply
            </button>
            {isPoster && (
              <>
                <button
                  onClick={() => onEdit(post.id, post.text)}
                  className="text-yellow-400 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(post.id)}
                  className="text-red-400 hover:underline"
                >
                  Delete
                </button>
              </>
            )}
          </div>
          {replyTo === post.id && (
            <div className="mt-2">
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                className="w-full bg-gray-500 text-white p-2 rounded resize-none mb-2"
                rows={2}
                placeholder="Write your reply..."
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => {
                    setReplyTo(null);
                    setReplyText("");
                  }}
                  className="text-sm bg-gray-400 px-3 py-1 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={onPostReply}
                  className="text-sm bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded"
                >
                  Reply
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {post.replies.length > 0 && (
        <div className="mt-4 pl-4 border-l-2 border-gray-400 space-y-4">
          {post.replies.map((reply) => {
            const replyTime = reply.createdAt?.toDate
              ? formatDistanceToNow(reply.createdAt.toDate(), {
                  addSuffix: true,
                })
              : "Just now";
            const replyisPoster = reply.sender === userEmail;

            return (
              <div key={reply.id} className="bg-gray-700 p-3 rounded">
                <div className="flex justify-between text-xs text-gray-300 mb-1">
                  <span className="font-semibold">{reply.sender}</span>
                  <span>{replyTime}</span>
                </div>

                {editingPostId === reply.id ? (
                  <>
                    <textarea
                      value={editedText}
                      onChange={(e) => setEditedText(e.target.value)}
                      className="w-full bg-gray-500 text-white p-2 rounded resize-none mb-2"
                      rows={3}
                    />
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => {
                          setEditingPostId(null);
                          setEditedText("");
                        }}
                        className="text-sm bg-gray-400 px-3 py-1 rounded"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={onSaveEdit}
                        className="text-sm bg-green-500 hover:bg-green-600 px-3 py-1 rounded"
                      >
                        Save
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-white">{reply.text}</p>
                    {replyisPoster && (
                      <div className="flex gap-4 text-sm text-gray-200 mt-2">
                        <button
                          onClick={() => {
                            onEdit(reply.id, reply.text);
                            setEditingPostId(reply.id);
                            setEditedText(reply.text);
                          }}
                          className="text-yellow-400 hover:underline"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => onDelete(reply.id)}
                          className="text-red-400 hover:underline"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
