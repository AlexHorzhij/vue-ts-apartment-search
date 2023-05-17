import { Store } from "@/vuex";

declare module "@vue/runtime-core" {
  interface State {
    user: {
      userName: string | null;
      email: string | null;
      uid: string | null;
    };
    isAuth: boolean;
  }
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
