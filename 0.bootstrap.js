(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/rpgbe.js":
/*!***********************!*\
  !*** ../pkg/rpgbe.js ***!
  \***********************/
/*! exports provided: get_width, get_height, start_gameboy, load_rom, tick_frame, get_pixel_data, press_key, release_key, __wbindgen_object_drop_ref, __wbg_buffer_34f5ec9f8a838ba0, __wbg_new_cda198d9dbc6d7ea, __wbg_set_1a930cfcda1a8067, __wbg_length_51f19f73d6d9eff3, __wbindgen_throw, __wbindgen_memory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rpgbe_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rpgbe_bg.wasm */ \"../pkg/rpgbe_bg.wasm\");\n/* harmony import */ var _rpgbe_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rpgbe_bg.js */ \"../pkg/rpgbe_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"get_width\", function() { return _rpgbe_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"get_width\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"get_height\", function() { return _rpgbe_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"get_height\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"start_gameboy\", function() { return _rpgbe_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"start_gameboy\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"load_rom\", function() { return _rpgbe_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"load_rom\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"tick_frame\", function() { return _rpgbe_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"tick_frame\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"get_pixel_data\", function() { return _rpgbe_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"get_pixel_data\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"press_key\", function() { return _rpgbe_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"press_key\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"release_key\", function() { return _rpgbe_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"release_key\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return _rpgbe_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_drop_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_buffer_34f5ec9f8a838ba0\", function() { return _rpgbe_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_buffer_34f5ec9f8a838ba0\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_cda198d9dbc6d7ea\", function() { return _rpgbe_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_new_cda198d9dbc6d7ea\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_1a930cfcda1a8067\", function() { return _rpgbe_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_1a930cfcda1a8067\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_length_51f19f73d6d9eff3\", function() { return _rpgbe_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_length_51f19f73d6d9eff3\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _rpgbe_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_memory\", function() { return _rpgbe_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_memory\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/rpgbe.js?");

/***/ }),

/***/ "../pkg/rpgbe_bg.js":
/*!**************************!*\
  !*** ../pkg/rpgbe_bg.js ***!
  \**************************/
/*! exports provided: get_width, get_height, start_gameboy, load_rom, tick_frame, get_pixel_data, press_key, release_key, __wbindgen_object_drop_ref, __wbg_buffer_34f5ec9f8a838ba0, __wbg_new_cda198d9dbc6d7ea, __wbg_set_1a930cfcda1a8067, __wbg_length_51f19f73d6d9eff3, __wbindgen_throw, __wbindgen_memory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get_width\", function() { return get_width; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get_height\", function() { return get_height; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"start_gameboy\", function() { return start_gameboy; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"load_rom\", function() { return load_rom; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tick_frame\", function() { return tick_frame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get_pixel_data\", function() { return get_pixel_data; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"press_key\", function() { return press_key; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"release_key\", function() { return release_key; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_buffer_34f5ec9f8a838ba0\", function() { return __wbg_buffer_34f5ec9f8a838ba0; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_cda198d9dbc6d7ea\", function() { return __wbg_new_cda198d9dbc6d7ea; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_1a930cfcda1a8067\", function() { return __wbg_set_1a930cfcda1a8067; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_length_51f19f73d6d9eff3\", function() { return __wbg_length_51f19f73d6d9eff3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_memory\", function() { return __wbindgen_memory; });\n/* harmony import */ var _rpgbe_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rpgbe_bg.wasm */ \"../pkg/rpgbe_bg.wasm\");\n\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = new Uint8Array();\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(_rpgbe_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n/**\n* @returns {number}\n*/\nfunction get_width() {\n    const ret = _rpgbe_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"get_width\"]();\n    return ret;\n}\n\n/**\n* @returns {number}\n*/\nfunction get_height() {\n    const ret = _rpgbe_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"get_height\"]();\n    return ret;\n}\n\n/**\n*/\nfunction start_gameboy() {\n    _rpgbe_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"start_gameboy\"]();\n}\n\n/**\n* @param {ArrayBuffer} rom\n*/\nfunction load_rom(rom) {\n    _rpgbe_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"load_rom\"](addHeapObject(rom));\n}\n\n/**\n*/\nfunction tick_frame() {\n    _rpgbe_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"tick_frame\"]();\n}\n\n/**\n* @param {number} index\n* @returns {number}\n*/\nfunction get_pixel_data(index) {\n    const ret = _rpgbe_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"get_pixel_data\"](index);\n    return ret;\n}\n\n/**\n* @param {number} key\n*/\nfunction press_key(key) {\n    _rpgbe_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"press_key\"](key);\n}\n\n/**\n* @param {number} key\n*/\nfunction release_key(key) {\n    _rpgbe_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"release_key\"](key);\n}\n\nfunction __wbindgen_object_drop_ref(arg0) {\n    takeObject(arg0);\n};\n\nfunction __wbg_buffer_34f5ec9f8a838ba0(arg0) {\n    const ret = getObject(arg0).buffer;\n    return addHeapObject(ret);\n};\n\nfunction __wbg_new_cda198d9dbc6d7ea(arg0) {\n    const ret = new Uint8Array(getObject(arg0));\n    return addHeapObject(ret);\n};\n\nfunction __wbg_set_1a930cfcda1a8067(arg0, arg1, arg2) {\n    getObject(arg0).set(getObject(arg1), arg2 >>> 0);\n};\n\nfunction __wbg_length_51f19f73d6d9eff3(arg0) {\n    const ret = getObject(arg0).length;\n    return ret;\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\nfunction __wbindgen_memory() {\n    const ret = _rpgbe_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"];\n    return addHeapObject(ret);\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/rpgbe_bg.js?");

