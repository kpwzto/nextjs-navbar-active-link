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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/app/components/Navbar.tsx
import {
  createElement
} from "react";
var Navbar = (_a) => {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ createElement("ul", __spreadValues({}, props), children);
};

// src/app/components/ActiveLink.tsx
import { useRouter } from "next/router";
import React2 from "react";
var ActiveLink = (_a) => {
  var _b = _a, {
    children
  } = _b, props = __objRest(_b, [
    "children"
  ]);
  const { asPath, pathname } = useRouter();
  const activeClassName = "active";
  const className = pathname === props.href || asPath === props.as ? activeClassName : "";
  return /* @__PURE__ */ React2.createElement("li", {
    className
  }, /* @__PURE__ */ React2.createElement("a", __spreadValues({
    href: props.href
  }, props), children));
};
export {
  ActiveLink,
  Navbar
};
