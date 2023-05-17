// import axios from "../utils/axios";
import { db, auth } from "@/utils/firebaseConfig";

import {
  addDoc,
  getDocs,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";

// export const getApartmentsList = async () => {
//   const data = await axios.get("/apartments");
//   console.log("data: ", data);
//   return data;
// };

// export const getApartmentById = (id: string) => {
//   return axios.get(`/apartments/${id}`);
// };

export default {
  async reserveApartment(id: string) {
    console.log("id: ", id);
    const reserveRef = doc(db, "users", id);
    try {
      // const docRef = await addDoc(collection(db, "users", id), {
      //  reserved: [],
      // });
      const docRef = await updateDoc(reserveRef, { reserved: id });
      console.log("Document written with ID: ", docRef);
      return docRef;
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  },
  async getReserve() {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      console.log("querySnapshot: ", querySnapshot);
      querySnapshot.forEach(doc => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    } catch (error) {
      console.log("error: ", error);
    }
  },
};
// await addDoc(collection(db, "posts"), data);
