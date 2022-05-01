/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/container.ts":
/*!**************************!*\
  !*** ./src/container.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContainerComponent": () => (/* binding */ ContainerComponent)
/* harmony export */ });
/* harmony import */ var _panelCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panelCard */ "./src/panelCard.ts");

const ContainerComponent = (base) => {
    const mainContainer = base.createComponent({ name: 'mainContainer' });
    mainContainer.baseConfig({ node: 'div', class: 'container' });
    const panel = mainContainer.createChild({ node: 'div', class: 'panel' });
    const cardsData = [
        { title: 'Thor', image: 'images/thor-bg.jpg' },
        { title: 'Spider Man', image: 'images/spider-bg.jpg' },
        { title: 'Black widow', image: 'images/black-bg.jpg' },
        { title: 'Captain America', image: 'images/cap-bg.jpg' },
    ];
    cardsData.forEach((item, index) => { (0,_panelCard__WEBPACK_IMPORTED_MODULE_0__.panelCard)(panel, item, index); });
};


/***/ }),

/***/ "./src/lib/child.ts":
/*!**************************!*\
  !*** ./src/lib/child.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DfrazeChild": () => (/* binding */ DfrazeChild)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/lib/common.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DfrazeChild_instances, _DfrazeChild_changeChildData;

class DfrazeChild extends _common__WEBPACK_IMPORTED_MODULE_0__.Common {
    constructor(mainConfig, rootDomElement, parentComponent) {
        super();
        this.mainConfig = mainConfig;
        this.rootDomElement = rootDomElement;
        this.parentComponent = parentComponent;
        _DfrazeChild_instances.add(this);
        this.child = { data: Object.assign({}, this.mainConfig) };
    }
    changeAttr(attributes) {
        const attrs = !this.child.data.attributes ? [] : this.child.data.attributes;
        const result = [...attrs, ...attributes];
        this.changeElemAttr(this.child, result);
        this.child.data.attributes = result;
        __classPrivateFieldGet(this, _DfrazeChild_instances, "m", _DfrazeChild_changeChildData).call(this, { key: 'attributes', value: result });
    }
    createChild(config) {
        const result = this.createElemChild(this.child, config, this.rootDomElement);
        let existingChilds = [];
        const { data } = this.child;
        if (data && data.children && data.children.length !== 0) {
            existingChilds = [...data.children];
        }
        ;
        this.child.data.children = [...existingChilds, Object.assign({}, result)];
        __classPrivateFieldGet(this, _DfrazeChild_instances, "m", _DfrazeChild_changeChildData).call(this, { key: 'children', value: [...existingChilds, Object.assign({}, result)] });
        return new DfrazeChild(result, this.rootDomElement, this.child);
    }
    transformContent(transform) {
        const result = this.transformElemContent(this.child, transform);
        __classPrivateFieldGet(this, _DfrazeChild_instances, "m", _DfrazeChild_changeChildData).call(this, { key: 'content', value: result });
    }
}
_DfrazeChild_instances = new WeakSet(), _DfrazeChild_changeChildData = function _DfrazeChild_changeChildData(data) {
    var _a, _b;
    const children = (_a = this.parentComponent.data) === null || _a === void 0 ? void 0 : _a.children;
    for (let item of children) {
        if (item.target === ((_b = this.child.data) === null || _b === void 0 ? void 0 : _b.target)) {
            Reflect.set(item, data.key, data.value);
        }
        ;
    }
};


/***/ }),

/***/ "./src/lib/common.ts":
/*!***************************!*\
  !*** ./src/lib/common.ts ***!
  \***************************/
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
            return typeof element === 'string' ? document.querySelector(`${element}`) : element;
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
            createdDomElement.setAttribute('class', classDomElement);
        }
        (foundDomElement || root).append(createdDomElement);
        const result = {
            parent: foundDomElement, class: elemClass, content: content, node: node, target: createdDomElement
        };
        return result;
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
        const element = this.findComponentTarget(component.data ? component.data : component);
        const foundDomElement = __classPrivateFieldGet(this, _Common_searchNode, "f").call(this, element);
        for (let attr of attributes) {
            component.data.target.setAttribute(attr.key, attr.value);
        }
        ;
    }
    createElemChild(component, config, rootDomElement) {
        const parent = this.findComponentTarget(component.data);
        const result = this.createDomElement(component.data.target, config.class, config.content, config.node, rootDomElement);
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
        return result;
    }
}
_Common_searchNode = new WeakMap();


