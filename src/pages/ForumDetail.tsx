import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { joinForum } from "../utils/joinForum";

type Post = { id: string; text: string; sender: string; createdAt: any };

export default function ForumDetail() {
  const { countryName } = useParams();
  const { user } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState("");
  const navigate = useNavigate();

  const loadPosts = async () => {
    if (!countryName) return;
    const q = query(
      collection(db, "forum", countryName, "messages"),
      orderBy("createdAt", "asc")
    );
    const snap = await getDocs(q);
    setPosts(snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) })));
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

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-6 text-center">
        <h2 className="text-2xl font-bold">Log in to see the forum.</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-gray-800 p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Welcome to the {countryName} Travel Forum!
        </h2>
        <p className="text-center">
          Here you can post messages, ask other travelers for tips and connect
          with them.
        </p>

        <div className="max-h-96 overflow-y-auto bg-gray-700 p-4 rounded mb-4">
          {posts.length === 0 ? (
            <p className="text-gray-300 text-center">No posts yet.</p>
          ) : (
            posts.map((p) => (
              <div key={p.id} className="mb-4 p-2 bg-gray-600 rounded">
                <p className="text-sm font-semibold">{p.sender}</p>
                <p className="mt-1">{p.text}</p>
              </div>
            ))
          )}
        </div>

        <div className="flex gap-2 mb-4">
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            rows={3}
            className="flex-grow px-4 py-2 rounded text-white bg-gray-600 resize-none"
            placeholder="Write your post..."
          />
          <button
            onClick={handlePost}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded self-end"
          >
            Post
          </button>
        </div>

        <button
          onClick={() => navigate("/bucketlist")}
          className="mt-4 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded shadow-md transition"
        >
          ← Go back to Bucket List
        </button>
      </div>
    </div>
  );
}
