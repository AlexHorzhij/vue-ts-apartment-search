import { db, auth } from "@/utils/firebaseConfig";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { IResponse, ISingUp, ISingIn } from "@/types/data";

export default {
  async registrationUser({ email, password, name }: ISingUp) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user !== null) {
        await updateProfile(user, {
          displayName: name,
        });
        await setDoc(doc(db, "users", user.uid), {
          reserved: [],
        });
      }
      const response = auth.currentUser;
      if (response) {
        const data: IResponse = {
          userName: response.displayName,
          email: response.email,
          uid: response.uid,
        };
        return data;
      }
      return null;
    } catch (error) {
      console.log("error: ", error);
    }
  },
  async loginUser({ email, password }: ISingIn) {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const data = {
        userName: user.displayName,
        email: user.email,
        uid: user.uid,
      };
      return data;
    } catch (error) {
      console.log("error: ", error);
    }
  },
  async logout() {
    try {
      await signOut(auth);
    } catch (error) {
      console.log("error: ", error);
    }
  },
};
