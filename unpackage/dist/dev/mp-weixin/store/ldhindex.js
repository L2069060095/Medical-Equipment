"use strict";
var common_vendor = require("../common/vendor.js");
const store = common_vendor.createStore({
  state: {
    userInfo: {
      avatarUrl: "",
      nickName: ""
    },
    youhui: {
      num: "",
      msg1: "",
      msg2: ""
    },
    youhui2: {
      num: "",
      msg1: "",
      msg2: ""
    }
  },
  mutations: {
    save(state, payload) {
      state.userInfo.avatarUrl = payload.avatarUrl;
      state.userInfo.nickName = payload.nickName;
    },
    saveCoupon(state, payload) {
      state.youhui.num = payload.num;
      state.youhui.msg1 = payload.msg1;
      state.youhui.msg2 = payload.msg2;
    },
    saveCoupon2(state, payload) {
      state.youhui2.num = payload.num;
      state.youhui2.msg1 = payload.msg1;
      state.youhui2.msg2 = payload.msg2;
    }
  },
  actions: {}
});
exports.store = store;
