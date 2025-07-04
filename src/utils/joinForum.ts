import { db } from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export async function joinForum(userId: string, countryName: string) {
  const ref = doc(db, "users", userId, "joinedForum", countryName);
  await setDoc(ref, { joinedAt: Date.now() });
}
