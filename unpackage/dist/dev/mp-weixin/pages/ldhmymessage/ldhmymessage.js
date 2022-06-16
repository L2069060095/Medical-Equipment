"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      code: {
        qr: "https://img0.baidu.com/it/u=3881180510,1470858589&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
      },
      icon: {
        yue: "http://v4.h2ovip.top/web/statics/img/mall/user-center/icon-balance.png"
      }
    };
  },
  computed: __spreadValues({}, common_vendor.mapState(["userInfo"])),
  methods: {
    tobalance() {
      common_vendor.index.navigateTo({
        url: "/pages/ldhbalance/ldhbalance"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: _ctx.userInfo.avatarUrl,
    b: $data.code.qr,
    c: $data.icon.yue,
    d: common_vendor.o((...args) => $options.tobalance && $options.tobalance(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c7954434"], ["__file", "F:/uni/vue/pages/ldhmymessage/ldhmymessage.vue"]]);
wx.createPage(MiniProgramPage);
