/*

import { db } from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export async function joinForum(userId: string, countryName: string) {
  const ref = doc(db, "users", userId, "joinedForum", countryName);
  await setDoc(ref, { joinedAt: Date.now() });
}

/*

import { db } from "../firebaseConfig";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

export async function trackUserPostActivity(
  userId: string,
  countryName: string
) {
  const userRef = doc(db, "users", userId);

  // This will add the country to a 'postedInCountries' array if it's not already there
  await updateDoc(userRef, {
    postedInCountries: arrayUnion(countryName),
  });
}

*/
