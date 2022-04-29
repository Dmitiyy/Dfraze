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
        this.changeElemAttr(this.child.data, attributes);
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
            createdDomElement.classList.add(classDomElement);
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
        return result;
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
}
const base = new DfrazeBase(document.querySelector('.dfraze-root'));
base.createElement('div', { class: 'wrap' });
base.createElement('h3', { parent: '.wrap', content: 'It is inside div' });
const firstComponent = base.createComponent({ name: 'second' });
firstComponent.baseConfig({ parent: '.wrap', content: 'hello', node: 'div' });
firstComponent.changeAttr([{ key: 'id', value: 'testID' }]);
firstComponent.transformContent((content) => content.toUpperCase());
const myChild = firstComponent.createChild({
    node: 'section', class: 'childSection', content: 'child'
});
myChild.changeAttr([{ key: 'id', value: 'asdf' }]);
myChild.transformContent(() => 'changed');
myChild.createChild({ node: 'p', content: '...child' });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sR0FBRyxjQUFjLENBQUMsV0FBVyxDQUFDO0lBQ3pDLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsT0FBTztDQUN6RCxDQUFDLENBQUM7QUFFSCxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakQsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRTFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnhqcy10YXNrcy8uL3NyYy9jaGlsZC50cyIsIndlYnBhY2s6Ly9yeGpzLXRhc2tzLy4vc3JjL2NvbW1vbi50cyIsIndlYnBhY2s6Ly9yeGpzLXRhc2tzLy4vc3JjL2NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9yeGpzLXRhc2tzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3J4anMtdGFza3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3J4anMtdGFza3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yeGpzLXRhc2tzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnhqcy10YXNrcy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb24gfSBmcm9tIFwiLi9jb21tb25cIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50Q2hpbGQsIENvbXBvbmVudEdyb3VwLCBDcmVhdGVkRWxlbWVudCB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGZyYXplQ2hpbGQgZXh0ZW5kcyBDb21tb24ge1xyXG4gIHByaXZhdGUgY2hpbGQ6IENvbXBvbmVudENoaWxkO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBtYWluQ29uZmlnOiBDcmVhdGVkRWxlbWVudCwgcHJpdmF0ZSByb290RG9tRWxlbWVudDogSFRNTERpdkVsZW1lbnQsXHJcbiAgICBwcml2YXRlIHBhcmVudENvbXBvbmVudDogQ29tcG9uZW50R3JvdXAgfCBDb21wb25lbnRDaGlsZFxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuY2hpbGQgPSB7ZGF0YTogey4uLnRoaXMubWFpbkNvbmZpZ319O1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlQXR0cihhdHRyaWJ1dGVzOiBBcnJheTx7a2V5OiBzdHJpbmc7IHZhbHVlOiBzdHJpbmd9Pikge1xyXG4gICAgY29uc3QgYXR0cnMgPSAhdGhpcy5jaGlsZC5kYXRhIS5hdHRyaWJ1dGVzISA/IFtdIDogdGhpcy5jaGlsZC5kYXRhIS5hdHRyaWJ1dGVzITtcclxuICAgIGNvbnN0IHJlc3VsdCA9IFsuLi5hdHRycywgLi4uYXR0cmlidXRlc107XHJcblxyXG4gICAgdGhpcy5jaGFuZ2VFbGVtQXR0cih0aGlzLmNoaWxkLmRhdGEsIGF0dHJpYnV0ZXMpO1xyXG4gICAgdGhpcy5jaGlsZC5kYXRhIS5hdHRyaWJ1dGVzID0gcmVzdWx0O1xyXG5cclxuICAgIHRoaXMuI2NoYW5nZUNoaWxkRGF0YSh7a2V5OiAnYXR0cmlidXRlcycsIHZhbHVlOiByZXN1bHR9KTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUNoaWxkKGNvbmZpZzoge2NsYXNzPzogc3RyaW5nLCBjb250ZW50Pzogc3RyaW5nLCBub2RlOiBzdHJpbmd9KSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmNyZWF0ZUVsZW1DaGlsZCh0aGlzLmNoaWxkLCBjb25maWcsIHRoaXMucm9vdERvbUVsZW1lbnQpO1xyXG4gICAgbGV0IGV4aXN0aW5nQ2hpbGRzOiBhbnkgPSBbXTtcclxuICAgIFxyXG4gICAgY29uc3Qge2RhdGF9ID0gdGhpcy5jaGlsZDtcclxuICAgIGlmIChkYXRhICYmIGRhdGEuY2hpbGRyZW4hICYmIGRhdGEuY2hpbGRyZW4hLmxlbmd0aCAhPT0gMCkge2V4aXN0aW5nQ2hpbGRzID0gWy4uLmRhdGEuY2hpbGRyZW4hXX07XHJcbiAgICBcclxuICAgIHRoaXMuY2hpbGQuZGF0YSEuY2hpbGRyZW4gPSBbLi4uZXhpc3RpbmdDaGlsZHMsIHsuLi5yZXN1bHR9XTtcclxuXHJcbiAgICB0aGlzLiNjaGFuZ2VDaGlsZERhdGEoe2tleTogJ2NoaWxkcmVuJywgdmFsdWU6IFsuLi5leGlzdGluZ0NoaWxkcywgey4uLnJlc3VsdH1dfSk7XHJcbiAgICByZXR1cm4gbmV3IERmcmF6ZUNoaWxkKHJlc3VsdCwgdGhpcy5yb290RG9tRWxlbWVudCwgdGhpcy5jaGlsZCk7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm1Db250ZW50KHRyYW5zZm9ybTogRnVuY3Rpb24pIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtRWxlbUNvbnRlbnQodGhpcy5jaGlsZCwgdHJhbnNmb3JtKTtcclxuICAgIHRoaXMuI2NoYW5nZUNoaWxkRGF0YSh7a2V5OiAnY29udGVudCcsIHZhbHVlOiByZXN1bHR9KTtcclxuICB9XHJcblxyXG4gICNjaGFuZ2VDaGlsZERhdGEoZGF0YToge2tleTogc3RyaW5nLCB2YWx1ZTogYW55fSkge1xyXG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLnBhcmVudENvbXBvbmVudC5kYXRhPy5jaGlsZHJlbiE7XHJcblxyXG4gICAgZm9yIChsZXQgaXRlbSBvZiBjaGlsZHJlbikge1xyXG4gICAgICBpZiAoaXRlbS50YXJnZXQgPT09IHRoaXMuY2hpbGQuZGF0YT8udGFyZ2V0KSB7UmVmbGVjdC5zZXQoaXRlbSwgZGF0YS5rZXksIGRhdGEudmFsdWUpfTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnRHcm91cEVsZW1lbnQsIENyZWF0ZWRFbGVtZW50IH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21tb24ge1xyXG4gIHByb3RlY3RlZCBjcmVhdGVEb21FbGVtZW50KFxyXG4gICAgcGFyZW50OiBFbGVtZW50IHwgc3RyaW5nLCBlbGVtQ2xhc3M6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBcclxuICAgIG5vZGU6IHN0cmluZywgcm9vdDogSFRNTERpdkVsZW1lbnQsXHJcbiAgKTogQ3JlYXRlZEVsZW1lbnQge1xyXG4gICAgbGV0IGZvdW5kRG9tRWxlbWVudDogYW55ID0gcGFyZW50O1xyXG4gICAgbGV0IGNsYXNzRG9tRWxlbWVudDogc3RyaW5nID0gJyc7XHJcbiAgICBjb25zdCBjcmVhdGVkRG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZSk7XHJcbiAgICBcclxuICAgIGlmICh0eXBlb2YgcGFyZW50ID09PSAnc3RyaW5nJykge1xyXG4gICAgICBmb3VuZERvbUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmVudCkhO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgaWYgKGVsZW1DbGFzcyAhPT0gdW5kZWZpbmVkKSB7Y2xhc3NEb21FbGVtZW50ID0gZWxlbUNsYXNzfTtcclxuICAgIGlmIChjb250ZW50KSB7Y3JlYXRlZERvbUVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50fTtcclxuXHJcbiAgICBpZiAoY2xhc3NEb21FbGVtZW50Lmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBjcmVhdGVkRG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzRG9tRWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgKGZvdW5kRG9tRWxlbWVudCEgfHwgcm9vdCkuYXBwZW5kKGNyZWF0ZWREb21FbGVtZW50KTtcclxuICAgIFxyXG4gICAgY29uc3QgcmVzdWx0ID0ge1xyXG4gICAgICBwYXJlbnQ6IGZvdW5kRG9tRWxlbWVudCEsIGNsYXNzOiBlbGVtQ2xhc3MsIGNvbnRlbnQ6IGNvbnRlbnQsIG5vZGU6IG5vZGUsIHRhcmdldDogY3JlYXRlZERvbUVsZW1lbnRcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBmaW5kQ29tcG9uZW50VGFyZ2V0KGNvbmZpZzogQ29tcG9uZW50R3JvdXBFbGVtZW50KSB7XHJcbiAgICBpZiAoY29uZmlnLmNsYXNzKSByZXR1cm4gYC4ke2NvbmZpZy5jbGFzc31gO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnN0IGNsYXNzRWxlbWVudCA9IGNvbmZpZy50YXJnZXQ/LmNsYXNzTGlzdDtcclxuICAgICAgaWYgKGNsYXNzRWxlbWVudCAmJiBjbGFzc0VsZW1lbnQubGVuZ3RoICE9PSAwKSByZXR1cm4gY2xhc3NFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbmZpZy50YXJnZXQ7XHJcbiAgfVxyXG5cclxuICAjc2VhcmNoTm9kZSA9IChlbGVtZW50OiBhbnkpID0+IHtcclxuICAgIHJldHVybiB0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2VsZW1lbnR9YCkgOiBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGNoYW5nZUVsZW1BdHRyKGNvbXBvbmVudDogYW55LCBhdHRyaWJ1dGVzOiBBcnJheTx7a2V5OiBzdHJpbmc7IHZhbHVlOiBzdHJpbmd9Pikge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZmluZENvbXBvbmVudFRhcmdldChjb21wb25lbnQuZGF0YSA/IGNvbXBvbmVudC5kYXRhIDogY29tcG9uZW50KTtcclxuICAgIGNvbnN0IGZvdW5kRG9tRWxlbWVudDogYW55ID0gdGhpcy4jc2VhcmNoTm9kZShlbGVtZW50KTtcclxuXHJcbiAgICBpZiAoZm91bmREb21FbGVtZW50KSB7XHJcbiAgICAgIGZvciAobGV0IGF0dHIgb2YgYXR0cmlidXRlcykge2ZvdW5kRG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ci5rZXksIGF0dHIudmFsdWUpfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBjcmVhdGVFbGVtQ2hpbGQoXHJcbiAgICBjb21wb25lbnQ6IGFueSwgXHJcbiAgICBjb25maWc6IHtjbGFzcz86IHN0cmluZywgY29udGVudD86IHN0cmluZywgbm9kZTogc3RyaW5nfSwgXHJcbiAgICByb290RG9tRWxlbWVudDogSFRNTERpdkVsZW1lbnRcclxuICApIHtcclxuICAgIGNvbnN0IHBhcmVudDogYW55ID0gdGhpcy5maW5kQ29tcG9uZW50VGFyZ2V0KGNvbXBvbmVudC5kYXRhKTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoXHJcbiAgICAgIHBhcmVudCwgY29uZmlnLmNsYXNzISwgY29uZmlnLmNvbnRlbnQhLCBjb25maWcubm9kZSwgXHJcbiAgICAgIHJvb3REb21FbGVtZW50XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtRWxlbUNvbnRlbnQoY29tcG9uZW50OiBhbnksIHRyYW5zZm9ybTogRnVuY3Rpb24pIHtcclxuICAgIGNvbnN0IGluaXRpYWxDb250ZW50OiBzdHJpbmcgPSBjb21wb25lbnQuZGF0YS5jb250ZW50ITtcclxuICAgIGxldCByZXN1bHQ6IHN0cmluZyA9IGluaXRpYWxDb250ZW50O1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnQ6IGFueSA9IHRoaXMuZmluZENvbXBvbmVudFRhcmdldChjb21wb25lbnQuZGF0YSk7XHJcbiAgICBjb25zdCBub2RlID0gdGhpcy4jc2VhcmNoTm9kZShlbGVtZW50KTtcclxuICAgIFxyXG4gICAgaWYgKGluaXRpYWxDb250ZW50KSB7XHJcbiAgICAgIGNvbXBvbmVudC5kYXRhLmNvbnRlbnQgPSAhdHJhbnNmb3JtKGluaXRpYWxDb250ZW50KSA/IHJlc3VsdCA6IHRyYW5zZm9ybShpbml0aWFsQ29udGVudCk7XHJcbiAgICAgIHJlc3VsdCA9IGNvbXBvbmVudC5kYXRhLmNvbnRlbnQhO1xyXG4gICAgfTsgXHJcblxyXG4gICAgbm9kZS5pbm5lckhUTUwgPSByZXN1bHQ7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufSIsImltcG9ydCB7IENvbW1vbiB9IGZyb20gXCIuL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBEZnJhemVDaGlsZCB9IGZyb20gXCIuL2NoaWxkXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudEdyb3VwIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEZnJhemVDb21wb25lbnQgZXh0ZW5kcyBDb21tb24ge1xyXG4gIHB1YmxpYyBjb21wb25lbnQ6IENvbXBvbmVudEdyb3VwO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvb3REb21FbGVtZW50OiBIVE1MRGl2RWxlbWVudCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuY29tcG9uZW50ID0ge2RhdGE6IHt9fTtcclxuICB9XHJcblxyXG4gIGJhc2VDb25maWcoY29uZmlnOiB7XHJcbiAgICBwYXJlbnQ/OiBFbGVtZW50IHwgc3RyaW5nLCBjbGFzcz86IHN0cmluZywgY29udGVudD86IHN0cmluZywgbm9kZTogc3RyaW5nXHJcbiAgfSkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KFxyXG4gICAgICBjb25maWcucGFyZW50ISwgY29uZmlnLmNsYXNzISwgY29uZmlnLmNvbnRlbnQhLCBjb25maWcubm9kZSwgdGhpcy5yb290RG9tRWxlbWVudCwgXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuY29tcG9uZW50LmRhdGEgPSB7Li4ucmVzdWx0fTtcclxuICB9XHJcblxyXG4gIGNoYW5nZUF0dHIoYXR0cmlidXRlczogQXJyYXk8e2tleTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nfT4pIHtcclxuICAgIGNvbnN0IGF0dHJzID0gIXRoaXMuY29tcG9uZW50LmRhdGEhLmF0dHJpYnV0ZXMhID8gW10gOiB0aGlzLmNvbXBvbmVudC5kYXRhIS5hdHRyaWJ1dGVzITtcclxuXHJcbiAgICB0aGlzLmNoYW5nZUVsZW1BdHRyKHRoaXMuY29tcG9uZW50LCBhdHRyaWJ1dGVzKTtcclxuICAgIHRoaXMuY29tcG9uZW50LmRhdGEhLmF0dHJpYnV0ZXMgPSBbLi4uYXR0cnMsIC4uLmF0dHJpYnV0ZXNdO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ2hpbGQoY29uZmlnOiB7Y2xhc3M/OiBzdHJpbmcsIGNvbnRlbnQ/OiBzdHJpbmcsIG5vZGU6IHN0cmluZ30pIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuY3JlYXRlRWxlbUNoaWxkKHRoaXMuY29tcG9uZW50LCBjb25maWcsIHRoaXMucm9vdERvbUVsZW1lbnQpO1xyXG4gICAgbGV0IGV4aXN0aW5nQ2hpbGRzOiBhbnkgPSBbXTtcclxuICAgIFxyXG4gICAgY29uc3Qge2RhdGF9ID0gdGhpcy5jb21wb25lbnQ7XHJcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmNoaWxkcmVuISAmJiBkYXRhLmNoaWxkcmVuIS5sZW5ndGggIT09IDApIHtleGlzdGluZ0NoaWxkcyA9IFsuLi5kYXRhLmNoaWxkcmVuIV19O1xyXG5cclxuICAgIHRoaXMuY29tcG9uZW50LmRhdGEhLmNoaWxkcmVuID0gWy4uLmV4aXN0aW5nQ2hpbGRzLCB7Li4ucmVzdWx0fV07XHJcbiAgICByZXR1cm4gbmV3IERmcmF6ZUNoaWxkKHJlc3VsdCwgdGhpcy5yb290RG9tRWxlbWVudCwgdGhpcy5jb21wb25lbnQpO1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtQ29udGVudCh0cmFuc2Zvcm06IEZ1bmN0aW9uKSB7XHJcbiAgICB0aGlzLnRyYW5zZm9ybUVsZW1Db250ZW50KHRoaXMuY29tcG9uZW50LCB0cmFuc2Zvcm0pO1xyXG4gIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgQ29tbW9uIH0gZnJvbSBcIi4vY29tbW9uXCI7XHJcbmltcG9ydCB7IERmcmF6ZUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIERvbUNvbmZpZyB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGZyYXplQmFzZSBleHRlbmRzIENvbW1vbiB7XHJcbiAgcHVibGljIGNvbXBvbmVudHMhOiBBcnJheTxDb21wb25lbnQ+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvb3REb21FbGVtZW50OiBIVE1MRGl2RWxlbWVudCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuY29tcG9uZW50cyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRWxlbWVudChub2RlOiBzdHJpbmcsIGNvbmZpZzogRG9tQ29uZmlnKSB7XHJcbiAgICBpZiAobm9kZS5sZW5ndGggIT09IDApIHtcclxuICAgICAgaWYgKFJlZmxlY3Qub3duS2V5cyhjb25maWcpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlRG9tRWxlbWVudChcclxuICAgICAgICAgIGNvbmZpZy5wYXJlbnQhLCBjb25maWcuY2xhc3MhLCBjb25maWcuY29udGVudCEsIG5vZGUsIHRoaXMucm9vdERvbUVsZW1lbnQsIFxyXG4gICAgICAgICk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVDb21wb25lbnQoY29uZmlnOiBDb21wb25lbnQpIHtcclxuICAgIGNvbnN0IGNvbXBvbmVudENsYXNzID0gbmV3IERmcmF6ZUNvbXBvbmVudCh0aGlzLnJvb3REb21FbGVtZW50KTtcclxuICAgIHRoaXMuY29tcG9uZW50cy5wdXNoKHtuYW1lOiBjb25maWcubmFtZSwgY29tcG9uZW50OiBPYmplY3QuYXNzaWduKGNvbXBvbmVudENsYXNzLmNvbXBvbmVudCl9KTtcclxuXHJcbiAgICByZXR1cm4gY29tcG9uZW50Q2xhc3M7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBiYXNlID0gbmV3IERmcmF6ZUJhc2UoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRmcmF6ZS1yb290JykhKTtcclxuXHJcbmJhc2UuY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnd3JhcCd9KTtcclxuYmFzZS5jcmVhdGVFbGVtZW50KCdoMycsIHtwYXJlbnQ6ICcud3JhcCcsIGNvbnRlbnQ6ICdJdCBpcyBpbnNpZGUgZGl2J30pO1xyXG5cclxuY29uc3QgZmlyc3RDb21wb25lbnQgPSBiYXNlLmNyZWF0ZUNvbXBvbmVudCh7bmFtZTogJ3NlY29uZCd9KTtcclxuZmlyc3RDb21wb25lbnQuYmFzZUNvbmZpZyh7cGFyZW50OiAnLndyYXAnLCBjb250ZW50OiAnaGVsbG8nLCBub2RlOiAnZGl2J30pO1xyXG5cclxuZmlyc3RDb21wb25lbnQuY2hhbmdlQXR0cihbe2tleTogJ2lkJywgdmFsdWU6ICd0ZXN0SUQnfV0pO1xyXG5maXJzdENvbXBvbmVudC50cmFuc2Zvcm1Db250ZW50KChjb250ZW50OiBzdHJpbmcpID0+IGNvbnRlbnQudG9VcHBlckNhc2UoKSk7XHJcblxyXG5jb25zdCBteUNoaWxkID0gZmlyc3RDb21wb25lbnQuY3JlYXRlQ2hpbGQoe1xyXG4gIG5vZGU6ICdzZWN0aW9uJywgY2xhc3M6ICdjaGlsZFNlY3Rpb24nLCBjb250ZW50OiAnY2hpbGQnXHJcbn0pO1xyXG5cclxubXlDaGlsZC5jaGFuZ2VBdHRyKFt7a2V5OiAnaWQnLCB2YWx1ZTogJ2FzZGYnfV0pO1xyXG5teUNoaWxkLnRyYW5zZm9ybUNvbnRlbnQoKCkgPT4gJ2NoYW5nZWQnKTtcclxuXHJcbm15Q2hpbGQuY3JlYXRlQ2hpbGQoe25vZGU6ICdwJywgY29udGVudDogJy4uLmNoaWxkJ30pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==