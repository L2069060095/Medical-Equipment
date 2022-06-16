"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
var store_ldhindex = require("./store/ldhindex.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/class/class.js";
  "./pages/cart/cart.js";
  "./pages/search/search.js";
  "./pages/introduce/introduce.js";
  "./pages/swiperdetail/swiperdetail.js";
  "./components/cartpop/cartpop.js";
  "./pages/me/me.js";
  "./pages/ldhmymessage/ldhmymessage.js";
  "./pages/ldhcollection/ldhcollection.js";
  "./pages/ldhscore/ldhscore.js";
  "./pages/ldhdiscount/ldhdiscount.js";
  "./pages/ldhcard/ldhcard.js";
  "./pages/ldhbalance/ldhbalance.js";
  "./pages/ldhget/ldhget.js";
  "./pages/ldhconvert/ldhconvert.js";
  "./pages/ldhgrade/ldhgrade.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.warn("\u5F53\u524D\u7EC4\u4EF6\u4EC5\u652F\u6301 uni_modules \u76EE\u5F55\u7ED3\u6784 \uFF0C\u8BF7\u5347\u7EA7 HBuilderX \u5230 3.1.0 \u7248\u672C\u4EE5\u4E0A\uFF01");
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/uni/vue/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(store_ldhindex.store);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
