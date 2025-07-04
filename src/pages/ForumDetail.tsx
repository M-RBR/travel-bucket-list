/* 

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
  orderBy,
  query,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { joinForum } from "../utils/joinForum";
import { formatDistanceToNow } from "date-fns";

type Post = {
  id: string;
  text: string;
  sender: string;
  createdAt: Timestamp;
};

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

  const loadPosts = async () => {
    if (!countryName) return;
    const q = query(
      collection(db, "forum", countryName, "messages"),
      orderBy("createdAt", "asc")
    );
    const snap = await getDocs(q);
    const postList = snap.docs.map((d) => ({
      ...(d.data() as Post),
      id: d.id,
    }));
    setPosts(postList);
  };

  useEffect(() => {
    if (user && countryName) joinForum(user.uid, countryName);
    loadPosts();
  }, [user, countryName]);

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
    await deleteDoc(doc(db, "forum", countryName, "messages", postId));
    await loadPosts();
  };

  const handleEdit = (postId: string, text: string) => {
    setEditingPostId(postId);
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

  const handleReply = async (originalSender: string) => {
    if (!replyText.trim() || !user || !countryName) return;
    const reply = `@${originalSender} ${replyText}`;
    await addDoc(collection(db, "forum", countryName, "messages"), {
      text: reply,
      sender: user.email || "Anonymous",
      createdAt: serverTimestamp(),
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

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-gray-800 p-4 sm:p-6 rounded shadow">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-2">
          {countryName} Travel Forum
        </h2>
        <p className="text-center text-sm sm:text-base text-gray-300 mb-6">
          Ask questions, share tips, and connect with fellow travelers.
        </p>

        <div className="max-h-96 overflow-y-auto bg-gray-700 p-4 rounded mb-6">
          {posts.length === 0 ? (
            <p className="text-gray-300 text-center">No posts yet.</p>
          ) : (
            posts.map((p) => {
              const isOwner = p.sender === user.email;
              const relativeTime = p.createdAt?.toDate
                ? formatDistanceToNow(p.createdAt.toDate(), { addSuffix: true })
                : "Just now";

              return (
                <div
                  key={p.id}
                  className="mb-6 p-4 bg-gray-600 rounded shadow-sm"
                >
                  <div className="flex justify-between items-center text-sm text-gray-200 mb-2">
                    <span className="font-semibold">{p.sender}</span>
                    <span className="italic text-xs">{relativeTime}</span>
                  </div>

                  {editingPostId === p.id ? (
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
                          onClick={handleSaveEdit}
                          className="text-sm bg-green-500 hover:bg-green-600 px-3 py-1 rounded"
                        >
                          Save
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="bg-gray-900 text-white p-3 rounded mb-2">
                        <p>{p.text}</p>
                      </div>
                      <div className="flex gap-4 text-sm text-gray-200">
                        <button
                          onClick={() => setReplyingTo(p.id)}
                          className="text-blue-400 hover:underline"
                        >
                          Reply
                        </button>
                        {isOwner && (
                          <>
                            <button
                              onClick={() => handleEdit(p.id, p.text)}
                              className="text-yellow-400 hover:underline"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(p.id)}
                              className="text-red-400 hover:underline"
                            >
                              Delete
                            </button>
                          </>
                        )}
                      </div>
                      {replyingTo === p.id && (
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
                                setReplyingTo(null);
                                setReplyText("");
                              }}
                              className="text-sm bg-gray-400 px-3 py-1 rounded"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={() => handleReply(p.sender)}
                              className="text-sm bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded"
                            >
                              Reply
                            </button>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })
          )}
        </div>

        <div className="mb-4">
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            rows={3}
            className="w-full px-4 py-2 rounded text-white bg-gray-600 resize-none mb-2"
            placeholder="Write your post..."
          />
          <button
            onClick={handlePost}
            className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded shadow"
          >
            Post
          </button>
        </div>

        <button
          onClick={() => navigate("/bucketlist")}
          className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded shadow transition"
        >
          ← Go back to Bucket List
        </button>
      </div>
    </div>
  );
}

*/

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
import { joinForum } from "../utils/joinForum";
import { formatDistanceToNow } from "date-fns";

