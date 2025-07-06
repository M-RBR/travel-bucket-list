import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import { Link } from "react-router";

export default function Forum() {
  const { user } = useAuth();
  const [joinedRooms, setJoinedRooms] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRooms = async () => {
      if (!user) return;
      const userRoomsRef = collection(db, "users", user.uid, "joinedForum");
      const q = query(userRoomsRef);
      const snapshot = await getDocs(q);
      const rooms = snapshot.docs.map((doc) => doc.id);
      setJoinedRooms(rooms);
      setLoading(false);
    };

    loadRooms();
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-900 p-6 text-center text-white">
        <p>Please log in to view forum.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden p-6">
              <h1 className="text-3xl font-bold text-center text-white mb-4">
                Forums you have joined:
              </h1>

              {loading ? (
                <p className="text-white text-center">Loading forum...</p>
              ) : joinedRooms.length === 0 ? (
                <p className="text-gray-300 text-center">
                  You haven't joined any forum yet.
                </p>
              ) : (
                <ul className="list-disc pl-6 space-y-2 text-white">
                  {joinedRooms.map((room) => (
                    <li key={room}>
                      <Link
                        to={`/chat/${encodeURIComponent(room)}`}
                        className="text-blue-400 hover:text-blue-300 underline"
                      >
                        {room}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
