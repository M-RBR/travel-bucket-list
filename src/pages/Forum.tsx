import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

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

  if (!user)
    return (
      <p className="text-white text-center">Please log in to view forum.</p>
    );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Forums you have joined:</h1>
      {loading ? (
        <p>Loading forum...</p>
      ) : joinedRooms.length === 0 ? (
        <p>You haven't joined any forum yet.</p>
      ) : (
        <ul className="space-y-2">
          {joinedRooms.map((room) => (
            <li key={room}>
              <a
                href={`/chat/${encodeURIComponent(room)}`}
                className="text-blue-400 underline hover:text-blue-200"
              >
                {room}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