type Post = {
  id: string;
  text: string;
  sender: string;
  createdAt: Timestamp;
};

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
  const [lastVisible, setLastVisible] = useState<any>(null);
  const [hasMore, setHasMore] = useState(true);

  const pageSize = 10;

  async function loadPosts(loadMore = false) {
    if (!countryName) return;

    let q = query(
      collection(db, "forum", countryName, "messages"),
      orderBy("createdAt", "asc"),
      limit(pageSize)
    );
    if (loadMore && lastVisible) {
      q = query(
        collection(db, "forum", countryName, "messages"),
        orderBy("createdAt", "asc"),
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
  }

  useEffect(() => {
    if (user && countryName) joinForum(user.uid, countryName);
    loadPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, countryName]);

  async function handlePost() {
    if (!newPost.trim() || !user || !countryName) return;
    await addDoc(collection(db, "forum", countryName, "messages"), {
      text: newPost.trim(),
      sender: user.email || "Anonymous",
      createdAt: serverTimestamp(),
    });
    setNewPost("");
    await loadPosts();
  }

  async function handleDelete(postId: string) {
    if (!countryName) return;
    await deleteDoc(doc(db, "forum", countryName, "messages", postId));
    setPosts((prev) => prev.filter((p) => p.id !== postId));
  }

  function handleEdit(id: string, text: string) {
    setEditingPostId(id);
    setEditedText(text);
  }

  async function handleSaveEdit() {
    if (!countryName || !editingPostId) return;
    await updateDoc(doc(db, "forum", countryName, "messages", editingPostId), {
      text: editedText,
    });
    setEditingPostId(null);
    setEditedText("");
    await loadPosts();
  }

  async function handleReply(original: Post) {
    if (!replyText.trim() || !user || !countryName) return;
    await addDoc(collection(db, "forum", countryName, "messages"), {
      text: `@${original.sender} ${replyText}`,
      sender: user.email || "Anonymous",
      createdAt: serverTimestamp(),
    });
    setReplyText("");
    setReplyingTo(null);
    await loadPosts();
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-6 text-center">
        <h2 className="text-2xl font-bold">Log in to see the forum.</h2>
      </div>
    );
  }

  const nestedPosts = posts.reduce((acc: (Post & { replies: Post[] })[], p) => {
    const match = p.text.match(/^@([^ ]+) /);
    if (match) {
      const [, target] = match;
      const parent = acc.find((pr) => pr.sender === target);
      if (parent) {
        parent.replies.push(p);
      } else {
        acc.push({ ...p, replies: [] });
      }
    } else {
      acc.push({ ...p, replies: [] });
    }
    return acc;
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-gray-800 p-4 sm:p-6 rounded shadow">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-2">
          {countryName} Travel Forum
        </h2>
        <p className="text-center text-gray-300 mb-6">
          Ask questions, share tips, and connect with fellow travelers.
        </p>

        <div className="max-h-96 overflow-y-auto mb-4">
          {nestedPosts.length === 0 ? (
            <p className="text-gray-400 text-center">No posts yet.</p>
          ) : (
            nestedPosts.map((p) => {
              const isOwner = p.sender === user.email;
              return (
                <PostBlock
                  key={p.id}
                  post={p}
                  isOwner={isOwner}
                  editingPostId={editingPostId}
                  editedText={editedText}
                  replyTo={replyingTo}
                  replyText={replyText}
                  setReplyTo={setReplyingTo}
                  setReplyText={setReplyText}
                  setEditedText={setEditedText}
                  setEditingPostId={setEditingPostId}
                  onPostReply={() => handleReply(p)}
                  onEdit={() => handleEdit(p.id, p.text)}
                  onDelete={() => handleDelete(p.id)}
                  onSaveEdit={handleSaveEdit}
                />
              );
            })
          )}
          {hasMore && (
            <button
              onClick={() => loadPosts(true)}
              className="mt-2 w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded"
            >
              Load more
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
          ← Go back to Bucket List
        </button>
      </div>
    </div>
  );
}

function PostBlock({
  post,
  isOwner,
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
}: {
  post: Post & { replies: Post[] };
  isOwner: boolean;
  editingPostId: string | null;
  editedText: string;
  replyTo: string | null;
  replyText: string;
  setReplyTo: (id: string | null) => void;
  setReplyText: (txt: string) => void;
  setEditedText: (txt: string) => void;
  setEditingPostId: (id: string | null) => void;
  onPostReply: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onSaveEdit: () => void;
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
            {isOwner && (
              <>
                <button
                  onClick={onEdit}
                  className="text-yellow-400 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={onDelete}
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

            return (
              <div key={reply.id} className="bg-gray-700 p-3 rounded">
                <div className="flex justify-between text-xs text-gray-300 mb-1">
                  <span className="font-semibold">{reply.sender}</span>
                  <span>{replyTime}</span>
                </div>
                <p className="text-white">{reply.text}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
