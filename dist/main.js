/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/child.ts":
/*!**********************!*\
  !*** ./src/child.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DfrazeChild": () => (/* binding */ DfrazeChild)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/common.ts");

class DfrazeChild extends _common__WEBPACK_IMPORTED_MODULE_0__.Common {
    constructor(mainConfig) {
        super();
        this.mainConfig = mainConfig;
        this.child = { data: Object.assign({}, this.mainConfig) };
    }
    render() {
        console.log(this.child.data);
    }
}


/***/ }),

/***/ "./src/common.ts":
/*!***********************!*\
  !*** ./src/common.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Common": () => (/* binding */ Common)
/* harmony export */ });
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Common_searchNode;
class Common {
    constructor() {
        _Common_searchNode.set(this, (element) => {
            return typeof element === 'string' ? document.querySelector(`.${element}`) : element;
        });
    }
    createDomElement(parent, elemClass, content, node, root) {
        let foundDomElement = parent;
        let classDomElement = '';
        const createdDomElement = document.createElement(node);
        if (typeof parent === 'string') {
            foundDomElement = document.querySelector(parent);
        }
        ;
        if (elemClass !== undefined) {
            classDomElement = elemClass;
        }
        ;
        if (content) {
            createdDomElement.textContent = content;
        }
        ;
        if (classDomElement.length !== 0) {
            createdDomElement.classList.add(classDomElement);
        }
        (foundDomElement || root).append(createdDomElement);
        return {
            parent: foundDomElement, class: elemClass, content: content, node: node,
            target: createdDomElement
        };
    }
    findComponentTarget(config) {
        var _a;
        if (config.class)
            return `.${config.class}`;
        else {
            const classElement = (_a = config.target) === null || _a === void 0 ? void 0 : _a.classList;
            if (classElement && classElement.length !== 0)
                return classElement;
        }
        return config.target;
    }
    changeElemAttr(component, attributes) {
        const element = this.findComponentTarget(component.data);
        const foundDomElement = __classPrivateFieldGet(this, _Common_searchNode, "f").call(this, element);
        if (foundDomElement) {
            for (let attr of attributes) {
                foundDomElement.setAttribute(attr.key, attr.value);
            }
            ;
        }
    }
    createElemChild(component, config, rootDomElement) {
        const parent = this.findComponentTarget(component.data);
        const result = this.createDomElement(parent, config.class, config.content, config.node, rootDomElement);
        return result;
    }
    transformElemContent(component, transform) {
        const initialContent = component.data.content;
        let result = initialContent;
        const element = this.findComponentTarget(component.data);
        const node = __classPrivateFieldGet(this, _Common_searchNode, "f").call(this, element);
        if (initialContent) {
            component.data.content = !transform(initialContent) ? result : transform(initialContent);
            result = component.data.content;
        }
        ;
        node.innerHTML = result;
    }
}
_Common_searchNode = new WeakMap();


/***/ }),

/***/ "./src/component.ts":
/*!**************************!*\
  !*** ./src/component.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DfrazeComponent": () => (/* binding */ DfrazeComponent)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/common.ts");
/* harmony import */ var _child__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./child */ "./src/child.ts");


