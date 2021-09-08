import { createStore } from "vuex";

export default createStore({
  state: {
    tableData: [
      {
        isFinish: true,
        date: "2020-01-01",
        content: "学习数学",
      },
      {
        isFinish: false,
        date: "2020-01-03",
        content: "学习英语",
      },
      {
        isFinish: true,
        date: "2020-01-02",
        content: "学习语文",
      },
    ],
  },
  getters: {
    getTableData(state) {
      // return state.tableData.sort((a, b) => a.isFinish - b.isFinish);
      return state.tableData;
    },
  },
  mutations: {
    addWork(state, data) {
      state.tableData.push(data);
    },
    changeStatus(state, index) {
      // console.log(state.tableData[index]);
      state.tableData[index].isFinish = !state.tableData[index].isFinish;
    },
  },
  actions: {
    addData({ commit, state }, data) {
      commit("addWork", data);
    },
    changeStatusOfWork({ commit, state }, index) {
      commit("changeStatus", index);
    },
  },
  modules: {},
});
