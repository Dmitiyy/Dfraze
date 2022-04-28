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
    constructor(mainConfig, rootDomElement) {
        super();
        this.mainConfig = mainConfig;
        this.rootDomElement = rootDomElement;
        this.child = { data: Object.assign({}, this.mainConfig) };
    }
    changeAttr(attributes) {
        this.changeElemAttr(this.child.data, attributes);
        this.child.data.attributes = [...attributes];
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
        return new DfrazeChild(result, this.rootDomElement);
    }
    transformContent(transform) {
        this.transformElemContent(this.child, transform);
        this.changeChildData();
    }
    render() {
        // console.log('Child: ', this.child.data);
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
    }
    changeChildData(targetName, childData) {
        //TODO 1. Get all components 
        //TODO 2. Find parent component
        //TODO 3. Find a certain child in the parent component
        //TODO 4. Change a child data there
        //TODO 5. Define new components array 
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
        this.component.data.attributes = [...attributes];
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
        return new _child__WEBPACK_IMPORTED_MODULE_1__.DfrazeChild(result, this.rootDomElement);
    }
    transformContent(transform) {
        this.transformElemContent(this.component, transform);
    }
    render() {
        console.log('Component: ', this.component);
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
firstComponent.render();
const myChild = firstComponent.createChild({
    node: 'section', class: 'childSection', content: 'child'
});
myChild.changeAttr([{ key: 'id', value: 'asdf' }]);
myChild.transformContent(() => 'changed');
myChild.createChild({ node: 'p', content: '...child' });
myChild.render();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUMsQ0FBQztBQUMxRCxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFlLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBRTVFLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUV4QixNQUFNLE9BQU8sR0FBRyxjQUFjLENBQUMsV0FBVyxDQUFDO0lBQ3pDLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsT0FBTztDQUN6RCxDQUFDLENBQUM7QUFFSCxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakQsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRTFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDO0FBRXRELE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3J4anMtdGFza3MvLi9zcmMvY2hpbGQudHMiLCJ3ZWJwYWNrOi8vcnhqcy10YXNrcy8uL3NyYy9jb21tb24udHMiLCJ3ZWJwYWNrOi8vcnhqcy10YXNrcy8uL3NyYy9jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vcnhqcy10YXNrcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yeGpzLXRhc2tzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yeGpzLXRhc2tzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcnhqcy10YXNrcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3J4anMtdGFza3MvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uIH0gZnJvbSBcIi4vY29tbW9uXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudENoaWxkLCBDcmVhdGVkRWxlbWVudCB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGZyYXplQ2hpbGQgZXh0ZW5kcyBDb21tb24ge1xyXG4gIHByaXZhdGUgY2hpbGQ6IENvbXBvbmVudENoaWxkO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFpbkNvbmZpZzogQ3JlYXRlZEVsZW1lbnQsIHByaXZhdGUgcm9vdERvbUVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50KSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5jaGlsZCA9IHtkYXRhOiB7Li4udGhpcy5tYWluQ29uZmlnfX07XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VBdHRyKGF0dHJpYnV0ZXM6IEFycmF5PHtrZXk6IHN0cmluZzsgdmFsdWU6IHN0cmluZ30+KSB7XHJcbiAgICB0aGlzLmNoYW5nZUVsZW1BdHRyKHRoaXMuY2hpbGQuZGF0YSwgYXR0cmlidXRlcyk7XHJcbiAgICB0aGlzLmNoaWxkLmRhdGEhLmF0dHJpYnV0ZXMgPSBbLi4uYXR0cmlidXRlc107XHJcbiAgfVxyXG5cclxuICBjcmVhdGVDaGlsZChjb25maWc6IHtjbGFzcz86IHN0cmluZywgY29udGVudD86IHN0cmluZywgbm9kZTogc3RyaW5nfSkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5jcmVhdGVFbGVtQ2hpbGQodGhpcy5jaGlsZCwgY29uZmlnLCB0aGlzLnJvb3REb21FbGVtZW50KTtcclxuICAgIGxldCBleGlzdGluZ0NoaWxkczogYW55ID0gW107XHJcbiAgICBcclxuICAgIGNvbnN0IHtkYXRhfSA9IHRoaXMuY2hpbGQ7XHJcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmNoaWxkcmVuISAmJiBkYXRhLmNoaWxkcmVuIS5sZW5ndGggIT09IDApIHtleGlzdGluZ0NoaWxkcyA9IFsuLi5kYXRhLmNoaWxkcmVuIV19O1xyXG4gICAgXHJcbiAgICB0aGlzLmNoaWxkLmRhdGEhLmNoaWxkcmVuID0gWy4uLmV4aXN0aW5nQ2hpbGRzLCB7Li4ucmVzdWx0fV07XHJcbiAgICByZXR1cm4gbmV3IERmcmF6ZUNoaWxkKHJlc3VsdCwgdGhpcy5yb290RG9tRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm1Db250ZW50KHRyYW5zZm9ybTogRnVuY3Rpb24pIHtcclxuICAgIHRoaXMudHJhbnNmb3JtRWxlbUNvbnRlbnQodGhpcy5jaGlsZCwgdHJhbnNmb3JtKTtcclxuICAgIHRoaXMuY2hhbmdlQ2hpbGREYXRhKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ0NoaWxkOiAnLCB0aGlzLmNoaWxkLmRhdGEpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IERmcmF6ZUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnRHcm91cEVsZW1lbnQsIENyZWF0ZWRFbGVtZW50IH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21tb24ge1xyXG4gIHByb3RlY3RlZCBjcmVhdGVEb21FbGVtZW50KFxyXG4gICAgcGFyZW50OiBFbGVtZW50IHwgc3RyaW5nLCBlbGVtQ2xhc3M6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBcclxuICAgIG5vZGU6IHN0cmluZywgcm9vdDogSFRNTERpdkVsZW1lbnQsXHJcbiAgKTogQ3JlYXRlZEVsZW1lbnQge1xyXG4gICAgbGV0IGZvdW5kRG9tRWxlbWVudDogYW55ID0gcGFyZW50O1xyXG4gICAgbGV0IGNsYXNzRG9tRWxlbWVudDogc3RyaW5nID0gJyc7XHJcbiAgICBjb25zdCBjcmVhdGVkRG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZSk7XHJcbiAgICBcclxuICAgIGlmICh0eXBlb2YgcGFyZW50ID09PSAnc3RyaW5nJykge1xyXG4gICAgICBmb3VuZERvbUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmVudCkhO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgaWYgKGVsZW1DbGFzcyAhPT0gdW5kZWZpbmVkKSB7Y2xhc3NEb21FbGVtZW50ID0gZWxlbUNsYXNzfTtcclxuICAgIGlmIChjb250ZW50KSB7Y3JlYXRlZERvbUVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50fTtcclxuXHJcbiAgICBpZiAoY2xhc3NEb21FbGVtZW50Lmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBjcmVhdGVkRG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzRG9tRWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgKGZvdW5kRG9tRWxlbWVudCEgfHwgcm9vdCkuYXBwZW5kKGNyZWF0ZWREb21FbGVtZW50KTtcclxuICAgIFxyXG4gICAgY29uc3QgcmVzdWx0ID0ge1xyXG4gICAgICBwYXJlbnQ6IGZvdW5kRG9tRWxlbWVudCEsIGNsYXNzOiBlbGVtQ2xhc3MsIGNvbnRlbnQ6IGNvbnRlbnQsIG5vZGU6IG5vZGUsIHRhcmdldDogY3JlYXRlZERvbUVsZW1lbnRcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBmaW5kQ29tcG9uZW50VGFyZ2V0KGNvbmZpZzogQ29tcG9uZW50R3JvdXBFbGVtZW50KSB7XHJcbiAgICBpZiAoY29uZmlnLmNsYXNzKSByZXR1cm4gYC4ke2NvbmZpZy5jbGFzc31gO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnN0IGNsYXNzRWxlbWVudCA9IGNvbmZpZy50YXJnZXQ/LmNsYXNzTGlzdDtcclxuICAgICAgaWYgKGNsYXNzRWxlbWVudCAmJiBjbGFzc0VsZW1lbnQubGVuZ3RoICE9PSAwKSByZXR1cm4gY2xhc3NFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbmZpZy50YXJnZXQ7XHJcbiAgfVxyXG5cclxuICAjc2VhcmNoTm9kZSA9IChlbGVtZW50OiBhbnkpID0+IHtcclxuICAgIHJldHVybiB0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2VsZW1lbnR9YCkgOiBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGNoYW5nZUVsZW1BdHRyKGNvbXBvbmVudDogYW55LCBhdHRyaWJ1dGVzOiBBcnJheTx7a2V5OiBzdHJpbmc7IHZhbHVlOiBzdHJpbmd9Pikge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZmluZENvbXBvbmVudFRhcmdldChjb21wb25lbnQuZGF0YSA/IGNvbXBvbmVudC5kYXRhIDogY29tcG9uZW50KTtcclxuICAgIGNvbnN0IGZvdW5kRG9tRWxlbWVudDogYW55ID0gdGhpcy4jc2VhcmNoTm9kZShlbGVtZW50KTtcclxuXHJcbiAgICBpZiAoZm91bmREb21FbGVtZW50KSB7XHJcbiAgICAgIGZvciAobGV0IGF0dHIgb2YgYXR0cmlidXRlcykge2ZvdW5kRG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ci5rZXksIGF0dHIudmFsdWUpfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBjcmVhdGVFbGVtQ2hpbGQoXHJcbiAgICBjb21wb25lbnQ6IGFueSwgXHJcbiAgICBjb25maWc6IHtjbGFzcz86IHN0cmluZywgY29udGVudD86IHN0cmluZywgbm9kZTogc3RyaW5nfSwgXHJcbiAgICByb290RG9tRWxlbWVudDogSFRNTERpdkVsZW1lbnRcclxuICApIHtcclxuICAgIGNvbnN0IHBhcmVudDogYW55ID0gdGhpcy5maW5kQ29tcG9uZW50VGFyZ2V0KGNvbXBvbmVudC5kYXRhKTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoXHJcbiAgICAgIHBhcmVudCwgY29uZmlnLmNsYXNzISwgY29uZmlnLmNvbnRlbnQhLCBjb25maWcubm9kZSwgXHJcbiAgICAgIHJvb3REb21FbGVtZW50XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtRWxlbUNvbnRlbnQoY29tcG9uZW50OiBhbnksIHRyYW5zZm9ybTogRnVuY3Rpb24pIHtcclxuICAgIGNvbnN0IGluaXRpYWxDb250ZW50OiBzdHJpbmcgPSBjb21wb25lbnQuZGF0YS5jb250ZW50ITtcclxuICAgIGxldCByZXN1bHQ6IHN0cmluZyA9IGluaXRpYWxDb250ZW50O1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnQ6IGFueSA9IHRoaXMuZmluZENvbXBvbmVudFRhcmdldChjb21wb25lbnQuZGF0YSk7XHJcbiAgICBjb25zdCBub2RlID0gdGhpcy4jc2VhcmNoTm9kZShlbGVtZW50KTtcclxuICAgIFxyXG4gICAgaWYgKGluaXRpYWxDb250ZW50KSB7XHJcbiAgICAgIGNvbXBvbmVudC5kYXRhLmNvbnRlbnQgPSAhdHJhbnNmb3JtKGluaXRpYWxDb250ZW50KSA/IHJlc3VsdCA6IHRyYW5zZm9ybShpbml0aWFsQ29udGVudCk7XHJcbiAgICAgIHJlc3VsdCA9IGNvbXBvbmVudC5kYXRhLmNvbnRlbnQhO1xyXG4gICAgfTsgXHJcblxyXG4gICAgbm9kZS5pbm5lckhUTUwgPSByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgY2hhbmdlQ2hpbGREYXRhKHRhcmdldE5hbWU/OiBzdHJpbmcsIGNoaWxkRGF0YT86IGFueSkge1xyXG4gICAgLy9UT0RPIDEuIEdldCBhbGwgY29tcG9uZW50cyBcclxuICAgIC8vVE9ETyAyLiBGaW5kIHBhcmVudCBjb21wb25lbnRcclxuICAgIC8vVE9ETyAzLiBGaW5kIGEgY2VydGFpbiBjaGlsZCBpbiB0aGUgcGFyZW50IGNvbXBvbmVudFxyXG4gICAgLy9UT0RPIDQuIENoYW5nZSBhIGNoaWxkIGRhdGEgdGhlcmVcclxuICAgIC8vVE9ETyA1LiBEZWZpbmUgbmV3IGNvbXBvbmVudHMgYXJyYXkgXHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgQ29tbW9uIH0gZnJvbSBcIi4vY29tbW9uXCI7XHJcbmltcG9ydCB7IERmcmF6ZUNoaWxkIH0gZnJvbSBcIi4vY2hpbGRcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50R3JvdXAgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERmcmF6ZUNvbXBvbmVudCBleHRlbmRzIENvbW1vbiB7XHJcbiAgcHVibGljIGNvbXBvbmVudDogQ29tcG9uZW50R3JvdXA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm9vdERvbUVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50KSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5jb21wb25lbnQgPSB7ZGF0YToge319O1xyXG4gIH1cclxuXHJcbiAgYmFzZUNvbmZpZyhjb25maWc6IHtcclxuICAgIHBhcmVudD86IEVsZW1lbnQgfCBzdHJpbmcsIGNsYXNzPzogc3RyaW5nLCBjb250ZW50Pzogc3RyaW5nLCBub2RlOiBzdHJpbmdcclxuICB9KSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoXHJcbiAgICAgIGNvbmZpZy5wYXJlbnQhLCBjb25maWcuY2xhc3MhLCBjb25maWcuY29udGVudCEsIGNvbmZpZy5ub2RlLCB0aGlzLnJvb3REb21FbGVtZW50LCBcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5jb21wb25lbnQuZGF0YSA9IHsuLi5yZXN1bHR9O1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlQXR0cihhdHRyaWJ1dGVzOiBBcnJheTx7a2V5OiBzdHJpbmc7IHZhbHVlOiBzdHJpbmd9Pikge1xyXG4gICAgdGhpcy5jaGFuZ2VFbGVtQXR0cih0aGlzLmNvbXBvbmVudCwgYXR0cmlidXRlcyk7XHJcbiAgICB0aGlzLmNvbXBvbmVudC5kYXRhIS5hdHRyaWJ1dGVzID0gWy4uLmF0dHJpYnV0ZXNdO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ2hpbGQoY29uZmlnOiB7Y2xhc3M/OiBzdHJpbmcsIGNvbnRlbnQ/OiBzdHJpbmcsIG5vZGU6IHN0cmluZ30pIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuY3JlYXRlRWxlbUNoaWxkKHRoaXMuY29tcG9uZW50LCBjb25maWcsIHRoaXMucm9vdERvbUVsZW1lbnQpO1xyXG4gICAgbGV0IGV4aXN0aW5nQ2hpbGRzOiBhbnkgPSBbXTtcclxuICAgIFxyXG4gICAgY29uc3Qge2RhdGF9ID0gdGhpcy5jb21wb25lbnQ7XHJcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmNoaWxkcmVuISAmJiBkYXRhLmNoaWxkcmVuIS5sZW5ndGggIT09IDApIHtleGlzdGluZ0NoaWxkcyA9IFsuLi5kYXRhLmNoaWxkcmVuIV19O1xyXG5cclxuICAgIHRoaXMuY29tcG9uZW50LmRhdGEhLmNoaWxkcmVuID0gWy4uLmV4aXN0aW5nQ2hpbGRzLCB7Li4ucmVzdWx0fV07XHJcbiAgICByZXR1cm4gbmV3IERmcmF6ZUNoaWxkKHJlc3VsdCwgdGhpcy5yb290RG9tRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm1Db250ZW50KHRyYW5zZm9ybTogRnVuY3Rpb24pIHtcclxuICAgIHRoaXMudHJhbnNmb3JtRWxlbUNvbnRlbnQodGhpcy5jb21wb25lbnQsIHRyYW5zZm9ybSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnQ29tcG9uZW50OiAnLCB0aGlzLmNvbXBvbmVudCk7XHJcbiAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBDb21tb24gfSBmcm9tIFwiLi9jb21tb25cIjtcclxuaW1wb3J0IHsgRGZyYXplQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgRG9tQ29uZmlnIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEZnJhemVCYXNlIGV4dGVuZHMgQ29tbW9uIHtcclxuICBwdWJsaWMgY29tcG9uZW50cyE6IEFycmF5PENvbXBvbmVudD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm9vdERvbUVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50KSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5jb21wb25lbnRzID0gW107XHJcbiAgfVxyXG5cclxuICBjcmVhdGVFbGVtZW50KG5vZGU6IHN0cmluZywgY29uZmlnOiBEb21Db25maWcpIHtcclxuICAgIGlmIChub2RlLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBpZiAoUmVmbGVjdC5vd25LZXlzKGNvbmZpZykubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVEb21FbGVtZW50KFxyXG4gICAgICAgICAgY29uZmlnLnBhcmVudCEsIGNvbmZpZy5jbGFzcyEsIGNvbmZpZy5jb250ZW50ISwgbm9kZSwgdGhpcy5yb290RG9tRWxlbWVudCwgXHJcbiAgICAgICAgKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZUNvbXBvbmVudChjb25maWc6IENvbXBvbmVudCkge1xyXG4gICAgY29uc3QgY29tcG9uZW50Q2xhc3MgPSBuZXcgRGZyYXplQ29tcG9uZW50KHRoaXMucm9vdERvbUVsZW1lbnQpO1xyXG4gICAgdGhpcy5jb21wb25lbnRzLnB1c2goe25hbWU6IGNvbmZpZy5uYW1lLCBjb21wb25lbnQ6IE9iamVjdC5hc3NpZ24oY29tcG9uZW50Q2xhc3MuY29tcG9uZW50KX0pO1xyXG5cclxuICAgIHJldHVybiBjb21wb25lbnRDbGFzcztcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuY29tcG9uZW50cyk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBiYXNlID0gbmV3IERmcmF6ZUJhc2UoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRmcmF6ZS1yb290JykhKTtcclxuXHJcbmJhc2UuY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnd3JhcCd9KTtcclxuYmFzZS5jcmVhdGVFbGVtZW50KCdoMycsIHtwYXJlbnQ6ICcud3JhcCcsIGNvbnRlbnQ6ICdJdCBpcyBpbnNpZGUgZGl2J30pO1xyXG5cclxuY29uc3QgZmlyc3RDb21wb25lbnQgPSBiYXNlLmNyZWF0ZUNvbXBvbmVudCh7bmFtZTogJ3NlY29uZCd9KTtcclxuZmlyc3RDb21wb25lbnQuYmFzZUNvbmZpZyh7cGFyZW50OiAnLndyYXAnLCBjb250ZW50OiAnaGVsbG8nLCBub2RlOiAnZGl2J30pO1xyXG5cclxuZmlyc3RDb21wb25lbnQuY2hhbmdlQXR0cihbe2tleTogJ2lkJywgdmFsdWU6ICd0ZXN0SUQnfV0pO1xyXG5maXJzdENvbXBvbmVudC50cmFuc2Zvcm1Db250ZW50KChjb250ZW50OiBzdHJpbmcpID0+IGNvbnRlbnQudG9VcHBlckNhc2UoKSk7XHJcblxyXG5maXJzdENvbXBvbmVudC5yZW5kZXIoKTtcclxuXHJcbmNvbnN0IG15Q2hpbGQgPSBmaXJzdENvbXBvbmVudC5jcmVhdGVDaGlsZCh7XHJcbiAgbm9kZTogJ3NlY3Rpb24nLCBjbGFzczogJ2NoaWxkU2VjdGlvbicsIGNvbnRlbnQ6ICdjaGlsZCdcclxufSk7XHJcblxyXG5teUNoaWxkLmNoYW5nZUF0dHIoW3trZXk6ICdpZCcsIHZhbHVlOiAnYXNkZid9XSk7XHJcbm15Q2hpbGQudHJhbnNmb3JtQ29udGVudCgoKSA9PiAnY2hhbmdlZCcpO1xyXG5cclxubXlDaGlsZC5jcmVhdGVDaGlsZCh7bm9kZTogJ3AnLCBjb250ZW50OiAnLi4uY2hpbGQnfSk7XHJcblxyXG5teUNoaWxkLnJlbmRlcigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==