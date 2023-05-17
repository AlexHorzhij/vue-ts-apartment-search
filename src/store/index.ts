import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";
import authModule from "./modules/auth";

export const store = createStore({
  modules: {
    auth: authModule,
  },
  plugins: [
    new VuexPersistence({
      storage: window.localStorage,
    }).plugin,
  ],
});
