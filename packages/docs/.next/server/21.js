exports.ids = [21];
exports.modules = {

/***/ "./src/content/en/noname/installation.react.md":
/*!*****************************************************!*\
  !*** ./src/content/en/noname/installation.react.md ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("# React\n\nTo use `{Constants.PLATFORM_NAME}` components in react projects you can opt for one of these two way:\n\n- Using web components directly (Not recommanded)\n- Using React library (Recommanded)\n\nIn the first way we use [standard HTML Custom Elements]({Constants.WEBCOMPONENT_REFERENCE}) directly:\n\n1- Install `{Constants.PLATFORM_NAME}` package using node package manager.\n```shell\nnpm install {Constants.PORT_JAVASCRIPT_PACKAGE_NAME}\n```\n\n2- Bind the custom elements to the window object\n```js\nimport { defineCustomElements } from '{Constants.PORT_JAVASCRIPT_PACKAGE_LOADER}';\n\ndefineCustomElements();\n```\n\nEdge and IE11 polyfills\n\nIf you want your custom elements to be able to work on older browsers, you should add the\n`applyPolyfills()` that surround the `defineCustomElements()` function.\n\n```js\napplyPolyfills().then(() => defineCustomElements());\n```\n\nThe `index.js` would be something like this finally:\n```jsx\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './App';\nimport { applyPolyfills, defineCustomElements } from '{Constants.PORT_JAVASCRIPT_PACKAGE_LOADER}';\n\napplyPolyfills().then(() =>  defineCustomElements());\n\nReactDOM.render(<App/>, document.getElementById('root'));\n```\n\n3- Using in React components\n```jsx\nimport React from 'react';\n\nconst App = () => <plus-switch/>;\n\nexport default App;\n```\n\nSetting prop values\n```jsx\n<plus-switch reverse/>\nOr\n<plus-switch reverse={true}/>\n```\n\nEvents\n```jsx\nimport React, { useEffect, useRef } from 'react';\n\nconst App = () => {\n\n  const element = useRef(null);\n\n  const callback = () => alert('The switch toggled!');\n\n  useEffect(() => {\n\n    element.current.addEventListener('plusChange', callback);\n\n    return () => element.current.removeEventListener('plusChange', callback);\n\n  }, []);\n\n  return <plus-switch ref={element}/>\n}\n\nexport default App;\n```\n\nTo avoid [standard HTML Custom Elements]({Constants.WEBCOMPONENT_REFERENCE}) having problem with non-scalar data we recommand that you use custom events. you can follow these steps.\n\n1- Install `{Constants.PLATFORM_NAME}` package using node package manager.\n```shell\nnpm install {Constants.PORT_REACT_PACKAGE_NAME}\n```\n\n2- Bind the custom elements to the window object\n```js\nimport { defineCustomElements } from '{Constants.PORT_REACT_PACKAGE_LOADER}';\n\ndefineCustomElements();\n```\n\nEdge and IE11 polyfills\n\nIf you want your custom elements to be able to work on older browsers, you should add the\n`applyPolyfills()` that surround the `defineCustomElements()` function.\n\n```js\napplyPolyfills().then(() => defineCustomElements());\n```\n\nThe `index.js` would be something like this finally:\n```jsx\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './App';\nimport { applyPolyfills, defineCustomElements } from '{Constants.PORT_REACT_PACKAGE_LOADER}';\n\napplyPolyfills().then(() =>  defineCustomElements());\n\nReactDOM.render(<App/>, document.getElementById('root'));\n```\n\n3- Using in React components\n```jsx\nimport React from 'react';\nimport { PlusSwitch } from '{Constants.PORT_REACT_PACKAGE_NAME}';\n\nconst App = () => <PlusSwitch/>;\n\nexport default App;\n```\n\nSetting prop values\n```jsx\n<PlusSwitch reverse/>\nOr\n<PlusSwitch reverse={true}/>\n```\n\nEvents\n```jsx\n<PlusSwitch onPlusChange={() => alert('The switch toggled!')} />\n```\n");

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9lbi9ub25hbWUvaW5zdGFsbGF0aW9uLnJlYWN0Lm1kIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBZSxvRkFBcUIsd0JBQXdCLDJOQUEyTixpQ0FBaUMsNEJBQTRCLHdCQUF3Qiw4REFBOEQsdUNBQXVDLDBFQUEwRSx1QkFBdUIsUUFBUSx5Q0FBeUMsRUFBRSwyQkFBMkIscVFBQXFRLGlHQUFpRyxtQ0FBbUMsMEJBQTBCLFVBQVUsdUNBQXVDLFFBQVEseUNBQXlDLEVBQUUseURBQXlELDZEQUE2RCx5RUFBeUUscUNBQXFDLHVCQUF1Qix3RkFBd0YsS0FBSywwQ0FBMEMsb0JBQW9CLGNBQWMsdUJBQXVCLG1DQUFtQywwREFBMEQsdUJBQXVCLGlFQUFpRSxpRkFBaUYsT0FBTyxNQUFNLCtCQUErQixRQUFRLEtBQUssdUJBQXVCLG1EQUFtRCxpQ0FBaUMsMkhBQTJILHdCQUF3Qiw4REFBOEQsa0NBQWtDLDBFQUEwRSx1QkFBdUIsUUFBUSxvQ0FBb0MsRUFBRSwyQkFBMkIscVFBQXFRLGlHQUFpRyxtQ0FBbUMsMEJBQTBCLFVBQVUsdUNBQXVDLFFBQVEsb0NBQW9DLEVBQUUseURBQXlELDZEQUE2RCx5RUFBeUUsVUFBVSxhQUFhLFFBQVEsa0NBQWtDLEVBQUUsb0NBQW9DLHVCQUF1QixzRkFBc0YsS0FBSyxxREFBcUQsbUNBQW1DLFdBQVcsRSIsImZpbGUiOiIyMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiIyBSZWFjdFxcblxcblRvIHVzZSBge0NvbnN0YW50cy5QTEFURk9STV9OQU1FfWAgY29tcG9uZW50cyBpbiByZWFjdCBwcm9qZWN0cyB5b3UgY2FuIG9wdCBmb3Igb25lIG9mIHRoZXNlIHR3byB3YXk6XFxuXFxuLSBVc2luZyB3ZWIgY29tcG9uZW50cyBkaXJlY3RseSAoTm90IHJlY29tbWFuZGVkKVxcbi0gVXNpbmcgUmVhY3QgbGlicmFyeSAoUmVjb21tYW5kZWQpXFxuXFxuSW4gdGhlIGZpcnN0IHdheSB3ZSB1c2UgW3N0YW5kYXJkIEhUTUwgQ3VzdG9tIEVsZW1lbnRzXSh7Q29uc3RhbnRzLldFQkNPTVBPTkVOVF9SRUZFUkVOQ0V9KSBkaXJlY3RseTpcXG5cXG4xLSBJbnN0YWxsIGB7Q29uc3RhbnRzLlBMQVRGT1JNX05BTUV9YCBwYWNrYWdlIHVzaW5nIG5vZGUgcGFja2FnZSBtYW5hZ2VyLlxcbmBgYHNoZWxsXFxubnBtIGluc3RhbGwge0NvbnN0YW50cy5QT1JUX0pBVkFTQ1JJUFRfUEFDS0FHRV9OQU1FfVxcbmBgYFxcblxcbjItIEJpbmQgdGhlIGN1c3RvbSBlbGVtZW50cyB0byB0aGUgd2luZG93IG9iamVjdFxcbmBgYGpzXFxuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudHMgfSBmcm9tICd7Q29uc3RhbnRzLlBPUlRfSkFWQVNDUklQVF9QQUNLQUdFX0xPQURFUn0nO1xcblxcbmRlZmluZUN1c3RvbUVsZW1lbnRzKCk7XFxuYGBgXFxuXFxuRWRnZSBhbmQgSUUxMSBwb2x5ZmlsbHNcXG5cXG5JZiB5b3Ugd2FudCB5b3VyIGN1c3RvbSBlbGVtZW50cyB0byBiZSBhYmxlIHRvIHdvcmsgb24gb2xkZXIgYnJvd3NlcnMsIHlvdSBzaG91bGQgYWRkIHRoZVxcbmBhcHBseVBvbHlmaWxscygpYCB0aGF0IHN1cnJvdW5kIHRoZSBgZGVmaW5lQ3VzdG9tRWxlbWVudHMoKWAgZnVuY3Rpb24uXFxuXFxuYGBganNcXG5hcHBseVBvbHlmaWxscygpLnRoZW4oKCkgPT4gZGVmaW5lQ3VzdG9tRWxlbWVudHMoKSk7XFxuYGBgXFxuXFxuVGhlIGBpbmRleC5qc2Agd291bGQgYmUgc29tZXRoaW5nIGxpa2UgdGhpcyBmaW5hbGx5OlxcbmBgYGpzeFxcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XFxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XFxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XFxuaW1wb3J0IHsgYXBwbHlQb2x5ZmlsbHMsIGRlZmluZUN1c3RvbUVsZW1lbnRzIH0gZnJvbSAne0NvbnN0YW50cy5QT1JUX0pBVkFTQ1JJUFRfUEFDS0FHRV9MT0FERVJ9JztcXG5cXG5hcHBseVBvbHlmaWxscygpLnRoZW4oKCkgPT4gIGRlZmluZUN1c3RvbUVsZW1lbnRzKCkpO1xcblxcblJlYWN0RE9NLnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xcbmBgYFxcblxcbjMtIFVzaW5nIGluIFJlYWN0IGNvbXBvbmVudHNcXG5gYGBqc3hcXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xcblxcbmNvbnN0IEFwcCA9ICgpID0+IDxwbHVzLXN3aXRjaC8+O1xcblxcbmV4cG9ydCBkZWZhdWx0IEFwcDtcXG5gYGBcXG5cXG5TZXR0aW5nIHByb3AgdmFsdWVzXFxuYGBganN4XFxuPHBsdXMtc3dpdGNoIHJldmVyc2UvPlxcbk9yXFxuPHBsdXMtc3dpdGNoIHJldmVyc2U9e3RydWV9Lz5cXG5gYGBcXG5cXG5FdmVudHNcXG5gYGBqc3hcXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XFxuXFxuY29uc3QgQXBwID0gKCkgPT4ge1xcblxcbiAgY29uc3QgZWxlbWVudCA9IHVzZVJlZihudWxsKTtcXG5cXG4gIGNvbnN0IGNhbGxiYWNrID0gKCkgPT4gYWxlcnQoJ1RoZSBzd2l0Y2ggdG9nZ2xlZCEnKTtcXG5cXG4gIHVzZUVmZmVjdCgoKSA9PiB7XFxuXFxuICAgIGVsZW1lbnQuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdwbHVzQ2hhbmdlJywgY2FsbGJhY2spO1xcblxcbiAgICByZXR1cm4gKCkgPT4gZWxlbWVudC5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BsdXNDaGFuZ2UnLCBjYWxsYmFjayk7XFxuXFxuICB9LCBbXSk7XFxuXFxuICByZXR1cm4gPHBsdXMtc3dpdGNoIHJlZj17ZWxlbWVudH0vPlxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBBcHA7XFxuYGBgXFxuXFxuVG8gYXZvaWQgW3N0YW5kYXJkIEhUTUwgQ3VzdG9tIEVsZW1lbnRzXSh7Q29uc3RhbnRzLldFQkNPTVBPTkVOVF9SRUZFUkVOQ0V9KSBoYXZpbmcgcHJvYmxlbSB3aXRoIG5vbi1zY2FsYXIgZGF0YSB3ZSByZWNvbW1hbmQgdGhhdCB5b3UgdXNlIGN1c3RvbSBldmVudHMuIHlvdSBjYW4gZm9sbG93IHRoZXNlIHN0ZXBzLlxcblxcbjEtIEluc3RhbGwgYHtDb25zdGFudHMuUExBVEZPUk1fTkFNRX1gIHBhY2thZ2UgdXNpbmcgbm9kZSBwYWNrYWdlIG1hbmFnZXIuXFxuYGBgc2hlbGxcXG5ucG0gaW5zdGFsbCB7Q29uc3RhbnRzLlBPUlRfUkVBQ1RfUEFDS0FHRV9OQU1FfVxcbmBgYFxcblxcbjItIEJpbmQgdGhlIGN1c3RvbSBlbGVtZW50cyB0byB0aGUgd2luZG93IG9iamVjdFxcbmBgYGpzXFxuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudHMgfSBmcm9tICd7Q29uc3RhbnRzLlBPUlRfUkVBQ1RfUEFDS0FHRV9MT0FERVJ9JztcXG5cXG5kZWZpbmVDdXN0b21FbGVtZW50cygpO1xcbmBgYFxcblxcbkVkZ2UgYW5kIElFMTEgcG9seWZpbGxzXFxuXFxuSWYgeW91IHdhbnQgeW91ciBjdXN0b20gZWxlbWVudHMgdG8gYmUgYWJsZSB0byB3b3JrIG9uIG9sZGVyIGJyb3dzZXJzLCB5b3Ugc2hvdWxkIGFkZCB0aGVcXG5gYXBwbHlQb2x5ZmlsbHMoKWAgdGhhdCBzdXJyb3VuZCB0aGUgYGRlZmluZUN1c3RvbUVsZW1lbnRzKClgIGZ1bmN0aW9uLlxcblxcbmBgYGpzXFxuYXBwbHlQb2x5ZmlsbHMoKS50aGVuKCgpID0+IGRlZmluZUN1c3RvbUVsZW1lbnRzKCkpO1xcbmBgYFxcblxcblRoZSBgaW5kZXguanNgIHdvdWxkIGJlIHNvbWV0aGluZyBsaWtlIHRoaXMgZmluYWxseTpcXG5gYGBqc3hcXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xcbmltcG9ydCB7IGFwcGx5UG9seWZpbGxzLCBkZWZpbmVDdXN0b21FbGVtZW50cyB9IGZyb20gJ3tDb25zdGFudHMuUE9SVF9SRUFDVF9QQUNLQUdFX0xPQURFUn0nO1xcblxcbmFwcGx5UG9seWZpbGxzKCkudGhlbigoKSA9PiAgZGVmaW5lQ3VzdG9tRWxlbWVudHMoKSk7XFxuXFxuUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XFxuYGBgXFxuXFxuMy0gVXNpbmcgaW4gUmVhY3QgY29tcG9uZW50c1xcbmBgYGpzeFxcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XFxuaW1wb3J0IHsgUGx1c1N3aXRjaCB9IGZyb20gJ3tDb25zdGFudHMuUE9SVF9SRUFDVF9QQUNLQUdFX05BTUV9JztcXG5cXG5jb25zdCBBcHAgPSAoKSA9PiA8UGx1c1N3aXRjaC8+O1xcblxcbmV4cG9ydCBkZWZhdWx0IEFwcDtcXG5gYGBcXG5cXG5TZXR0aW5nIHByb3AgdmFsdWVzXFxuYGBganN4XFxuPFBsdXNTd2l0Y2ggcmV2ZXJzZS8+XFxuT3JcXG48UGx1c1N3aXRjaCByZXZlcnNlPXt0cnVlfS8+XFxuYGBgXFxuXFxuRXZlbnRzXFxuYGBganN4XFxuPFBsdXNTd2l0Y2ggb25QbHVzQ2hhbmdlPXsoKSA9PiBhbGVydCgnVGhlIHN3aXRjaCB0b2dnbGVkIScpfSAvPlxcbmBgYFxcblwiOyJdLCJzb3VyY2VSb290IjoiIn0=