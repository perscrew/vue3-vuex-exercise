import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
  state() {
    return {
      todos: [
        { id: "t1", name: "Todo 1" },
        { id: "t2", name: "Todo 2" },
        { id: "t3", name: "Todo 3" },
      ],
    };
  },
  getters,
  mutations,
  actions,
};
