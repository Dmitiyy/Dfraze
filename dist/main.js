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
    cardsData.forEach((item, index) => { (0,_panelCard__WEBPACK_IMPORTED_MODULE_0__.panelCard)(panel, item, index, base); });
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
        var _a, _b;
        const attrs = !this.child.data.attributes ? [] : this.child.data.attributes;
        const result = [...attrs, ...attributes];
        if (attributes.length === 1) {
            (_b = (_a = this.child.data) === null || _a === void 0 ? void 0 : _a.target) === null || _b === void 0 ? void 0 : _b.setAttribute(attributes[0].key, attributes[0].value);
        }
        else {
            this.changeElemAttr(this.child, result);
        }
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
    deleteAllClassesCommon(fromClassName, which, components) {
        document.querySelectorAll(`.${fromClassName}`).forEach(item => {
            item.classList.remove(`${which}`);
        });
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
        var _a, _b;
        const attrs = !this.component.data.attributes ? [] : this.component.data.attributes;
        if (attributes.length === 1) {
            (_b = (_a = this.component.data) === null || _a === void 0 ? void 0 : _a.target) === null || _b === void 0 ? void 0 : _b.setAttribute(attributes[0].key, attributes[0].value);
        }
        else {
            this.changeElemAttr(this.component, attributes);
        }
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
    deleteAllClasses(fromClassName, which) {
        this.deleteAllClassesCommon(fromClassName, which, this.components);
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
const panelCard = (panel, config, index, base) => {
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
            base.deleteAllClasses('panel__card', 'panel__card-active');
            card.changeAttr([{ key: 'class', value: `${(_a = card.child.data) === null || _a === void 0 ? void 0 : _a.class} ` + 'panel__card-active' }]);
        }
    };
    checkAll();
    (_b = (_a = card.child.data) === null || _a === void 0 ? void 0 : _a.target) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
        activeCard = index;
        checkAll();
    });
};


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOaUQ7QUFDZDtBQUVuQyxNQUFNLElBQUksR0FBRyxJQUFJLDRDQUFVLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUUsQ0FBQyxDQUFDO0FBRXJFLDhEQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnhqcy10YXNrcy8uL3NyYy9jb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vcnhqcy10YXNrcy8uL3NyYy9saWIvY2hpbGQudHMiLCJ3ZWJwYWNrOi8vcnhqcy10YXNrcy8uL3NyYy9saWIvY29tbW9uLnRzIiwid2VicGFjazovL3J4anMtdGFza3MvLi9zcmMvbGliL2NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9yeGpzLXRhc2tzLy4vc3JjL2xpYi9pbmRleC50cyIsIndlYnBhY2s6Ly9yeGpzLXRhc2tzLy4vc3JjL3BhbmVsQ2FyZC50cyIsIndlYnBhY2s6Ly9yeGpzLXRhc2tzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3J4anMtdGFza3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3J4anMtdGFza3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yeGpzLXRhc2tzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnhqcy10YXNrcy8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERmcmF6ZUJhc2UgfSBmcm9tIFwiLi9saWJcIjtcclxuaW1wb3J0IHsgcGFuZWxDYXJkIH0gZnJvbSBcIi4vcGFuZWxDYXJkXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyQ29tcG9uZW50ID0gKGJhc2U6IERmcmF6ZUJhc2UpID0+IHtcclxuICBjb25zdCBtYWluQ29udGFpbmVyID0gYmFzZS5jcmVhdGVDb21wb25lbnQoe25hbWU6ICdtYWluQ29udGFpbmVyJ30pO1xyXG4gIG1haW5Db250YWluZXIuYmFzZUNvbmZpZyh7bm9kZTogJ2RpdicsIGNsYXNzOiAnY29udGFpbmVyJ30pO1xyXG5cclxuICBjb25zdCBwYW5lbCA9IG1haW5Db250YWluZXIuY3JlYXRlQ2hpbGQoe25vZGU6ICdkaXYnLCBjbGFzczogJ3BhbmVsJ30pO1xyXG5cclxuICBjb25zdCBjYXJkc0RhdGEgPSBbXHJcbiAgICB7dGl0bGU6ICdUaG9yJywgaW1hZ2U6ICdpbWFnZXMvdGhvci1iZy5qcGcnfSxcclxuICAgIHt0aXRsZTogJ1NwaWRlciBNYW4nLCBpbWFnZTogJ2ltYWdlcy9zcGlkZXItYmcuanBnJ30sXHJcbiAgICB7dGl0bGU6ICdCbGFjayB3aWRvdycsIGltYWdlOiAnaW1hZ2VzL2JsYWNrLWJnLmpwZyd9LFxyXG4gICAge3RpdGxlOiAnQ2FwdGFpbiBBbWVyaWNhJywgaW1hZ2U6ICdpbWFnZXMvY2FwLWJnLmpwZyd9LFxyXG4gIF07XHJcblxyXG4gIGNhcmRzRGF0YS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge3BhbmVsQ2FyZChwYW5lbCwgaXRlbSwgaW5kZXgsIGJhc2UpfSk7XHJcbn0iLCJpbXBvcnQgeyBDb21tb24gfSBmcm9tIFwiLi9jb21tb25cIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50Q2hpbGQsIENvbXBvbmVudEdyb3VwLCBDcmVhdGVkRWxlbWVudCB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGZyYXplQ2hpbGQgZXh0ZW5kcyBDb21tb24ge1xyXG4gIHB1YmxpYyBjaGlsZDogQ29tcG9uZW50Q2hpbGQ7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG1haW5Db25maWc6IENyZWF0ZWRFbGVtZW50LCBwcml2YXRlIHJvb3REb21FbGVtZW50OiBIVE1MRGl2RWxlbWVudCxcclxuICAgIHByaXZhdGUgcGFyZW50Q29tcG9uZW50OiBDb21wb25lbnRHcm91cCB8IENvbXBvbmVudENoaWxkXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5jaGlsZCA9IHtkYXRhOiB7Li4udGhpcy5tYWluQ29uZmlnfX07XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VBdHRyKGF0dHJpYnV0ZXM6IEFycmF5PHtrZXk6IHN0cmluZzsgdmFsdWU6IHN0cmluZ30+KSB7XHJcbiAgICBjb25zdCBhdHRycyA9ICF0aGlzLmNoaWxkLmRhdGEhLmF0dHJpYnV0ZXMhID8gW10gOiB0aGlzLmNoaWxkLmRhdGEhLmF0dHJpYnV0ZXMhO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gWy4uLmF0dHJzLCAuLi5hdHRyaWJ1dGVzXTtcclxuXHJcbiAgICBpZiAoYXR0cmlidXRlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgdGhpcy5jaGlsZC5kYXRhPy50YXJnZXQ/LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVzWzBdLmtleSwgYXR0cmlidXRlc1swXS52YWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNoYW5nZUVsZW1BdHRyKHRoaXMuY2hpbGQsIHJlc3VsdCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGlsZC5kYXRhIS5hdHRyaWJ1dGVzID0gcmVzdWx0O1xyXG4gICAgdGhpcy4jY2hhbmdlQ2hpbGREYXRhKHtrZXk6ICdhdHRyaWJ1dGVzJywgdmFsdWU6IHJlc3VsdH0pO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ2hpbGQoY29uZmlnOiB7Y2xhc3M/OiBzdHJpbmcsIGNvbnRlbnQ/OiBzdHJpbmcsIG5vZGU6IHN0cmluZ30pIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuY3JlYXRlRWxlbUNoaWxkKHRoaXMuY2hpbGQsIGNvbmZpZywgdGhpcy5yb290RG9tRWxlbWVudCk7XHJcbiAgICBsZXQgZXhpc3RpbmdDaGlsZHM6IGFueSA9IFtdO1xyXG4gICAgXHJcbiAgICBjb25zdCB7ZGF0YX0gPSB0aGlzLmNoaWxkO1xyXG4gICAgaWYgKGRhdGEgJiYgZGF0YS5jaGlsZHJlbiEgJiYgZGF0YS5jaGlsZHJlbiEubGVuZ3RoICE9PSAwKSB7ZXhpc3RpbmdDaGlsZHMgPSBbLi4uZGF0YS5jaGlsZHJlbiFdfTtcclxuICAgIFxyXG4gICAgdGhpcy5jaGlsZC5kYXRhIS5jaGlsZHJlbiA9IFsuLi5leGlzdGluZ0NoaWxkcywgey4uLnJlc3VsdH1dO1xyXG5cclxuICAgIHRoaXMuI2NoYW5nZUNoaWxkRGF0YSh7a2V5OiAnY2hpbGRyZW4nLCB2YWx1ZTogWy4uLmV4aXN0aW5nQ2hpbGRzLCB7Li4ucmVzdWx0fV19KTtcclxuICAgIHJldHVybiBuZXcgRGZyYXplQ2hpbGQocmVzdWx0LCB0aGlzLnJvb3REb21FbGVtZW50LCB0aGlzLmNoaWxkKTtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybUNvbnRlbnQodHJhbnNmb3JtOiBGdW5jdGlvbikge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1FbGVtQ29udGVudCh0aGlzLmNoaWxkLCB0cmFuc2Zvcm0pO1xyXG4gICAgdGhpcy4jY2hhbmdlQ2hpbGREYXRhKHtrZXk6ICdjb250ZW50JywgdmFsdWU6IHJlc3VsdH0pO1xyXG4gIH1cclxuXHJcbiAgI2NoYW5nZUNoaWxkRGF0YShkYXRhOiB7a2V5OiBzdHJpbmcsIHZhbHVlOiBhbnl9KSB7XHJcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMucGFyZW50Q29tcG9uZW50LmRhdGE/LmNoaWxkcmVuITtcclxuXHJcbiAgICBmb3IgKGxldCBpdGVtIG9mIGNoaWxkcmVuKSB7XHJcbiAgICAgIGlmIChpdGVtLnRhcmdldCA9PT0gdGhpcy5jaGlsZC5kYXRhPy50YXJnZXQpIHtSZWZsZWN0LnNldChpdGVtLCBkYXRhLmtleSwgZGF0YS52YWx1ZSl9O1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudEdyb3VwRWxlbWVudCwgQ3JlYXRlZEVsZW1lbnQgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbW1vbiB7XHJcbiAgcHJvdGVjdGVkIGNyZWF0ZURvbUVsZW1lbnQoXHJcbiAgICBwYXJlbnQ6IEVsZW1lbnQgfCBzdHJpbmcsIGVsZW1DbGFzczogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIFxyXG4gICAgbm9kZTogc3RyaW5nLCByb290OiBIVE1MRGl2RWxlbWVudCxcclxuICApOiBDcmVhdGVkRWxlbWVudCB7XHJcbiAgICBsZXQgZm91bmREb21FbGVtZW50OiBhbnkgPSBwYXJlbnQ7XHJcbiAgICBsZXQgY2xhc3NEb21FbGVtZW50OiBzdHJpbmcgPSAnJztcclxuICAgIGNvbnN0IGNyZWF0ZWREb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlKTtcclxuICAgIFxyXG4gICAgaWYgKHR5cGVvZiBwYXJlbnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGZvdW5kRG9tRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyZW50KSE7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBpZiAoZWxlbUNsYXNzICE9PSB1bmRlZmluZWQpIHtjbGFzc0RvbUVsZW1lbnQgPSBlbGVtQ2xhc3N9O1xyXG4gICAgaWYgKGNvbnRlbnQpIHtjcmVhdGVkRG9tRWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnR9O1xyXG5cclxuICAgIGlmIChjbGFzc0RvbUVsZW1lbnQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGNyZWF0ZWREb21FbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc0RvbUVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIChmb3VuZERvbUVsZW1lbnQhIHx8IHJvb3QpLmFwcGVuZChjcmVhdGVkRG9tRWxlbWVudCk7XHJcbiAgICBcclxuICAgIGNvbnN0IHJlc3VsdCA9IHtcclxuICAgICAgcGFyZW50OiBmb3VuZERvbUVsZW1lbnQhLCBjbGFzczogZWxlbUNsYXNzLCBjb250ZW50OiBjb250ZW50LCBub2RlOiBub2RlLCB0YXJnZXQ6IGNyZWF0ZWREb21FbGVtZW50XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZmluZENvbXBvbmVudFRhcmdldChjb25maWc6IENvbXBvbmVudEdyb3VwRWxlbWVudCkge1xyXG4gICAgaWYgKGNvbmZpZy5jbGFzcykgcmV0dXJuIGAuJHtjb25maWcuY2xhc3N9YDtcclxuICAgIGVsc2Uge1xyXG4gICAgICBjb25zdCBjbGFzc0VsZW1lbnQgPSBjb25maWcudGFyZ2V0Py5jbGFzc0xpc3Q7XHJcbiAgICAgIGlmIChjbGFzc0VsZW1lbnQgJiYgY2xhc3NFbGVtZW50Lmxlbmd0aCAhPT0gMCkgcmV0dXJuIGNsYXNzRWxlbWVudDtcclxuICAgIH1cclxuICAgIHJldHVybiBjb25maWcudGFyZ2V0O1xyXG4gIH1cclxuXHJcbiAgI3NlYXJjaE5vZGUgPSAoZWxlbWVudDogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gdHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtlbGVtZW50fWApIDogZWxlbWVudDtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBjaGFuZ2VFbGVtQXR0cihjb21wb25lbnQ6IGFueSwgYXR0cmlidXRlczogQXJyYXk8e2tleTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nfT4pIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmZpbmRDb21wb25lbnRUYXJnZXQoY29tcG9uZW50LmRhdGEgPyBjb21wb25lbnQuZGF0YSA6IGNvbXBvbmVudCk7XHJcbiAgICBjb25zdCBmb3VuZERvbUVsZW1lbnQ6IGFueSA9IHRoaXMuI3NlYXJjaE5vZGUoZWxlbWVudCk7XHJcblxyXG4gICAgZm9yIChsZXQgYXR0ciBvZiBhdHRyaWJ1dGVzKSB7Y29tcG9uZW50LmRhdGEudGFyZ2V0LnNldEF0dHJpYnV0ZShhdHRyLmtleSwgYXR0ci52YWx1ZSl9O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGNyZWF0ZUVsZW1DaGlsZChcclxuICAgIGNvbXBvbmVudDogYW55LCBcclxuICAgIGNvbmZpZzoge2NsYXNzPzogc3RyaW5nLCBjb250ZW50Pzogc3RyaW5nLCBub2RlOiBzdHJpbmd9LCBcclxuICAgIHJvb3REb21FbGVtZW50OiBIVE1MRGl2RWxlbWVudFxyXG4gICkge1xyXG4gICAgY29uc3QgcGFyZW50OiBhbnkgPSB0aGlzLmZpbmRDb21wb25lbnRUYXJnZXQoY29tcG9uZW50LmRhdGEpO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudChcclxuICAgICAgY29tcG9uZW50LmRhdGEudGFyZ2V0LCBjb25maWcuY2xhc3MhLCBjb25maWcuY29udGVudCEsIGNvbmZpZy5ub2RlLCBcclxuICAgICAgcm9vdERvbUVsZW1lbnRcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm1FbGVtQ29udGVudChjb21wb25lbnQ6IGFueSwgdHJhbnNmb3JtOiBGdW5jdGlvbikge1xyXG4gICAgY29uc3QgaW5pdGlhbENvbnRlbnQ6IHN0cmluZyA9IGNvbXBvbmVudC5kYXRhLmNvbnRlbnQhO1xyXG4gICAgbGV0IHJlc3VsdDogc3RyaW5nID0gaW5pdGlhbENvbnRlbnQ7XHJcblxyXG4gICAgY29uc3QgZWxlbWVudDogYW55ID0gdGhpcy5maW5kQ29tcG9uZW50VGFyZ2V0KGNvbXBvbmVudC5kYXRhKTtcclxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLiNzZWFyY2hOb2RlKGVsZW1lbnQpO1xyXG4gICAgXHJcbiAgICBpZiAoaW5pdGlhbENvbnRlbnQpIHtcclxuICAgICAgY29tcG9uZW50LmRhdGEuY29udGVudCA9ICF0cmFuc2Zvcm0oaW5pdGlhbENvbnRlbnQpID8gcmVzdWx0IDogdHJhbnNmb3JtKGluaXRpYWxDb250ZW50KTtcclxuICAgICAgcmVzdWx0ID0gY29tcG9uZW50LmRhdGEuY29udGVudCE7XHJcbiAgICB9OyBcclxuXHJcbiAgICBub2RlLmlubmVySFRNTCA9IHJlc3VsdDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZGVsZXRlQWxsQ2xhc3Nlc0NvbW1vbihmcm9tQ2xhc3NOYW1lOiBzdHJpbmcsIHdoaWNoOiBzdHJpbmcsIGNvbXBvbmVudHM6IGFueSkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7ZnJvbUNsYXNzTmFtZX1gKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoYCR7d2hpY2h9YCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBDb21tb24gfSBmcm9tIFwiLi9jb21tb25cIjtcclxuaW1wb3J0IHsgRGZyYXplQ2hpbGQgfSBmcm9tIFwiLi9jaGlsZFwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnRHcm91cCB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGZyYXplQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uIHtcclxuICBwdWJsaWMgY29tcG9uZW50OiBDb21wb25lbnRHcm91cDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb290RG9tRWxlbWVudDogSFRNTERpdkVsZW1lbnQpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmNvbXBvbmVudCA9IHtkYXRhOiB7fX07XHJcbiAgfVxyXG5cclxuICBiYXNlQ29uZmlnKGNvbmZpZzoge1xyXG4gICAgcGFyZW50PzogRWxlbWVudCB8IHN0cmluZywgY2xhc3M/OiBzdHJpbmcsIGNvbnRlbnQ/OiBzdHJpbmcsIG5vZGU6IHN0cmluZ1xyXG4gIH0pIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudChcclxuICAgICAgY29uZmlnLnBhcmVudCEsIGNvbmZpZy5jbGFzcyEsIGNvbmZpZy5jb250ZW50ISwgY29uZmlnLm5vZGUsIHRoaXMucm9vdERvbUVsZW1lbnQsIFxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmNvbXBvbmVudC5kYXRhID0gey4uLnJlc3VsdH07XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VBdHRyKGF0dHJpYnV0ZXM6IEFycmF5PHtrZXk6IHN0cmluZzsgdmFsdWU6IHN0cmluZ30+KSB7XHJcbiAgICBjb25zdCBhdHRycyA9ICF0aGlzLmNvbXBvbmVudC5kYXRhIS5hdHRyaWJ1dGVzISA/IFtdIDogdGhpcy5jb21wb25lbnQuZGF0YSEuYXR0cmlidXRlcyE7XHJcblxyXG4gICAgaWYgKGF0dHJpYnV0ZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50LmRhdGE/LnRhcmdldD8uc2V0QXR0cmlidXRlKGF0dHJpYnV0ZXNbMF0ua2V5LCBhdHRyaWJ1dGVzWzBdLnZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2hhbmdlRWxlbUF0dHIodGhpcy5jb21wb25lbnQsIGF0dHJpYnV0ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY29tcG9uZW50LmRhdGEhLmF0dHJpYnV0ZXMgPSBbLi4uYXR0cnMsIC4uLmF0dHJpYnV0ZXNdO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ2hpbGQoY29uZmlnOiB7Y2xhc3M/OiBzdHJpbmcsIGNvbnRlbnQ/OiBzdHJpbmcsIG5vZGU6IHN0cmluZ30pIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuY3JlYXRlRWxlbUNoaWxkKHRoaXMuY29tcG9uZW50LCBjb25maWcsIHRoaXMucm9vdERvbUVsZW1lbnQpO1xyXG4gICAgbGV0IGV4aXN0aW5nQ2hpbGRzOiBhbnkgPSBbXTtcclxuICAgIFxyXG4gICAgY29uc3Qge2RhdGF9ID0gdGhpcy5jb21wb25lbnQ7XHJcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmNoaWxkcmVuISAmJiBkYXRhLmNoaWxkcmVuIS5sZW5ndGggIT09IDApIHtleGlzdGluZ0NoaWxkcyA9IFsuLi5kYXRhLmNoaWxkcmVuIV19O1xyXG5cclxuICAgIHRoaXMuY29tcG9uZW50LmRhdGEhLmNoaWxkcmVuID0gWy4uLmV4aXN0aW5nQ2hpbGRzLCB7Li4ucmVzdWx0fV07XHJcbiAgICByZXR1cm4gbmV3IERmcmF6ZUNoaWxkKHJlc3VsdCwgdGhpcy5yb290RG9tRWxlbWVudCwgdGhpcy5jb21wb25lbnQpO1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtQ29udGVudCh0cmFuc2Zvcm06IEZ1bmN0aW9uKSB7XHJcbiAgICB0aGlzLnRyYW5zZm9ybUVsZW1Db250ZW50KHRoaXMuY29tcG9uZW50LCB0cmFuc2Zvcm0pO1xyXG4gIH1cclxufSIsImltcG9ydCB7IENvbW1vbiB9IGZyb20gXCIuL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBEZnJhemVDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBEb21Db25maWcgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERmcmF6ZUJhc2UgZXh0ZW5kcyBDb21tb24ge1xyXG4gIHB1YmxpYyBjb21wb25lbnRzITogQXJyYXk8Q29tcG9uZW50PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb290RG9tRWxlbWVudDogSFRNTERpdkVsZW1lbnQpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmNvbXBvbmVudHMgPSBbXTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUVsZW1lbnQobm9kZTogc3RyaW5nLCBjb25maWc6IHtwYXJlbnQ/OiBzdHJpbmcsIGNsYXNzPzogc3RyaW5nLCBjb250ZW50Pzogc3RyaW5nfSkge1xyXG4gICAgaWYgKG5vZGUubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGlmIChSZWZsZWN0Lm93bktleXMoY29uZmlnKS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoXHJcbiAgICAgICAgICBjb25maWcucGFyZW50ISwgY29uZmlnLmNsYXNzISwgY29uZmlnLmNvbnRlbnQhLCBub2RlLCB0aGlzLnJvb3REb21FbGVtZW50LCBcclxuICAgICAgICApO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ29tcG9uZW50KGNvbmZpZzogQ29tcG9uZW50KSB7XHJcbiAgICBjb25zdCBjb21wb25lbnRDbGFzcyA9IG5ldyBEZnJhemVDb21wb25lbnQodGhpcy5yb290RG9tRWxlbWVudCk7XHJcbiAgICB0aGlzLmNvbXBvbmVudHMucHVzaCh7bmFtZTogY29uZmlnLm5hbWUsIGNvbXBvbmVudDogT2JqZWN0LmFzc2lnbihjb21wb25lbnRDbGFzcy5jb21wb25lbnQpfSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbXBvbmVudENsYXNzO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlQWxsQ2xhc3Nlcyhmcm9tQ2xhc3NOYW1lOiBzdHJpbmcsIHdoaWNoOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZGVsZXRlQWxsQ2xhc3Nlc0NvbW1vbihmcm9tQ2xhc3NOYW1lLCB3aGljaCwgdGhpcy5jb21wb25lbnRzKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBEZnJhemVCYXNlIH0gZnJvbSBcIi4vbGliXCI7XHJcbmltcG9ydCB7IERmcmF6ZUNoaWxkIH0gZnJvbSBcIi4vbGliL2NoaWxkXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcGFuZWxDYXJkID0gKFxyXG4gIHBhbmVsOiBEZnJhemVDaGlsZCwgY29uZmlnOiB7dGl0bGU6IHN0cmluZywgaW1hZ2U6IHN0cmluZ30sIGluZGV4OiBudW1iZXIsIGJhc2U6IERmcmF6ZUJhc2VcclxuKSA9PiB7XHJcbiAgbGV0IGFjdGl2ZUNhcmQgPSAwO1xyXG5cclxuICBjb25zdCBjYXJkID0gcGFuZWwuY3JlYXRlQ2hpbGQoe25vZGU6ICdkaXYnLCBjbGFzczogJ3BhbmVsX19jYXJkJ30pO1xyXG4gIGNvbnN0IGNhcmRXcmFwID0gY2FyZC5jcmVhdGVDaGlsZCh7bm9kZTogJ2RpdicsIGNsYXNzOiAncGFuZWxfX2NhcmQtd3JhcCd9KTtcclxuXHJcbiAgY2FyZFdyYXAuY3JlYXRlQ2hpbGQoe25vZGU6ICdkaXYnLCBjbGFzczogJ3BhbmVsX19jYXJkLWxpbmUnfSk7XHJcbiAgY29uc3QgYmcgPSBjYXJkV3JhcC5jcmVhdGVDaGlsZCh7bm9kZTogJ2RpdicsIGNsYXNzOiAncGFuZWxfX2NhcmQtYmcnfSk7XHJcbiAgXHJcbiAgYmcuY3JlYXRlQ2hpbGQoe25vZGU6ICdoMicsIGNvbnRlbnQ6IGNvbmZpZy50aXRsZX0pO1xyXG4gIGNhcmQuY2hhbmdlQXR0cihbe2tleTogJ3N0eWxlJywgdmFsdWU6IGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtjb25maWcuaW1hZ2V9KWB9XSk7XHJcblxyXG4gIGNvbnN0IGNoZWNrQWxsID0gKCkgPT4ge1xyXG4gICAgaWYgKGFjdGl2ZUNhcmQgPT09IGluZGV4KSB7XHJcbiAgICAgIGJhc2UuZGVsZXRlQWxsQ2xhc3NlcygncGFuZWxfX2NhcmQnLCAncGFuZWxfX2NhcmQtYWN0aXZlJyk7XHJcbiAgICAgIGNhcmQuY2hhbmdlQXR0cihbe2tleTogJ2NsYXNzJywgdmFsdWU6IGAke2NhcmQuY2hpbGQuZGF0YT8uY2xhc3N9IGAgKyAncGFuZWxfX2NhcmQtYWN0aXZlJ31dKTtcclxuICAgIH1cclxuICB9XHJcbiAgY2hlY2tBbGwoKTtcclxuXHJcbiAgY2FyZC5jaGlsZC5kYXRhPy50YXJnZXQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgYWN0aXZlQ2FyZCA9IGluZGV4O1xyXG4gICAgY2hlY2tBbGwoKTtcclxuICB9KTtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vY29udGFpbmVyXCI7XHJcbmltcG9ydCB7IERmcmF6ZUJhc2UgfSBmcm9tIFwiLi9saWJcIjtcclxuXHJcbmNvbnN0IGJhc2UgPSBuZXcgRGZyYXplQmFzZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGZyYXplLXJvb3QnKSEpO1xyXG5cclxuQ29udGFpbmVyQ29tcG9uZW50KGJhc2UpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==