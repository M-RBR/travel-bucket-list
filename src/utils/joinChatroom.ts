import { db } from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export async function joinChatroom(userId: string, countryName: string) {
  const ref = doc(db, "users", userId, "joinedChatrooms", countryName);
  await setDoc(ref, { joinedAt: Date.now() });
}
