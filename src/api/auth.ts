import { app } from "@/utils/firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export const auth = getAuth(app);

interface ISingUp {
  email: string;
  password: string;
  name: string;
}

export default {
  async registrationUser({ email, password, name }: ISingUp) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user !== null) {
        await updateProfile(user, {
          displayName: name,
        });
      }
      const data = await auth.currentUser;
      console.log("data: ", data);
    } catch (error) {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      console.log("error: ", error);
    }
  },
  async loginUser(email: string, password: string) {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log("user: ", user);
    } catch (error) {
      console.log("error: ", error);
    }
  },
};
