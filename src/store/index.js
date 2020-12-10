import { createStore } from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

import todos from "./todos/";

export const store = createStore({
  modules: {
    todos,
  },
  state() {
    return {
      isUserLogged: false,
    };
  },
  getters,
  actions,
  mutations,
});
