var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
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
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// src/app/index.ts
__export(exports, {
  ActiveLink: () => ActiveLink,
  Navbar: () => Navbar
});

// src/app/components/Navbar.tsx
var React = __toModule(require("react"));
var Navbar = (_a) => {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ React.createElement("ul", __spreadValues({}, props), children);
};

// src/app/components/ActiveLink.tsx
var import_router = __toModule(require("next/router"));
var import_link = __toModule(require("next/link"));
var import_react = __toModule(require("react"));
var ActiveLink = (_a) => {
  var _b = _a, {
    children
  } = _b, props = __objRest(_b, [
    "children"
  ]);
  const { asPath, pathname } = (0, import_router.useRouter)();
  const activeClassName = "active";
  const isNode = children.type === void 0;
  const className = pathname === props.href || asPath === props.as ? activeClassName : "";
  return /* @__PURE__ */ import_react.default.createElement("li", {
    className
  }, !isNode && import_react.default.cloneElement(children, __spreadValues({}, props)), isNode && /* @__PURE__ */ import_react.default.createElement(import_link.default, __spreadValues({
    href: props.href
  }, props), children));
};
