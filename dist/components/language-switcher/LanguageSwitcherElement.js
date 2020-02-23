"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
exports.LanguageSwitcherElement = function (_a) {
    var component = _a.component, children = _a.children, isHidden = _a.isHidden, props = __rest(_a, ["component", "children", "isHidden"]);
    return isHidden ? (react_1.default.createElement(react_1.default.Fragment, null, children)) : (react_1.default.createElement(component, props, children));
};
//# sourceMappingURL=LanguageSwitcherElement.js.map