/***/ }),

/***/ "../pkg/rpgbe_bg.wasm":
/*!****************************!*\
  !*** ../pkg/rpgbe_bg.wasm ***!
  \****************************/
/*! exports provided: memory, get_width, get_height, start_gameboy, load_rom, tick_frame, get_pixel_data, press_key, release_key */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./rpgbe_bg.js */ \"../pkg/rpgbe_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/rpgbe_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var rpgbe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rpgbe */ \"../pkg/rpgbe.js\");\n\n\nconst canvas = document.getElementById(\"emulator-canvas\");\ncanvas.height = rpgbe__WEBPACK_IMPORTED_MODULE_0__[\"get_height\"]();\ncanvas.width = rpgbe__WEBPACK_IMPORTED_MODULE_0__[\"get_width\"]();\n\nconst romFileSelector = document.getElementById(\"rom-file-selector\");\nconst loadRomButton = document.getElementById(\"load-rom-button\");\n\nloadRomButton.addEventListener(\"click\", (e) => {\n    if (romFileSelector.files.length != 1)\n        return;\n    const reader = new FileReader();\n    reader.addEventListener(\"load\", (e) => {\n        rpgbe__WEBPACK_IMPORTED_MODULE_0__[\"start_gameboy\"]();\n        rpgbe__WEBPACK_IMPORTED_MODULE_0__[\"load_rom\"](e.target.result);\n\n        const ctx = canvas.getContext(\"2d\");\n\n        let animationId = null;\n\n        const renderLoop = () => {\n            let start = Date.now();\n            rpgbe__WEBPACK_IMPORTED_MODULE_0__[\"tick_frame\"]();\n\n            const imageData = ctx.createImageData(canvas.width, canvas.height);\n\n            const screenData = [];\n\n            for(let i = 0; i < 69120; i += 3) {\n                screenData.push(rpgbe__WEBPACK_IMPORTED_MODULE_0__[\"get_pixel_data\"](i + 0));\n                screenData.push(rpgbe__WEBPACK_IMPORTED_MODULE_0__[\"get_pixel_data\"](i + 1));\n                screenData.push(rpgbe__WEBPACK_IMPORTED_MODULE_0__[\"get_pixel_data\"](i + 2));\n                screenData.push(255);\n            }\n\n            for(let i = 0; i < imageData.data.length; i += 4) {\n                imageData.data[i + 0] = screenData[i + 0];\n                imageData.data[i + 1] = screenData[i + 1];\n                imageData.data[i + 2] = screenData[i + 2];\n                imageData.data[i + 3] = screenData[i + 3];\n            }\n\n            ctx.putImageData(imageData, 0, 0);\n\n            let elapsedTime = Date.now() - start;\n            if (elapsedTime <= 16.7427062988) {\n                setTimeout(() => {\n                    animationId = requestAnimationFrame(renderLoop);\n                }, 16.7427062988 - elapsedTime);\n            } else {\n                animationId = requestAnimationFrame(renderLoop);\n            }\n        };\n\n        animationId = requestAnimationFrame(renderLoop);\n    });\n    reader.readAsArrayBuffer(romFileSelector.files[0]);\n});\n\ndocument.addEventListener(\"keydown\", e => {\n    switch(e.code)\n    {\n        case \"KeyW\":\n            rpgbe__WEBPACK_IMPORTED_MODULE_0__[\"press_key\"](2);\n            break;\n        case \"KeyA\":\n            rpgbe__WEBPACK_IMPORTED_MODULE_0__[\"press_key\"](1);\n            break;\n        case \"KeyS\":\n            rpgbe__WEBPACK_IMPORTED_MODULE_0__[\"press_key\"](3);\n            break;\n        case \"KeyD\":\n            rpgbe__WEBPACK_IMPORTED_MODULE_0__[\"press_key\"](0);\n            break;\n        case \"KeyH\":\n            rpgbe__WEBPACK_IMPORTED_MODULE_0__[\"press_key\"](5);\n            break;\n        case \"KeyU\":\n            rpgbe__WEBPACK_IMPORTED_MODULE_0__[\"press_key\"](4);\n            break;\n        case \"KeyB\":\n            rpgbe__WEBPACK_IMPORTED_MODULE_0__[\"press_key\"](6);\n            break;\n        case \"KeyN\":\n            rpgbe__WEBPACK_IMPORTED_MODULE_0__[\"press_key\"](7);\n            break;\n    }\n});\n\ndocument.addEventListener(\"keyup\", e => {\n    switch(e.code)\n    {\n        case \"KeyW\":\n            rpgbe__WEBPACK_IMPORTED_MODULE_0__[\"release_key\"](2);\n            break;\n        case \"KeyA\":\n            rpgbe__WEBPACK_IMPORTED_MODULE_0__[\"release_key\"](1);\n            break;\n        case \"KeyS\":\n            rpgbe__WEBPACK_IMPORTED_MODULE_0__[\"release_key\"](3);\n            break;\n        case \"KeyD\":\n            rpgbe__WEBPACK_IMPORTED_MODULE_0__[\"release_key\"](0);\n            break;\n        case \"KeyH\":\n            rpgbe__WEBPACK_IMPORTED_MODULE_0__[\"release_key\"](5);\n            break;\n        case \"KeyU\":\n            rpgbe__WEBPACK_IMPORTED_MODULE_0__[\"release_key\"](4);\n            break;\n        case \"KeyB\":\n            rpgbe__WEBPACK_IMPORTED_MODULE_0__[\"release_key\"](6);\n            break;\n        case \"KeyN\":\n            rpgbe__WEBPACK_IMPORTED_MODULE_0__[\"release_key\"](7);\n            break;\n    }\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);