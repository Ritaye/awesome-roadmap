"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[roadmap]",{

/***/ "./content/roadmaps/102-devops/content/101-os-concepts/106-posix.md":
/*!**************************************************************************!*\
  !*** ./content/roadmaps/102-devops/content/101-os-concepts/106-posix.md ***!
  \**************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MDXContent; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ \"./node_modules/@mdx-js/react/dist/esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {\n    };\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {\n    };\n    var target = {\n    };\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\n/* @jsxRuntime classic */ /* @jsx mdx */ var makeShortcode = function(name) {\n    return function MDXDefaultShortcode(props) {\n        console.warn(\"Component \" + name + \" was not imported, exported, or provided by MDXProvider as global scope\");\n        return(/*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(\"div\", Object.assign({\n        }, props, {\n            __source: {\n                fileName: \"/Users/keagan/Desktop/awesome-roadmap/content/roadmaps/102-devops/content/101-os-concepts/106-posix.md\",\n                lineNumber: 11,\n                columnNumber: 14\n            },\n            __self: this\n        })));\n    };\n};\nvar ResourceGroupTitle = makeShortcode(\"ResourceGroupTitle\");\n_c = ResourceGroupTitle;\nvar BadgeLink = makeShortcode(\"BadgeLink\");\n_c1 = BadgeLink;\nvar layoutProps = {\n};\nvar MDXLayout = \"wrapper\";\nfunction MDXContent(_param) {\n    var components = _param.components, props = _objectWithoutProperties(_param, [\n        \"components\"\n    ]);\n    return(/*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(MDXLayout, Object.assign({\n    }, layoutProps, props, {\n        components: components,\n        mdxType: \"MDXLayout\",\n        __source: {\n            fileName: \"/Users/keagan/Desktop/awesome-roadmap/content/roadmaps/102-devops/content/101-os-concepts/106-posix.md\",\n            lineNumber: 23,\n            columnNumber: 10\n        },\n        __self: this\n    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(\"h1\", {\n        __source: {\n            fileName: \"/Users/keagan/Desktop/awesome-roadmap/content/roadmaps/102-devops/content/101-os-concepts/106-posix.md\",\n            lineNumber: 24,\n            columnNumber: 5\n        },\n        __self: this\n    }, \"POSIX 基础\"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(\"p\", {\n        __source: {\n            fileName: \"/Users/keagan/Desktop/awesome-roadmap/content/roadmaps/102-devops/content/101-os-concepts/106-posix.md\",\n            lineNumber: 25,\n            columnNumber: 5\n        },\n        __self: this\n    }, \"POSIX（便携式操作系统接口）是一个用于保持操作系统之间兼容性的标准系列。它描述了符合标准的操作系统应该为软件提供的实用程序、API和服务，从而使程序从一个系统移植到另一个系统更加容易。\"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(\"p\", {\n        __source: {\n            fileName: \"/Users/keagan/Desktop/awesome-roadmap/content/roadmaps/102-devops/content/101-os-concepts/106-posix.md\",\n            lineNumber: 26,\n            columnNumber: 5\n        },\n        __self: this\n    }, \"一个实际的例子：在类似Unix的操作系统中，有三个*标准流，\", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(\"inlineCode\", {\n        parentName: \"p\",\n        __source: {\n            fileName: \"/Users/keagan/Desktop/awesome-roadmap/content/roadmaps/102-devops/content/101-os-concepts/106-posix.md\",\n            lineNumber: 26,\n            columnNumber: 42\n        },\n        __self: this\n    }, \"stdin\"), \"、\", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(\"inlineCode\", {\n        parentName: \"p\",\n        __source: {\n            fileName: \"/Users/keagan/Desktop/awesome-roadmap/content/roadmaps/102-devops/content/101-os-concepts/106-posix.md\",\n            lineNumber: 26,\n            columnNumber: 96\n        },\n        __self: this\n    }, \"stdout\"), \"和\", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(\"inlineCode\", {\n        parentName: \"p\",\n        __source: {\n            fileName: \"/Users/keagan/Desktop/awesome-roadmap/content/roadmaps/102-devops/content/101-os-concepts/106-posix.md\",\n            lineNumber: 26,\n            columnNumber: 151\n        },\n        __self: this\n    }, \"stderr\"), \"--它们是你在使用终端时可能会遇到的I/O连接，因为它们管理来自\", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(\"strong\", {\n        parentName: \"p\",\n        __source: {\n            fileName: \"/Users/keagan/Desktop/awesome-roadmap/content/roadmaps/102-devops/content/101-os-concepts/106-posix.md\",\n            lineNumber: 26,\n            columnNumber: 237\n        },\n        __self: this\n    }, \"标准输入\"), \"（stdin）、\", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(\"strong\", {\n        parentName: \"p\",\n        __source: {\n            fileName: \"/Users/keagan/Desktop/awesome-roadmap/content/roadmaps/102-devops/content/101-os-concepts/106-posix.md\",\n            lineNumber: 26,\n            columnNumber: 289\n        },\n        __self: this\n    }, \"标准输出\"), \"（stdout）和\", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(\"strong\", {\n        parentName: \"p\",\n        __source: {\n            fileName: \"/Users/keagan/Desktop/awesome-roadmap/content/roadmaps/102-devops/content/101-os-concepts/106-posix.md\",\n            lineNumber: 26,\n            columnNumber: 342\n        },\n        __self: this\n    }, \"标准错误\"), \"（stderr）的流。\"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(\"p\", {\n        __source: {\n            fileName: \"/Users/keagan/Desktop/awesome-roadmap/content/roadmaps/102-devops/content/101-os-concepts/106-posix.md\",\n            lineNumber: 27,\n            columnNumber: 5\n        },\n        __self: this\n    }, \"因此，在这种情况下，当我们想与这些流中的任何一个进行交互时（例如通过一个进程），POSIX操作系统的API使之更容易--例如，在\", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(\"inlineCode\", {\n        parentName: \"p\",\n        __source: {\n            fileName: \"/Users/keagan/Desktop/awesome-roadmap/content/roadmaps/102-devops/content/101-os-concepts/106-posix.md\",\n            lineNumber: 27,\n            columnNumber: 76\n        },\n        __self: this\n    }, \"<unistd.h>\"), \"C头中，stdin、stderr和stdout被定义为\", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(\"inlineCode\", {\n        parentName: \"p\",\n        __source: {\n            fileName: \"/Users/keagan/Desktop/awesome-roadmap/content/roadmaps/102-devops/content/101-os-concepts/106-posix.md\",\n            lineNumber: 27,\n            columnNumber: 161\n        },\n        __self: this\n    }, \"STDIN_FILENO\"), \"、\", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(\"inlineCode\", {\n        parentName: \"p\",\n        __source: {\n            fileName: \"/Users/keagan/Desktop/awesome-roadmap/content/roadmaps/102-devops/content/101-os-concepts/106-posix.md\",\n            lineNumber: 27,\n            columnNumber: 222\n        },\n        __self: this\n    }, \"STDERR_FILENO\"), \"和\", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(\"inlineCode\", {\n        parentName: \"p\",\n        __source: {\n            fileName: \"/Users/keagan/Desktop/awesome-roadmap/content/roadmaps/102-devops/content/101-os-concepts/106-posix.md\",\n            lineNumber: 27,\n            columnNumber: 284\n        },\n        __self: this\n    }, \"STDOUT_FILENO\"), \"。\"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(\"p\", {\n        __source: {\n            fileName: \"/Users/keagan/Desktop/awesome-roadmap/content/roadmaps/102-devops/content/101-os-concepts/106-posix.md\",\n            lineNumber: 28,\n            columnNumber: 5\n        },\n        __self: this\n    }, \"POSIX还为退出代码、文件系统语义和其他一些命令行实用程序接口惯例增加了一个标准。\"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(ResourceGroupTitle, {\n        mdxType: \"ResourceGroupTitle\",\n        __source: {\n            fileName: \"/Users/keagan/Desktop/awesome-roadmap/content/roadmaps/102-devops/content/101-os-concepts/106-posix.md\",\n            lineNumber: 29,\n            columnNumber: 5\n        },\n        __self: this\n    }, \"Free Content\"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(BadgeLink, {\n        colorScheme: \"blue\",\n        badgeText: \"Official Documentation\",\n        href: \"https://pubs.opengroup.org/onlinepubs/9699919799/\",\n        mdxType: \"BadgeLink\",\n        __source: {\n            fileName: \"/Users/keagan/Desktop/awesome-roadmap/content/roadmaps/102-devops/content/101-os-concepts/106-posix.md\",\n            lineNumber: 30,\n            columnNumber: 5\n        },\n        __self: this\n    }, \"POSIX standard by IEEE\"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(BadgeLink, {\n        colorScheme: \"yellow\",\n        badgeText: \"Read\",\n        href: \"https://unix.stackexchange.com/a/220877\",\n        mdxType: \"BadgeLink\",\n        __source: {\n            fileName: \"/Users/keagan/Desktop/awesome-roadmap/content/roadmaps/102-devops/content/101-os-concepts/106-posix.md\",\n            lineNumber: 31,\n            columnNumber: 5\n        },\n        __self: this\n    }, \"Summary of some POSIX implementations\"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(BadgeLink, {\n        colorScheme: \"yellow\",\n        badgeText: \"Read\",\n        href: \"https://www.baeldung.com/linux/posix\",\n        mdxType: \"BadgeLink\",\n        __source: {\n            fileName: \"/Users/keagan/Desktop/awesome-roadmap/content/roadmaps/102-devops/content/101-os-concepts/106-posix.md\",\n            lineNumber: 32,\n            columnNumber: 5\n        },\n        __self: this\n    }, \"A guide to POSIX\")));\n};\n_c2 = MDXContent;\n;\nMDXContent.isMDXComponent = true;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ResourceGroupTitle\");\n$RefreshReg$(_c1, \"BadgeLink\");\n$RefreshReg$(_c2, \"MDXContent\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZW50L3JvYWRtYXBzLzEwMi1kZXZvcHMvY29udGVudC8xMDEtb3MtY29uY2VwdHMvMTA2LXBvc2l4Lm1kLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ3lCO0FBQ1U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkMsRUFBeUIsd0JBQ3pCLEVBQWMsYUFHZCxHQUFLLENBQUNFLGFBQWEsR0FBR0MsUUFBUSxDQUFSQSxJQUFJO0lBQUksTUFBTSxDQUFOLFFBQVEsQ0FBQ0MsbUJBQW1CLENBQUNDLEtBQUssRUFBRSxDQUFDO1FBQzdEQyxPQUFPLENBQUNDLElBQUksQ0FBQyxDQUFZLGNBQUdKLElBQUksR0FBRyxDQUF5RTtRQUM1RyxNQUFNLGtFQUFFSyxDQUFHO1dBQUtILEtBQUs7Ozs7Ozs7O0lBQ3ZCLENBQUM7O0FBQ0wsR0FBSyxDQUFDSSxrQkFBa0IsR0FBR1AsYUFBYSxDQUFDLENBQW9CO0tBQXZETyxrQkFBa0I7QUFDeEIsR0FBSyxDQUFDQyxTQUFTLEdBQUdSLGFBQWEsQ0FBQyxDQUFXO01BQXJDUSxTQUFTO0FBQ2YsR0FBSyxDQUFDQyxXQUFXLEdBQUcsQ0FBQztBQUVyQixDQUFDO0FBQ0QsR0FBSyxDQUFDQyxTQUFTLEdBQUcsQ0FBUztBQUNaLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLE1BR2xDLEVBQUUsQ0FBQztRQUZGQyxVQUFVLEdBRHVCLE1BR2xDLENBRkNBLFVBQVUsRUFDUFQsS0FBSyw0QkFGeUIsTUFHbEM7UUFGQ1MsQ0FBVTs7SUFHVixNQUFNLGtFQUFFRixTQUFTO09BQUtELFdBQVcsRUFBTU4sS0FBSztRQUFFUyxVQUFVLEVBQUVBLFVBQVU7UUFBRUMsT0FBTyxFQUFDLENBQVc7Ozs7Ozs7eUVBQ3RGQyxDQUFFOzs7Ozs7O09BQUcsQ0FBUSxpRkFDVEMsQ0FBSDs7Ozs7OztPQUFHLENBQThGOzs7Ozs7O09BQzlGLENBQThCO1FBQWdFRSxVQUFVLEVBQUMsQ0FBRzs7Ozs7OztPQUFHLENBQUssU0FBaUIsQ0FBQyx1RUFBS0QsQ0FBVTtRQUFDQyxVQUFVLEVBQUMsQ0FBRzs7Ozs7OztPQUFHLENBQU0sVUFBaUIsQ0FBQyx1RUFBS0QsQ0FBVTtRQUFDQyxVQUFVLEVBQUMsQ0FBRzs7Ozs7OztPQUFHLENBQU0sVUFBaUIsQ0FBZ0M7UUFBZ0VBLFVBQVUsRUFBQyxDQUFHOzs7Ozs7O09BQUcsQ0FBSSxnQkFBcUIsQ0FBUTtRQUFnQkEsVUFBVSxFQUFDLENBQUc7Ozs7Ozs7T0FBRyxDQUFJLGdCQUFxQixDQUFTO1FBQWdCQSxVQUFVLEVBQUMsQ0FBRzs7Ozs7OztPQUFHLENBQUksZ0JBQXFCLENBQVc7Ozs7Ozs7T0FDamhCLENBQWdFO1FBQTBIQSxVQUFVLEVBQUMsQ0FBRzs7Ozs7OztPQUFHLENBQVUsY0FBaUIsQ0FBMkI7UUFBZ0NBLFVBQVUsRUFBQyxDQUFHOzs7Ozs7O09BQUcsQ0FBWSxnQkFBaUIsQ0FBQyx1RUFBS0QsQ0FBVTtRQUFDQyxVQUFVLEVBQUMsQ0FBRzs7Ozs7OztPQUFHLENBQWEsaUJBQWlCLENBQUMsdUVBQUtELENBQVU7UUFBQ0MsVUFBVSxFQUFDLENBQUc7Ozs7Ozs7T0FBRyxDQUFhLGlCQUFpQixDQUFDLHdFQUNoVkYsQ0FBbkk7Ozs7Ozs7T0FBRyxDQUEwQztRQUMzQkYsT0FBTyxFQUFDLENBQW9COzs7Ozs7O09BQUMsQ0FBWSxpRkFDNURMLFNBQVM7UUFBQ1csV0FBVyxFQUFDLENBQU07UUFBQ0MsU0FBUyxFQUFDLENBQXdCO1FBQUNDLElBQUksRUFBQyxDQUFtRDtRQUFDUixPQUFPLEVBQUMsQ0FBVzs7Ozs7OztPQUFDLENBQXNCLDJGQUNuS0wsU0FBUztRQUFDVyxXQUFXLEVBQUMsQ0FBUTtRQUFDQyxTQUFTLEVBQUMsQ0FBTTtRQUFDQyxJQUFJLEVBQUMsQ0FBeUM7UUFBQ1IsT0FBTyxFQUFDLENBQVc7Ozs7Ozs7T0FBQyxDQUFxQywwR0FDeEpMLFNBQVM7UUFBQ1csV0FBVyxFQUFDLENBQVE7UUFBQ0MsU0FBUyxFQUFDLENBQU07UUFBQ0MsSUFBSSxFQUFDLENBQXNDO1FBQUNSLE9BQU8sRUFBQyxDQUFXOzs7Ozs7O09BQUMsQ0FBZ0I7QUFFckksQ0FBQztNQWZ1QkYsVUFBVTs7QUFrQmxDQSxVQUFVLENBQUNXLGNBQWMsR0FBRyxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRlbnQvcm9hZG1hcHMvMTAyLWRldm9wcy9jb250ZW50LzEwMS1vcy1jb25jZXB0cy8xMDYtcG9zaXgubWQ/NTg0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qIEBqc3ggbWR4ICovXG5cblxuY29uc3QgbWFrZVNob3J0Y29kZSA9IG5hbWUgPT4gZnVuY3Rpb24gTURYRGVmYXVsdFNob3J0Y29kZShwcm9wcykge1xuICAgICAgY29uc29sZS53YXJuKFwiQ29tcG9uZW50IFwiICsgbmFtZSArIFwiIHdhcyBub3QgaW1wb3J0ZWQsIGV4cG9ydGVkLCBvciBwcm92aWRlZCBieSBNRFhQcm92aWRlciBhcyBnbG9iYWwgc2NvcGVcIilcbiAgICAgIHJldHVybiA8ZGl2IHsuLi5wcm9wc30vPlxuICAgIH07XG5jb25zdCBSZXNvdXJjZUdyb3VwVGl0bGUgPSBtYWtlU2hvcnRjb2RlKFwiUmVzb3VyY2VHcm91cFRpdGxlXCIpO1xuY29uc3QgQmFkZ2VMaW5rID0gbWFrZVNob3J0Y29kZShcIkJhZGdlTGlua1wiKTtcbmNvbnN0IGxheW91dFByb3BzID0ge1xuICBcbn07XG5jb25zdCBNRFhMYXlvdXQgPSBcIndyYXBwZXJcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG4gICAgPGgxPntgUE9TSVgg5Z+656GAYH08L2gxPlxuICAgIDxwPntgUE9TSVjvvIjkvr/mkLrlvI/mk43kvZzns7vnu5/mjqXlj6PvvInmmK/kuIDkuKrnlKjkuo7kv53mjIHmk43kvZzns7vnu5/kuYvpl7TlhbzlrrnmgKfnmoTmoIflh4bns7vliJfjgILlroPmj4/ov7DkuobnrKblkIjmoIflh4bnmoTmk43kvZzns7vnu5/lupTor6XkuLrova/ku7bmj5DkvpvnmoTlrp7nlKjnqIvluo/jgIFBUEnlkozmnI3liqHvvIzku47ogIzkvb/nqIvluo/ku47kuIDkuKrns7vnu5/np7vmpI3liLDlj6bkuIDkuKrns7vnu5/mm7TliqDlrrnmmJPjgIJgfTwvcD5cbiAgICA8cD57YOS4gOS4quWunumZheeahOS+i+WtkO+8muWcqOexu+S8vFVuaXjnmoTmk43kvZzns7vnu5/kuK3vvIzmnInkuInkuKoq5qCH5YeG5rWB77yMYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgc3RkaW5gfTwvaW5saW5lQ29kZT57YOOAgWB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHN0ZG91dGB9PC9pbmxpbmVDb2RlPntg5ZKMYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgc3RkZXJyYH08L2lubGluZUNvZGU+e2AtLeWug+S7rOaYr+S9oOWcqOS9v+eUqOe7iOerr+aXtuWPr+iDveS8mumBh+WIsOeahEkvT+i/nuaOpe+8jOWboOS4uuWug+S7rOeuoeeQhuadpeiHqmB9PHN0cm9uZyBwYXJlbnROYW1lPVwicFwiPntg5qCH5YeG6L6T5YWlYH08L3N0cm9uZz57YO+8iHN0ZGlu77yJ44CBYH08c3Ryb25nIHBhcmVudE5hbWU9XCJwXCI+e2DmoIflh4bovpPlh7pgfTwvc3Ryb25nPntg77yIc3Rkb3V077yJ5ZKMYH08c3Ryb25nIHBhcmVudE5hbWU9XCJwXCI+e2DmoIflh4bplJnor69gfTwvc3Ryb25nPntg77yIc3RkZXJy77yJ55qE5rWB44CCYH08L3A+XG4gICAgPHA+e2Dlm6DmraTvvIzlnKjov5nnp43mg4XlhrXkuIvvvIzlvZPmiJHku6zmg7PkuI7ov5nkupvmtYHkuK3nmoTku7vkvZXkuIDkuKrov5vooYzkuqTkupLml7bvvIjkvovlpoLpgJrov4fkuIDkuKrov5vnqIvvvInvvIxQT1NJWOaTjeS9nOezu+e7n+eahEFQSeS9v+S5i+abtOWuueaYky0t5L6L5aaC77yM5ZyoYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgPHVuaXN0ZC5oPmB9PC9pbmxpbmVDb2RlPntgQ+WktOS4re+8jHN0ZGlu44CBc3RkZXJy5ZKMc3Rkb3V06KKr5a6a5LmJ5Li6YH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgU1RESU5fRklMRU5PYH08L2lubGluZUNvZGU+e2DjgIFgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BTVERFUlJfRklMRU5PYH08L2lubGluZUNvZGU+e2DlkoxgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BTVERPVVRfRklMRU5PYH08L2lubGluZUNvZGU+e2DjgIJgfTwvcD5cbiAgICA8cD57YFBPU0lY6L+Y5Li66YCA5Ye65Luj56CB44CB5paH5Lu257O757uf6K+t5LmJ5ZKM5YW25LuW5LiA5Lqb5ZG95Luk6KGM5a6e55So56iL5bqP5o6l5Y+j5oOv5L6L5aKe5Yqg5LqG5LiA5Liq5qCH5YeG44CCYH08L3A+XG4gICAgPFJlc291cmNlR3JvdXBUaXRsZSBtZHhUeXBlPVwiUmVzb3VyY2VHcm91cFRpdGxlXCI+RnJlZSBDb250ZW50PC9SZXNvdXJjZUdyb3VwVGl0bGU+XG4gICAgPEJhZGdlTGluayBjb2xvclNjaGVtZT0nYmx1ZScgYmFkZ2VUZXh0PSdPZmZpY2lhbCBEb2N1bWVudGF0aW9uJyBocmVmPSdodHRwczovL3B1YnMub3Blbmdyb3VwLm9yZy9vbmxpbmVwdWJzLzk2OTk5MTk3OTkvJyBtZHhUeXBlPVwiQmFkZ2VMaW5rXCI+UE9TSVggc3RhbmRhcmQgYnkgSUVFRTwvQmFkZ2VMaW5rPlxuICAgIDxCYWRnZUxpbmsgY29sb3JTY2hlbWU9J3llbGxvdycgYmFkZ2VUZXh0PSdSZWFkJyBocmVmPSdodHRwczovL3VuaXguc3RhY2tleGNoYW5nZS5jb20vYS8yMjA4NzcnIG1keFR5cGU9XCJCYWRnZUxpbmtcIj5TdW1tYXJ5IG9mIHNvbWUgUE9TSVggaW1wbGVtZW50YXRpb25zPC9CYWRnZUxpbms+XG4gICAgPEJhZGdlTGluayBjb2xvclNjaGVtZT0neWVsbG93JyBiYWRnZVRleHQ9J1JlYWQnIGhyZWY9J2h0dHBzOi8vd3d3LmJhZWxkdW5nLmNvbS9saW51eC9wb3NpeCcgbWR4VHlwZT1cIkJhZGdlTGlua1wiPkEgZ3VpZGUgdG8gUE9TSVg8L0JhZGdlTGluaz5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyJdLCJuYW1lcyI6WyJSZWFjdCIsIm1keCIsIm1ha2VTaG9ydGNvZGUiLCJuYW1lIiwiTURYRGVmYXVsdFNob3J0Y29kZSIsInByb3BzIiwiY29uc29sZSIsIndhcm4iLCJkaXYiLCJSZXNvdXJjZUdyb3VwVGl0bGUiLCJCYWRnZUxpbmsiLCJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwibWR4VHlwZSIsImgxIiwicCIsImlubGluZUNvZGUiLCJwYXJlbnROYW1lIiwic3Ryb25nIiwiY29sb3JTY2hlbWUiLCJiYWRnZVRleHQiLCJocmVmIiwiaXNNRFhDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./content/roadmaps/102-devops/content/101-os-concepts/106-posix.md\n");

/***/ })

});