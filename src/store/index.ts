import { createStore, Store } from "vuex";
import VuexPersistence from "vuex-persist";
import API from "@/api/auth";

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

const initialState = {
  user: {
    userName: null,
    email: null,
    uid: null,
  },
  isAuth: false,
};

export const store = createStore({
  state: { ...initialState },
  getters: {
    isAuth(state) {
      return state.user.uid ? true : false;
    },
    user(state) {
      return state.user;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setIsAuth(state, payload) {
      state.isAuth = payload;
    },
    setInitialState(state) {
      state.isAuth = initialState.isAuth;
      state.user = initialState.user;
    },
  },
  actions: {
    async registration({ commit }, payload) {
      const data = await API.registrationUser(payload);
      commit("setUser", data);
      commit("setIsAuth", true);
    },
    async login({ commit }, payload) {
      const data = await API.loginUser(payload);
      commit("setUser", data);
      commit("setIsAuth", true);
    },
    async logout({ commit }) {
      await API.logout();
      commit("setInitialState");
    },
  },
  plugins: [
    new VuexPersistence({
      storage: window.localStorage,
    }).plugin,
  ],
  // modules: {},
});
