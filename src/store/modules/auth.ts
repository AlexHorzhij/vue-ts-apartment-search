import { ActionContext } from "vuex";
import { IResponse, ISingUp, ISingIn, State } from "@/types/data";
import API from "@/api/auth";

const initialState = {
  user: {
    userName: null,
    email: null,
    uid: null,
  },
  isAuth: false,
} as State;

const authModule = {
  namespaced: true,
  state: { ...initialState },
  getters: {
    isAuth(state: State) {
      return state.user.uid ? true : false;
    },
    user(state: State) {
      return state.user;
    },
  },
  mutations: {
    setUser(state: State, payload: IResponse) {
      state.user = payload;
    },
    setIsAuth(state: State, payload: boolean) {
      state.isAuth = payload;
    },
    setInitialState(state: State) {
      state.isAuth = initialState.isAuth;
      state.user = initialState.user;
    },
  },
  actions: {
    async registration(
      { commit }: ActionContext<State, State>,
      payload: ISingUp
    ) {
      const data = await API.registrationUser(payload);
      commit("setUser", data);
      commit("setIsAuth", true);
    },
    async login({ commit }: ActionContext<State, State>, payload: ISingIn) {
      const data = await API.loginUser(payload);
      commit("setUser", data);
      commit("setIsAuth", true);
    },
    async logout({ commit }: ActionContext<State, State>) {
      await API.logout();
      commit("setInitialState");
    },
  },
};

export default authModule;