/***/ }),

/***/ "./src/lib/component.ts":
/*!******************************!*\
  !*** ./src/lib/component.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DfrazeComponent": () => (/* binding */ DfrazeComponent)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/lib/common.ts");
/* harmony import */ var _child__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./child */ "./src/lib/child.ts");


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
        const attrs = !this.component.data.attributes ? [] : this.component.data.attributes;
        this.changeElemAttr(this.component, attributes);
        this.component.data.attributes = [...attrs, ...attributes];
    }
    createChild(config) {
        const result = this.createElemChild(this.component, config, this.rootDomElement);
        let existingChilds = [];
        const { data } = this.component;
        if (data && data.children && data.children.length !== 0) {
            existingChilds = [...data.children];
        }
        ;
        this.component.data.children = [...existingChilds, Object.assign({}, result)];
        return new _child__WEBPACK_IMPORTED_MODULE_1__.DfrazeChild(result, this.rootDomElement, this.component);
    }
    transformContent(transform) {
        this.transformElemContent(this.component, transform);
    }
}


/***/ }),

/***/ "./src/lib/index.ts":
/*!**************************!*\
  !*** ./src/lib/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DfrazeBase": () => (/* binding */ DfrazeBase)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/lib/common.ts");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./src/lib/component.ts");


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
}


/***/ }),

/***/ "./src/panelCard.ts":
/*!**************************!*\
  !*** ./src/panelCard.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "panelCard": () => (/* binding */ panelCard)
/* harmony export */ });
const panelCard = (panel, config, index) => {
    var _a, _b;
    let activeCard = 0;
    const card = panel.createChild({ node: 'div', class: 'panel__card' });
    const cardWrap = card.createChild({ node: 'div', class: 'panel__card-wrap' });
    cardWrap.createChild({ node: 'div', class: 'panel__card-line' });
    const bg = cardWrap.createChild({ node: 'div', class: 'panel__card-bg' });
    bg.createChild({ node: 'h2', content: config.title });
    card.changeAttr([{ key: 'style', value: `background-image: url(${config.image})` }]);
    const checkAll = () => {
        var _a;
        if (activeCard === index) {
            document.querySelectorAll('.panel__card').forEach(item => {
                item.classList.remove('panel__card-active');
            });
            // card.child.data?.target?.classList.add('panel__card-active');
            card.changeAttr([{ key: 'class', value: `${(_a = card.child.data) === null || _a === void 0 ? void 0 : _a.class} ` + 'panel__card-active' }]);
        }
    };
    checkAll();
    (_b = (_a = card.child.data) === null || _a === void 0 ? void 0 : _a.target) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
        activeCard = index;
        checkAll();
    });
};
//TODO 1. Get items collection
//TODO 2. Change attrs separately


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
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container */ "./src/container.ts");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib */ "./src/lib/index.ts");


