import { db } from "@/utils/firebaseConfig";

import {
  getDocs,
  collection,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";

interface IRes {
  reserved: string[] | [];
}

export default {
  async reserveApartment(apId: string, userId: string) {
    const reserveRef = doc(db, "users", userId);
    try {
      const docRef = await updateDoc(reserveRef, {
        reserved: arrayUnion(apId),
      });
      return docRef;
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  },
  async unReserveApartment(apId: string, userId: string) {
    const reserveRef = doc(db, "users", userId);
    try {
      const docRef = await updateDoc(reserveRef, {
        reserved: arrayRemove(apId),
      });
      return docRef;
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  },
  async getReserve(id: string) {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      let data = { reserved: [] } as IRes;
      querySnapshot.forEach(doc => {
        if (doc.id === id) {
          data = [doc.data() as IRes][0];
        }
      });
      return data;
    } catch (error) {
      console.log("error: ", error);
    }
  },
};
