import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebaseConfig";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { joinChatroom } from "../utils/joinChatroom";

type Message = {
  id: string;
  text: string;
  sender: string;
  createdAt: any;
};

export default function ChatroomDetail() {
  const { countryName } = useParams();
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (user && countryName) {
      joinChatroom(user.uid, countryName);
    }
  }, [user, countryName]);

  useEffect(() => {
    if (!countryName) return;

    const q = query(
      collection(db, "chatrooms", countryName, "messages"),
      orderBy("createdAt", "asc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs: Message[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Message[];
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, [countryName]);

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !user || !countryName) return;

    try {
      await addDoc(collection(db, "chatrooms", countryName, "messages"), {
        text: newMessage.trim(),
        sender: user.email || "Anonymous",
        createdAt: serverTimestamp(),
      });
      setNewMessage("");
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-6 text-center">
        <h2 className="text-2xl font-bold">Log in to join the chatroom</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-gray-800 p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Welcome to the {countryName} Chatroom!
        </h2>

        <div className="h-96 overflow-y-auto bg-gray-700 p-4 rounded mb-4">
          {messages.length === 0 ? (
            <p className="text-gray-300 text-center">No messages yet.</p>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                className={`mb-2 p-2 rounded ${
                  msg.sender === user.email
                    ? "bg-green-600 text-right"
                    : "bg-blue-600"
                }`}
              >
                <p className="text-sm font-semibold">{msg.sender}</p>
                <p>{msg.text}</p>
              </div>
            ))
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="flex gap-2">
          <input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSendMessage();
            }}
            className="flex-grow px-4 py-2 rounded text-black"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSendMessage}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