const base = new _lib__WEBPACK_IMPORTED_MODULE_1__.DfrazeBase(document.querySelector('.dfraze-root'));
(0,_container__WEBPACK_IMPORTED_MODULE_0__.ContainerComponent)(base);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMvRjtJQUNILENBQUM7SUFDRCxRQUFRLEVBQUUsQ0FBQztJQUVYLGdCQUFJLENBQUMsS0FBSyxDQUFDLElBQUksMENBQUUsTUFBTSwwQ0FBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQ3RELFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsUUFBUSxFQUFFLENBQUM7SUFDYixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCw4QkFBOEI7QUFDOUIsaUNBQWlDOzs7Ozs7O1VDbENqQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05pRDtBQUNkO0FBRW5DLE1BQU0sSUFBSSxHQUFHLElBQUksNENBQVUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBRSxDQUFDLENBQUM7QUFFckUsOERBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yeGpzLXRhc2tzLy4vc3JjL2NvbnRhaW5lci50cyIsIndlYnBhY2s6Ly9yeGpzLXRhc2tzLy4vc3JjL2xpYi9jaGlsZC50cyIsIndlYnBhY2s6Ly9yeGpzLXRhc2tzLy4vc3JjL2xpYi9jb21tb24udHMiLCJ3ZWJwYWNrOi8vcnhqcy10YXNrcy8uL3NyYy9saWIvY29tcG9uZW50LnRzIiwid2VicGFjazovL3J4anMtdGFza3MvLi9zcmMvbGliL2luZGV4LnRzIiwid2VicGFjazovL3J4anMtdGFza3MvLi9zcmMvcGFuZWxDYXJkLnRzIiwid2VicGFjazovL3J4anMtdGFza3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcnhqcy10YXNrcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcnhqcy10YXNrcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3J4anMtdGFza3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yeGpzLXRhc2tzLy4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGZyYXplQmFzZSB9IGZyb20gXCIuL2xpYlwiO1xyXG5pbXBvcnQgeyBwYW5lbENhcmQgfSBmcm9tIFwiLi9wYW5lbENhcmRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXJDb21wb25lbnQgPSAoYmFzZTogRGZyYXplQmFzZSkgPT4ge1xyXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBiYXNlLmNyZWF0ZUNvbXBvbmVudCh7bmFtZTogJ21haW5Db250YWluZXInfSk7XHJcbiAgbWFpbkNvbnRhaW5lci5iYXNlQ29uZmlnKHtub2RlOiAnZGl2JywgY2xhc3M6ICdjb250YWluZXInfSk7XHJcblxyXG4gIGNvbnN0IHBhbmVsID0gbWFpbkNvbnRhaW5lci5jcmVhdGVDaGlsZCh7bm9kZTogJ2RpdicsIGNsYXNzOiAncGFuZWwnfSk7XHJcblxyXG4gIGNvbnN0IGNhcmRzRGF0YSA9IFtcclxuICAgIHt0aXRsZTogJ1Rob3InLCBpbWFnZTogJ2ltYWdlcy90aG9yLWJnLmpwZyd9LFxyXG4gICAge3RpdGxlOiAnU3BpZGVyIE1hbicsIGltYWdlOiAnaW1hZ2VzL3NwaWRlci1iZy5qcGcnfSxcclxuICAgIHt0aXRsZTogJ0JsYWNrIHdpZG93JywgaW1hZ2U6ICdpbWFnZXMvYmxhY2stYmcuanBnJ30sXHJcbiAgICB7dGl0bGU6ICdDYXB0YWluIEFtZXJpY2EnLCBpbWFnZTogJ2ltYWdlcy9jYXAtYmcuanBnJ30sXHJcbiAgXTtcclxuXHJcbiAgY2FyZHNEYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7cGFuZWxDYXJkKHBhbmVsLCBpdGVtLCBpbmRleCl9KTtcclxufSIsImltcG9ydCB7IENvbW1vbiB9IGZyb20gXCIuL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnRDaGlsZCwgQ29tcG9uZW50R3JvdXAsIENyZWF0ZWRFbGVtZW50IH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEZnJhemVDaGlsZCBleHRlbmRzIENvbW1vbiB7XHJcbiAgcHVibGljIGNoaWxkOiBDb21wb25lbnRDaGlsZDtcclxuICBcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbWFpbkNvbmZpZzogQ3JlYXRlZEVsZW1lbnQsIHByaXZhdGUgcm9vdERvbUVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50LFxyXG4gICAgcHJpdmF0ZSBwYXJlbnRDb21wb25lbnQ6IENvbXBvbmVudEdyb3VwIHwgQ29tcG9uZW50Q2hpbGRcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmNoaWxkID0ge2RhdGE6IHsuLi50aGlzLm1haW5Db25maWd9fTtcclxuICB9XHJcblxyXG4gIGNoYW5nZUF0dHIoYXR0cmlidXRlczogQXJyYXk8e2tleTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nfT4pIHtcclxuICAgIGNvbnN0IGF0dHJzID0gIXRoaXMuY2hpbGQuZGF0YSEuYXR0cmlidXRlcyEgPyBbXSA6IHRoaXMuY2hpbGQuZGF0YSEuYXR0cmlidXRlcyE7XHJcbiAgICBjb25zdCByZXN1bHQgPSBbLi4uYXR0cnMsIC4uLmF0dHJpYnV0ZXNdO1xyXG5cclxuICAgIHRoaXMuY2hhbmdlRWxlbUF0dHIodGhpcy5jaGlsZCwgcmVzdWx0KTtcclxuICAgIHRoaXMuY2hpbGQuZGF0YSEuYXR0cmlidXRlcyA9IHJlc3VsdDtcclxuXHJcbiAgICB0aGlzLiNjaGFuZ2VDaGlsZERhdGEoe2tleTogJ2F0dHJpYnV0ZXMnLCB2YWx1ZTogcmVzdWx0fSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVDaGlsZChjb25maWc6IHtjbGFzcz86IHN0cmluZywgY29udGVudD86IHN0cmluZywgbm9kZTogc3RyaW5nfSkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5jcmVhdGVFbGVtQ2hpbGQodGhpcy5jaGlsZCwgY29uZmlnLCB0aGlzLnJvb3REb21FbGVtZW50KTtcclxuICAgIGxldCBleGlzdGluZ0NoaWxkczogYW55ID0gW107XHJcbiAgICBcclxuICAgIGNvbnN0IHtkYXRhfSA9IHRoaXMuY2hpbGQ7XHJcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmNoaWxkcmVuISAmJiBkYXRhLmNoaWxkcmVuIS5sZW5ndGggIT09IDApIHtleGlzdGluZ0NoaWxkcyA9IFsuLi5kYXRhLmNoaWxkcmVuIV19O1xyXG4gICAgXHJcbiAgICB0aGlzLmNoaWxkLmRhdGEhLmNoaWxkcmVuID0gWy4uLmV4aXN0aW5nQ2hpbGRzLCB7Li4ucmVzdWx0fV07XHJcblxyXG4gICAgdGhpcy4jY2hhbmdlQ2hpbGREYXRhKHtrZXk6ICdjaGlsZHJlbicsIHZhbHVlOiBbLi4uZXhpc3RpbmdDaGlsZHMsIHsuLi5yZXN1bHR9XX0pO1xyXG4gICAgcmV0dXJuIG5ldyBEZnJhemVDaGlsZChyZXN1bHQsIHRoaXMucm9vdERvbUVsZW1lbnQsIHRoaXMuY2hpbGQpO1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtQ29udGVudCh0cmFuc2Zvcm06IEZ1bmN0aW9uKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnRyYW5zZm9ybUVsZW1Db250ZW50KHRoaXMuY2hpbGQsIHRyYW5zZm9ybSk7XHJcbiAgICB0aGlzLiNjaGFuZ2VDaGlsZERhdGEoe2tleTogJ2NvbnRlbnQnLCB2YWx1ZTogcmVzdWx0fSk7XHJcbiAgfVxyXG5cclxuICAjY2hhbmdlQ2hpbGREYXRhKGRhdGE6IHtrZXk6IHN0cmluZywgdmFsdWU6IGFueX0pIHtcclxuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5wYXJlbnRDb21wb25lbnQuZGF0YT8uY2hpbGRyZW4hO1xyXG5cclxuICAgIGZvciAobGV0IGl0ZW0gb2YgY2hpbGRyZW4pIHtcclxuICAgICAgaWYgKGl0ZW0udGFyZ2V0ID09PSB0aGlzLmNoaWxkLmRhdGE/LnRhcmdldCkge1JlZmxlY3Quc2V0KGl0ZW0sIGRhdGEua2V5LCBkYXRhLnZhbHVlKX07XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50R3JvdXBFbGVtZW50LCBDcmVhdGVkRWxlbWVudCB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tbW9uIHtcclxuICBwcm90ZWN0ZWQgY3JlYXRlRG9tRWxlbWVudChcclxuICAgIHBhcmVudDogRWxlbWVudCB8IHN0cmluZywgZWxlbUNsYXNzOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgXHJcbiAgICBub2RlOiBzdHJpbmcsIHJvb3Q6IEhUTUxEaXZFbGVtZW50LFxyXG4gICk6IENyZWF0ZWRFbGVtZW50IHtcclxuICAgIGxldCBmb3VuZERvbUVsZW1lbnQ6IGFueSA9IHBhcmVudDtcclxuICAgIGxldCBjbGFzc0RvbUVsZW1lbnQ6IHN0cmluZyA9ICcnO1xyXG4gICAgY29uc3QgY3JlYXRlZERvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGUpO1xyXG4gICAgXHJcbiAgICBpZiAodHlwZW9mIHBhcmVudCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgZm91bmREb21FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJlbnQpITtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGlmIChlbGVtQ2xhc3MgIT09IHVuZGVmaW5lZCkge2NsYXNzRG9tRWxlbWVudCA9IGVsZW1DbGFzc307XHJcbiAgICBpZiAoY29udGVudCkge2NyZWF0ZWREb21FbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudH07XHJcblxyXG4gICAgaWYgKGNsYXNzRG9tRWxlbWVudC5sZW5ndGggIT09IDApIHtcclxuICAgICAgY3JlYXRlZERvbUVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIGNsYXNzRG9tRWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgKGZvdW5kRG9tRWxlbWVudCEgfHwgcm9vdCkuYXBwZW5kKGNyZWF0ZWREb21FbGVtZW50KTtcclxuICAgIFxyXG4gICAgY29uc3QgcmVzdWx0ID0ge1xyXG4gICAgICBwYXJlbnQ6IGZvdW5kRG9tRWxlbWVudCEsIGNsYXNzOiBlbGVtQ2xhc3MsIGNvbnRlbnQ6IGNvbnRlbnQsIG5vZGU6IG5vZGUsIHRhcmdldDogY3JlYXRlZERvbUVsZW1lbnRcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBmaW5kQ29tcG9uZW50VGFyZ2V0KGNvbmZpZzogQ29tcG9uZW50R3JvdXBFbGVtZW50KSB7XHJcbiAgICBpZiAoY29uZmlnLmNsYXNzKSByZXR1cm4gYC4ke2NvbmZpZy5jbGFzc31gO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnN0IGNsYXNzRWxlbWVudCA9IGNvbmZpZy50YXJnZXQ/LmNsYXNzTGlzdDtcclxuICAgICAgaWYgKGNsYXNzRWxlbWVudCAmJiBjbGFzc0VsZW1lbnQubGVuZ3RoICE9PSAwKSByZXR1cm4gY2xhc3NFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbmZpZy50YXJnZXQ7XHJcbiAgfVxyXG5cclxuICAjc2VhcmNoTm9kZSA9IChlbGVtZW50OiBhbnkpID0+IHtcclxuICAgIHJldHVybiB0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2VsZW1lbnR9YCkgOiBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGNoYW5nZUVsZW1BdHRyKGNvbXBvbmVudDogYW55LCBhdHRyaWJ1dGVzOiBBcnJheTx7a2V5OiBzdHJpbmc7IHZhbHVlOiBzdHJpbmd9Pikge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZmluZENvbXBvbmVudFRhcmdldChjb21wb25lbnQuZGF0YSA/IGNvbXBvbmVudC5kYXRhIDogY29tcG9uZW50KTtcclxuICAgIGNvbnN0IGZvdW5kRG9tRWxlbWVudDogYW55ID0gdGhpcy4jc2VhcmNoTm9kZShlbGVtZW50KTtcclxuXHJcbiAgICBmb3IgKGxldCBhdHRyIG9mIGF0dHJpYnV0ZXMpIHtjb21wb25lbnQuZGF0YS50YXJnZXQuc2V0QXR0cmlidXRlKGF0dHIua2V5LCBhdHRyLnZhbHVlKX07XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgY3JlYXRlRWxlbUNoaWxkKFxyXG4gICAgY29tcG9uZW50OiBhbnksIFxyXG4gICAgY29uZmlnOiB7Y2xhc3M/OiBzdHJpbmcsIGNvbnRlbnQ/OiBzdHJpbmcsIG5vZGU6IHN0cmluZ30sIFxyXG4gICAgcm9vdERvbUVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50XHJcbiAgKSB7XHJcbiAgICBjb25zdCBwYXJlbnQ6IGFueSA9IHRoaXMuZmluZENvbXBvbmVudFRhcmdldChjb21wb25lbnQuZGF0YSk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KFxyXG4gICAgICBjb21wb25lbnQuZGF0YS50YXJnZXQsIGNvbmZpZy5jbGFzcyEsIGNvbmZpZy5jb250ZW50ISwgY29uZmlnLm5vZGUsIFxyXG4gICAgICByb290RG9tRWxlbWVudFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybUVsZW1Db250ZW50KGNvbXBvbmVudDogYW55LCB0cmFuc2Zvcm06IEZ1bmN0aW9uKSB7XHJcbiAgICBjb25zdCBpbml0aWFsQ29udGVudDogc3RyaW5nID0gY29tcG9uZW50LmRhdGEuY29udGVudCE7XHJcbiAgICBsZXQgcmVzdWx0OiBzdHJpbmcgPSBpbml0aWFsQ29udGVudDtcclxuXHJcbiAgICBjb25zdCBlbGVtZW50OiBhbnkgPSB0aGlzLmZpbmRDb21wb25lbnRUYXJnZXQoY29tcG9uZW50LmRhdGEpO1xyXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuI3NlYXJjaE5vZGUoZWxlbWVudCk7XHJcbiAgICBcclxuICAgIGlmIChpbml0aWFsQ29udGVudCkge1xyXG4gICAgICBjb21wb25lbnQuZGF0YS5jb250ZW50ID0gIXRyYW5zZm9ybShpbml0aWFsQ29udGVudCkgPyByZXN1bHQgOiB0cmFuc2Zvcm0oaW5pdGlhbENvbnRlbnQpO1xyXG4gICAgICByZXN1bHQgPSBjb21wb25lbnQuZGF0YS5jb250ZW50ITtcclxuICAgIH07IFxyXG5cclxuICAgIG5vZGUuaW5uZXJIVE1MID0gcmVzdWx0O1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBDb21tb24gfSBmcm9tIFwiLi9jb21tb25cIjtcclxuaW1wb3J0IHsgRGZyYXplQ2hpbGQgfSBmcm9tIFwiLi9jaGlsZFwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnRHcm91cCB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGZyYXplQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uIHtcclxuICBwdWJsaWMgY29tcG9uZW50OiBDb21wb25lbnRHcm91cDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb290RG9tRWxlbWVudDogSFRNTERpdkVsZW1lbnQpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmNvbXBvbmVudCA9IHtkYXRhOiB7fX07XHJcbiAgfVxyXG5cclxuICBiYXNlQ29uZmlnKGNvbmZpZzoge1xyXG4gICAgcGFyZW50PzogRWxlbWVudCB8IHN0cmluZywgY2xhc3M/OiBzdHJpbmcsIGNvbnRlbnQ/OiBzdHJpbmcsIG5vZGU6IHN0cmluZ1xyXG4gIH0pIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudChcclxuICAgICAgY29uZmlnLnBhcmVudCEsIGNvbmZpZy5jbGFzcyEsIGNvbmZpZy5jb250ZW50ISwgY29uZmlnLm5vZGUsIHRoaXMucm9vdERvbUVsZW1lbnQsIFxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmNvbXBvbmVudC5kYXRhID0gey4uLnJlc3VsdH07XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VBdHRyKGF0dHJpYnV0ZXM6IEFycmF5PHtrZXk6IHN0cmluZzsgdmFsdWU6IHN0cmluZ30+KSB7XHJcbiAgICBjb25zdCBhdHRycyA9ICF0aGlzLmNvbXBvbmVudC5kYXRhIS5hdHRyaWJ1dGVzISA/IFtdIDogdGhpcy5jb21wb25lbnQuZGF0YSEuYXR0cmlidXRlcyE7XHJcblxyXG4gICAgdGhpcy5jaGFuZ2VFbGVtQXR0cih0aGlzLmNvbXBvbmVudCwgYXR0cmlidXRlcyk7XHJcbiAgICB0aGlzLmNvbXBvbmVudC5kYXRhIS5hdHRyaWJ1dGVzID0gWy4uLmF0dHJzLCAuLi5hdHRyaWJ1dGVzXTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUNoaWxkKGNvbmZpZzoge2NsYXNzPzogc3RyaW5nLCBjb250ZW50Pzogc3RyaW5nLCBub2RlOiBzdHJpbmd9KSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmNyZWF0ZUVsZW1DaGlsZCh0aGlzLmNvbXBvbmVudCwgY29uZmlnLCB0aGlzLnJvb3REb21FbGVtZW50KTtcclxuICAgIGxldCBleGlzdGluZ0NoaWxkczogYW55ID0gW107XHJcbiAgICBcclxuICAgIGNvbnN0IHtkYXRhfSA9IHRoaXMuY29tcG9uZW50O1xyXG4gICAgaWYgKGRhdGEgJiYgZGF0YS5jaGlsZHJlbiEgJiYgZGF0YS5jaGlsZHJlbiEubGVuZ3RoICE9PSAwKSB7ZXhpc3RpbmdDaGlsZHMgPSBbLi4uZGF0YS5jaGlsZHJlbiFdfTtcclxuXHJcbiAgICB0aGlzLmNvbXBvbmVudC5kYXRhIS5jaGlsZHJlbiA9IFsuLi5leGlzdGluZ0NoaWxkcywgey4uLnJlc3VsdH1dO1xyXG4gICAgcmV0dXJuIG5ldyBEZnJhemVDaGlsZChyZXN1bHQsIHRoaXMucm9vdERvbUVsZW1lbnQsIHRoaXMuY29tcG9uZW50KTtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybUNvbnRlbnQodHJhbnNmb3JtOiBGdW5jdGlvbikge1xyXG4gICAgdGhpcy50cmFuc2Zvcm1FbGVtQ29udGVudCh0aGlzLmNvbXBvbmVudCwgdHJhbnNmb3JtKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBDb21tb24gfSBmcm9tIFwiLi9jb21tb25cIjtcclxuaW1wb3J0IHsgRGZyYXplQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgRG9tQ29uZmlnIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEZnJhemVCYXNlIGV4dGVuZHMgQ29tbW9uIHtcclxuICBwdWJsaWMgY29tcG9uZW50cyE6IEFycmF5PENvbXBvbmVudD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm9vdERvbUVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50KSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5jb21wb25lbnRzID0gW107XHJcbiAgfVxyXG5cclxuICBjcmVhdGVFbGVtZW50KG5vZGU6IHN0cmluZywgY29uZmlnOiB7cGFyZW50Pzogc3RyaW5nLCBjbGFzcz86IHN0cmluZywgY29udGVudD86IHN0cmluZ30pIHtcclxuICAgIGlmIChub2RlLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBpZiAoUmVmbGVjdC5vd25LZXlzKGNvbmZpZykubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVEb21FbGVtZW50KFxyXG4gICAgICAgICAgY29uZmlnLnBhcmVudCEsIGNvbmZpZy5jbGFzcyEsIGNvbmZpZy5jb250ZW50ISwgbm9kZSwgdGhpcy5yb290RG9tRWxlbWVudCwgXHJcbiAgICAgICAgKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZUNvbXBvbmVudChjb25maWc6IENvbXBvbmVudCkge1xyXG4gICAgY29uc3QgY29tcG9uZW50Q2xhc3MgPSBuZXcgRGZyYXplQ29tcG9uZW50KHRoaXMucm9vdERvbUVsZW1lbnQpO1xyXG4gICAgdGhpcy5jb21wb25lbnRzLnB1c2goe25hbWU6IGNvbmZpZy5uYW1lLCBjb21wb25lbnQ6IE9iamVjdC5hc3NpZ24oY29tcG9uZW50Q2xhc3MuY29tcG9uZW50KX0pO1xyXG5cclxuICAgIHJldHVybiBjb21wb25lbnRDbGFzcztcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBEZnJhemVDaGlsZCB9IGZyb20gXCIuL2xpYi9jaGlsZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBhbmVsQ2FyZCA9IChcclxuICBwYW5lbDogRGZyYXplQ2hpbGQsIGNvbmZpZzoge3RpdGxlOiBzdHJpbmcsIGltYWdlOiBzdHJpbmd9LCBpbmRleDogbnVtYmVyXHJcbikgPT4ge1xyXG4gIGxldCBhY3RpdmVDYXJkID0gMDtcclxuXHJcbiAgY29uc3QgY2FyZCA9IHBhbmVsLmNyZWF0ZUNoaWxkKHtub2RlOiAnZGl2JywgY2xhc3M6ICdwYW5lbF9fY2FyZCd9KTtcclxuICBjb25zdCBjYXJkV3JhcCA9IGNhcmQuY3JlYXRlQ2hpbGQoe25vZGU6ICdkaXYnLCBjbGFzczogJ3BhbmVsX19jYXJkLXdyYXAnfSk7XHJcblxyXG4gIGNhcmRXcmFwLmNyZWF0ZUNoaWxkKHtub2RlOiAnZGl2JywgY2xhc3M6ICdwYW5lbF9fY2FyZC1saW5lJ30pO1xyXG4gIGNvbnN0IGJnID0gY2FyZFdyYXAuY3JlYXRlQ2hpbGQoe25vZGU6ICdkaXYnLCBjbGFzczogJ3BhbmVsX19jYXJkLWJnJ30pO1xyXG4gIFxyXG4gIGJnLmNyZWF0ZUNoaWxkKHtub2RlOiAnaDInLCBjb250ZW50OiBjb25maWcudGl0bGV9KTtcclxuICBjYXJkLmNoYW5nZUF0dHIoW3trZXk6ICdzdHlsZScsIHZhbHVlOiBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7Y29uZmlnLmltYWdlfSlgfV0pO1xyXG5cclxuICBjb25zdCBjaGVja0FsbCA9ICgpID0+IHtcclxuICAgIGlmIChhY3RpdmVDYXJkID09PSBpbmRleCkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFuZWxfX2NhcmQnKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgncGFuZWxfX2NhcmQtYWN0aXZlJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBjYXJkLmNoaWxkLmRhdGE/LnRhcmdldD8uY2xhc3NMaXN0LmFkZCgncGFuZWxfX2NhcmQtYWN0aXZlJyk7XHJcbiAgICAgIGNhcmQuY2hhbmdlQXR0cihbe2tleTogJ2NsYXNzJywgdmFsdWU6IGAke2NhcmQuY2hpbGQuZGF0YT8uY2xhc3N9IGAgKyAncGFuZWxfX2NhcmQtYWN0aXZlJ31dKTtcclxuICAgIH1cclxuICB9XHJcbiAgY2hlY2tBbGwoKTtcclxuXHJcbiAgY2FyZC5jaGlsZC5kYXRhPy50YXJnZXQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgYWN0aXZlQ2FyZCA9IGluZGV4O1xyXG4gICAgY2hlY2tBbGwoKTtcclxuICB9KTtcclxufVxyXG5cclxuLy9UT0RPIDEuIEdldCBpdGVtcyBjb2xsZWN0aW9uXHJcbi8vVE9ETyAyLiBDaGFuZ2UgYXR0cnMgc2VwYXJhdGVseSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vY29udGFpbmVyXCI7XHJcbmltcG9ydCB7IERmcmF6ZUJhc2UgfSBmcm9tIFwiLi9saWJcIjtcclxuXHJcbmNvbnN0IGJhc2UgPSBuZXcgRGZyYXplQmFzZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGZyYXplLXJvb3QnKSEpO1xyXG5cclxuQ29udGFpbmVyQ29tcG9uZW50KGJhc2UpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==