class DfrazeComponent extends _common__WEBPACK_IMPORTED_MODULE_0__.Common {
    constructor(rootDomElement) {
        super();
        this.rootDomElement = rootDomElement;
        this.component = { data: {} };
    }
    baseConfig(config) {
        const result = this.createDomElement(config.parent, config.class, config.content, config.node, this.rootDomElement);
        this.component.data = Object.assign({}, result);
    }
    changeAttr(attributes) {
        this.changeElemAttr(this.component, attributes);
    }
    createChild(config) {
        const result = this.createElemChild(this.component, config, this.rootDomElement);
        return new _child__WEBPACK_IMPORTED_MODULE_1__.DfrazeChild(result);
    }
    transformContent(transform) {
        this.transformElemContent(this.component, transform);
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DfrazeBase": () => (/* binding */ DfrazeBase)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/common.ts");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./src/component.ts");


class DfrazeBase extends _common__WEBPACK_IMPORTED_MODULE_0__.Common {
    constructor(rootDomElement) {
        super();
        this.rootDomElement = rootDomElement;
        this.components = [];
    }
    createElement(node, config) {
        if (node.length !== 0) {
            if (Reflect.ownKeys(config).length !== 0) {
                this.createDomElement(config.parent, config.class, config.content, node, this.rootDomElement);
            }
            ;
        }
    }
    createComponent(config) {
        const componentClass = new _component__WEBPACK_IMPORTED_MODULE_1__.DfrazeComponent(this.rootDomElement);
        this.components.push({ name: config.name, component: Object.assign(componentClass.component) });
        return componentClass;
    }
    render() {
        console.log(this.components);
    }
}
const base = new DfrazeBase(document.querySelector('.dfraze-root'));
base.createElement('div', { class: 'wrap' });
base.createElement('h3', { parent: '.wrap', content: 'It is inside div' });
const firstComponent = base.createComponent({ name: 'second' });
firstComponent.baseConfig({ parent: '.wrap', content: 'hello', node: 'div' });
firstComponent.changeAttr([{ key: 'id', value: 'testID' }]);
firstComponent.transformContent((content) => content.toUpperCase());
firstComponent.createChild({
    node: 'section', class: 'childSection', content: 'child'
}).render();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFckUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztBQUMzQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFDLENBQUMsQ0FBQztBQUV6RSxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7QUFDOUQsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztBQUU1RSxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUQsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBZSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUU1RSxjQUFjLENBQUMsV0FBVyxDQUFDO0lBQ3pCLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsT0FBTztDQUN6RCxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yeGpzLXRhc2tzLy4vc3JjL2NoaWxkLnRzIiwid2VicGFjazovL3J4anMtdGFza3MvLi9zcmMvY29tbW9uLnRzIiwid2VicGFjazovL3J4anMtdGFza3MvLi9zcmMvY29tcG9uZW50LnRzIiwid2VicGFjazovL3J4anMtdGFza3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcnhqcy10YXNrcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcnhqcy10YXNrcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3J4anMtdGFza3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yeGpzLXRhc2tzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbiB9IGZyb20gXCIuL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnRDaGlsZCwgQ3JlYXRlZEVsZW1lbnQgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERmcmF6ZUNoaWxkIGV4dGVuZHMgQ29tbW9uIHtcclxuICBwcml2YXRlIGNoaWxkOiBDb21wb25lbnRDaGlsZDtcclxuICBcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1haW5Db25maWc6IENyZWF0ZWRFbGVtZW50KSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5jaGlsZCA9IHtkYXRhOiB7Li4udGhpcy5tYWluQ29uZmlnfX07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNoaWxkLmRhdGEpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudEdyb3VwRWxlbWVudCwgQ3JlYXRlZEVsZW1lbnQgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbW1vbiB7XHJcbiAgcHJvdGVjdGVkIGNyZWF0ZURvbUVsZW1lbnQoXHJcbiAgICBwYXJlbnQ6IEVsZW1lbnQgfCBzdHJpbmcsIGVsZW1DbGFzczogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIFxyXG4gICAgbm9kZTogc3RyaW5nLCByb290OiBIVE1MRGl2RWxlbWVudCxcclxuICApOiBDcmVhdGVkRWxlbWVudCB7XHJcbiAgICBsZXQgZm91bmREb21FbGVtZW50OiBhbnkgPSBwYXJlbnQ7XHJcbiAgICBsZXQgY2xhc3NEb21FbGVtZW50OiBzdHJpbmcgPSAnJztcclxuICAgIGNvbnN0IGNyZWF0ZWREb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlKTtcclxuICAgIFxyXG4gICAgaWYgKHR5cGVvZiBwYXJlbnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGZvdW5kRG9tRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyZW50KSE7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBpZiAoZWxlbUNsYXNzICE9PSB1bmRlZmluZWQpIHtjbGFzc0RvbUVsZW1lbnQgPSBlbGVtQ2xhc3N9O1xyXG4gICAgaWYgKGNvbnRlbnQpIHtjcmVhdGVkRG9tRWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnR9O1xyXG5cclxuICAgIGlmIChjbGFzc0RvbUVsZW1lbnQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGNyZWF0ZWREb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NEb21FbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAoZm91bmREb21FbGVtZW50ISB8fCByb290KS5hcHBlbmQoY3JlYXRlZERvbUVsZW1lbnQpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBhcmVudDogZm91bmREb21FbGVtZW50ISwgY2xhc3M6IGVsZW1DbGFzcywgY29udGVudDogY29udGVudCwgbm9kZTogbm9kZSwgXHJcbiAgICAgIHRhcmdldDogY3JlYXRlZERvbUVsZW1lbnRcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZmluZENvbXBvbmVudFRhcmdldChjb25maWc6IENvbXBvbmVudEdyb3VwRWxlbWVudCkge1xyXG4gICAgaWYgKGNvbmZpZy5jbGFzcykgcmV0dXJuIGAuJHtjb25maWcuY2xhc3N9YDtcclxuICAgIGVsc2Uge1xyXG4gICAgICBjb25zdCBjbGFzc0VsZW1lbnQgPSBjb25maWcudGFyZ2V0Py5jbGFzc0xpc3Q7XHJcbiAgICAgIGlmIChjbGFzc0VsZW1lbnQgJiYgY2xhc3NFbGVtZW50Lmxlbmd0aCAhPT0gMCkgcmV0dXJuIGNsYXNzRWxlbWVudDtcclxuICAgIH1cclxuICAgIHJldHVybiBjb25maWcudGFyZ2V0O1xyXG4gIH1cclxuXHJcbiAgI3NlYXJjaE5vZGUgPSAoZWxlbWVudDogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gdHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7ZWxlbWVudH1gKSA6IGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgY2hhbmdlRWxlbUF0dHIoY29tcG9uZW50OiBhbnksIGF0dHJpYnV0ZXM6IEFycmF5PHtrZXk6IHN0cmluZzsgdmFsdWU6IHN0cmluZ30+KSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5maW5kQ29tcG9uZW50VGFyZ2V0KGNvbXBvbmVudC5kYXRhKTtcclxuICAgIGNvbnN0IGZvdW5kRG9tRWxlbWVudDogYW55ID0gdGhpcy4jc2VhcmNoTm9kZShlbGVtZW50KTtcclxuXHJcbiAgICBpZiAoZm91bmREb21FbGVtZW50KSB7XHJcbiAgICAgIGZvciAobGV0IGF0dHIgb2YgYXR0cmlidXRlcykge2ZvdW5kRG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ci5rZXksIGF0dHIudmFsdWUpfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBjcmVhdGVFbGVtQ2hpbGQoXHJcbiAgICBjb21wb25lbnQ6IGFueSwgXHJcbiAgICBjb25maWc6IHtjbGFzcz86IHN0cmluZywgY29udGVudD86IHN0cmluZywgbm9kZTogc3RyaW5nfSwgXHJcbiAgICByb290RG9tRWxlbWVudDogSFRNTERpdkVsZW1lbnRcclxuICApIHtcclxuICAgIGNvbnN0IHBhcmVudDogYW55ID0gdGhpcy5maW5kQ29tcG9uZW50VGFyZ2V0KGNvbXBvbmVudC5kYXRhKTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoXHJcbiAgICAgIHBhcmVudCwgY29uZmlnLmNsYXNzISwgY29uZmlnLmNvbnRlbnQhLCBjb25maWcubm9kZSwgXHJcbiAgICAgIHJvb3REb21FbGVtZW50XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtRWxlbUNvbnRlbnQoY29tcG9uZW50OiBhbnksIHRyYW5zZm9ybTogRnVuY3Rpb24pIHtcclxuICAgIGNvbnN0IGluaXRpYWxDb250ZW50OiBzdHJpbmcgPSBjb21wb25lbnQuZGF0YS5jb250ZW50ITtcclxuICAgIGxldCByZXN1bHQ6IHN0cmluZyA9IGluaXRpYWxDb250ZW50O1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnQ6IGFueSA9IHRoaXMuZmluZENvbXBvbmVudFRhcmdldChjb21wb25lbnQuZGF0YSk7XHJcbiAgICBjb25zdCBub2RlID0gdGhpcy4jc2VhcmNoTm9kZShlbGVtZW50KTtcclxuICAgIFxyXG4gICAgaWYgKGluaXRpYWxDb250ZW50KSB7XHJcbiAgICAgIGNvbXBvbmVudC5kYXRhLmNvbnRlbnQgPSAhdHJhbnNmb3JtKGluaXRpYWxDb250ZW50KSA/IHJlc3VsdCA6IHRyYW5zZm9ybShpbml0aWFsQ29udGVudCk7XHJcbiAgICAgIHJlc3VsdCA9IGNvbXBvbmVudC5kYXRhLmNvbnRlbnQhO1xyXG4gICAgfTsgXHJcbiAgICBub2RlLmlubmVySFRNTCA9IHJlc3VsdDtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBDb21tb24gfSBmcm9tIFwiLi9jb21tb25cIjtcclxuaW1wb3J0IHsgRGZyYXplQ2hpbGQgfSBmcm9tIFwiLi9jaGlsZFwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnRHcm91cCB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGZyYXplQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uIHtcclxuICBwdWJsaWMgY29tcG9uZW50OiBDb21wb25lbnRHcm91cDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb290RG9tRWxlbWVudDogSFRNTERpdkVsZW1lbnQpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmNvbXBvbmVudCA9IHtkYXRhOiB7fX07XHJcbiAgfVxyXG5cclxuICBiYXNlQ29uZmlnKGNvbmZpZzoge1xyXG4gICAgcGFyZW50PzogRWxlbWVudCB8IHN0cmluZywgY2xhc3M/OiBzdHJpbmcsIGNvbnRlbnQ/OiBzdHJpbmcsIG5vZGU6IHN0cmluZ1xyXG4gIH0pIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudChcclxuICAgICAgY29uZmlnLnBhcmVudCEsIGNvbmZpZy5jbGFzcyEsIGNvbmZpZy5jb250ZW50ISwgY29uZmlnLm5vZGUsIHRoaXMucm9vdERvbUVsZW1lbnQsIFxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmNvbXBvbmVudC5kYXRhID0gey4uLnJlc3VsdH07XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VBdHRyKGF0dHJpYnV0ZXM6IEFycmF5PHtrZXk6IHN0cmluZzsgdmFsdWU6IHN0cmluZ30+KSB7XHJcbiAgICB0aGlzLmNoYW5nZUVsZW1BdHRyKHRoaXMuY29tcG9uZW50LCBhdHRyaWJ1dGVzKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUNoaWxkKGNvbmZpZzoge2NsYXNzPzogc3RyaW5nLCBjb250ZW50Pzogc3RyaW5nLCBub2RlOiBzdHJpbmd9KSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmNyZWF0ZUVsZW1DaGlsZCh0aGlzLmNvbXBvbmVudCwgY29uZmlnLCB0aGlzLnJvb3REb21FbGVtZW50KTtcclxuICAgIHJldHVybiBuZXcgRGZyYXplQ2hpbGQocmVzdWx0KTtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybUNvbnRlbnQodHJhbnNmb3JtOiBGdW5jdGlvbikge1xyXG4gICAgdGhpcy50cmFuc2Zvcm1FbGVtQ29udGVudCh0aGlzLmNvbXBvbmVudCwgdHJhbnNmb3JtKTtcclxuICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IENvbW1vbiB9IGZyb20gXCIuL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBEZnJhemVDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBEb21Db25maWcgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERmcmF6ZUJhc2UgZXh0ZW5kcyBDb21tb24ge1xyXG4gIHB1YmxpYyBjb21wb25lbnRzITogQXJyYXk8Q29tcG9uZW50PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb290RG9tRWxlbWVudDogSFRNTERpdkVsZW1lbnQpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmNvbXBvbmVudHMgPSBbXTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUVsZW1lbnQobm9kZTogc3RyaW5nLCBjb25maWc6IERvbUNvbmZpZykge1xyXG4gICAgaWYgKG5vZGUubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGlmIChSZWZsZWN0Lm93bktleXMoY29uZmlnKS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoXHJcbiAgICAgICAgICBjb25maWcucGFyZW50ISwgY29uZmlnLmNsYXNzISwgY29uZmlnLmNvbnRlbnQhLCBub2RlLCB0aGlzLnJvb3REb21FbGVtZW50LCBcclxuICAgICAgICApO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ29tcG9uZW50KGNvbmZpZzogQ29tcG9uZW50KSB7XHJcbiAgICBjb25zdCBjb21wb25lbnRDbGFzcyA9IG5ldyBEZnJhemVDb21wb25lbnQodGhpcy5yb290RG9tRWxlbWVudCk7XHJcbiAgICB0aGlzLmNvbXBvbmVudHMucHVzaCh7bmFtZTogY29uZmlnLm5hbWUsIGNvbXBvbmVudDogT2JqZWN0LmFzc2lnbihjb21wb25lbnRDbGFzcy5jb21wb25lbnQpfSk7XHJcbiAgICByZXR1cm4gY29tcG9uZW50Q2xhc3M7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvbXBvbmVudHMpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgYmFzZSA9IG5ldyBEZnJhemVCYXNlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZnJhemUtcm9vdCcpISk7XHJcblxyXG5iYXNlLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ3dyYXAnfSk7XHJcbmJhc2UuY3JlYXRlRWxlbWVudCgnaDMnLCB7cGFyZW50OiAnLndyYXAnLCBjb250ZW50OiAnSXQgaXMgaW5zaWRlIGRpdid9KTtcclxuXHJcbmNvbnN0IGZpcnN0Q29tcG9uZW50ID0gYmFzZS5jcmVhdGVDb21wb25lbnQoe25hbWU6ICdzZWNvbmQnfSk7XHJcbmZpcnN0Q29tcG9uZW50LmJhc2VDb25maWcoe3BhcmVudDogJy53cmFwJywgY29udGVudDogJ2hlbGxvJywgbm9kZTogJ2Rpdid9KTtcclxuXHJcbmZpcnN0Q29tcG9uZW50LmNoYW5nZUF0dHIoW3trZXk6ICdpZCcsIHZhbHVlOiAndGVzdElEJ31dKTtcclxuZmlyc3RDb21wb25lbnQudHJhbnNmb3JtQ29udGVudCgoY29udGVudDogc3RyaW5nKSA9PiBjb250ZW50LnRvVXBwZXJDYXNlKCkpO1xyXG5cclxuZmlyc3RDb21wb25lbnQuY3JlYXRlQ2hpbGQoe1xyXG4gIG5vZGU6ICdzZWN0aW9uJywgY2xhc3M6ICdjaGlsZFNlY3Rpb24nLCBjb250ZW50OiAnY2hpbGQnXHJcbn0pLnJlbmRlcigpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=