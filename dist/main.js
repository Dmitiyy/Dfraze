/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common.ts":
/*!***********************!*\
  !*** ./src/common.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Common": () => (/* binding */ Common)
/* harmony export */ });
class Common {
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
}


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
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DfrazeComponent_searchNode;

class DfrazeComponent extends _common__WEBPACK_IMPORTED_MODULE_0__.Common {
    constructor(rootDomElement) {
        super();
        this.rootDomElement = rootDomElement;
        _DfrazeComponent_searchNode.set(this, (element) => {
            return typeof element === 'string' ? document.querySelector(`.${element}`) : element;
        });
        this.component = { data: {} };
    }
    baseConfig(config) {
        const result = this.createDomElement(config.parent, config.class, config.content, config.node, this.rootDomElement);
        this.component.data = Object.assign({}, result);
    }
    changeAttr(attributes) {
        const element = this.findComponentTarget(this.component.data);
        const foundDomElement = __classPrivateFieldGet(this, _DfrazeComponent_searchNode, "f").call(this, element);
        if (foundDomElement) {
            for (let attr of attributes) {
                foundDomElement.setAttribute(attr.key, attr.value);
            }
            ;
        }
    }
    createChild(config) {
        const parent = this.findComponentTarget(this.component.data);
        this.createDomElement(parent, config.class, config.content, config.node, this.rootDomElement);
    }
    transformContent(transform) {
        const initialContent = this.component.data.content;
        let result = initialContent;
        const element = this.findComponentTarget(this.component.data);
        const node = __classPrivateFieldGet(this, _DfrazeComponent_searchNode, "f").call(this, element);
        if (initialContent) {
            this.component.data.content = !transform(initialContent) ? result : transform(initialContent);
            result = this.component.data.content;
        }
        ;
        node.innerHTML = result;
    }
}
_DfrazeComponent_searchNode = new WeakMap();


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
base.createElement('h2', {
    parent: document.querySelector('.dfraze-root'),
    class: 'test-class',
    content: 'I love programming'
});
base.createElement('div', { class: 'wrap' });
base.createElement('h3', { parent: '.wrap', content: 'It is inside div' });
const firstComponent = base.createComponent({ name: 'second' });
firstComponent.baseConfig({ parent: '.wrap', content: 'hello', node: 'div' });
firstComponent.changeAttr([{ key: 'id', value: 'testID' }]);
firstComponent.transformContent((content) => content.toUpperCase());
firstComponent.createChild({
    node: 'section', class: 'childSection', content: 'child'
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxDQUFDO0lBQ3pCLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsT0FBTztDQUN6RCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yeGpzLXRhc2tzLy4vc3JjL2NvbW1vbi50cyIsIndlYnBhY2s6Ly9yeGpzLXRhc2tzLy4vc3JjL2NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9yeGpzLXRhc2tzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3J4anMtdGFza3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3J4anMtdGFza3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yeGpzLXRhc2tzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnhqcy10YXNrcy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRHcm91cEVsZW1lbnQgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbW1vbiB7XHJcbiAgY3JlYXRlRG9tRWxlbWVudChcclxuICAgIHBhcmVudDogRWxlbWVudCB8IHN0cmluZywgZWxlbUNsYXNzOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgXHJcbiAgICBub2RlOiBzdHJpbmcsIHJvb3Q6IEhUTUxEaXZFbGVtZW50LFxyXG4gICkge1xyXG4gICAgbGV0IGZvdW5kRG9tRWxlbWVudDogYW55ID0gcGFyZW50O1xyXG4gICAgbGV0IGNsYXNzRG9tRWxlbWVudDogc3RyaW5nID0gJyc7XHJcbiAgICBjb25zdCBjcmVhdGVkRG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZSk7XHJcbiAgICBcclxuICAgIGlmICh0eXBlb2YgcGFyZW50ID09PSAnc3RyaW5nJykge1xyXG4gICAgICBmb3VuZERvbUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmVudCkhO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgaWYgKGVsZW1DbGFzcyAhPT0gdW5kZWZpbmVkKSB7Y2xhc3NEb21FbGVtZW50ID0gZWxlbUNsYXNzfTtcclxuICAgIGlmIChjb250ZW50KSB7Y3JlYXRlZERvbUVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50fTtcclxuXHJcbiAgICBpZiAoY2xhc3NEb21FbGVtZW50Lmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBjcmVhdGVkRG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzRG9tRWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgKGZvdW5kRG9tRWxlbWVudCEgfHwgcm9vdCkuYXBwZW5kKGNyZWF0ZWREb21FbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwYXJlbnQ6IGZvdW5kRG9tRWxlbWVudCEsIGNsYXNzOiBlbGVtQ2xhc3MsIGNvbnRlbnQ6IGNvbnRlbnQsIG5vZGU6IG5vZGUsIFxyXG4gICAgICB0YXJnZXQ6IGNyZWF0ZWREb21FbGVtZW50XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZmluZENvbXBvbmVudFRhcmdldChjb25maWc6IENvbXBvbmVudEdyb3VwRWxlbWVudCkge1xyXG4gICAgaWYgKGNvbmZpZy5jbGFzcykgcmV0dXJuIGAuJHtjb25maWcuY2xhc3N9YDtcclxuICAgIGVsc2Uge1xyXG4gICAgICBjb25zdCBjbGFzc0VsZW1lbnQgPSBjb25maWcudGFyZ2V0Py5jbGFzc0xpc3Q7XHJcbiAgICAgIGlmIChjbGFzc0VsZW1lbnQgJiYgY2xhc3NFbGVtZW50Lmxlbmd0aCAhPT0gMCkgcmV0dXJuIGNsYXNzRWxlbWVudDtcclxuICAgIH1cclxuICAgIHJldHVybiBjb25maWcudGFyZ2V0O1xyXG4gIH1cclxufSIsImltcG9ydCB7IENvbW1vbiB9IGZyb20gXCIuL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnRHcm91cCB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGZyYXplQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uIHtcclxuICBwdWJsaWMgY29tcG9uZW50OiBDb21wb25lbnRHcm91cDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb290RG9tRWxlbWVudDogSFRNTERpdkVsZW1lbnQpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmNvbXBvbmVudCA9IHtkYXRhOiB7fX07XHJcbiAgfVxyXG5cclxuICBiYXNlQ29uZmlnKGNvbmZpZzoge1xyXG4gICAgcGFyZW50PzogRWxlbWVudCB8IHN0cmluZywgY2xhc3M/OiBzdHJpbmcsIGNvbnRlbnQ/OiBzdHJpbmcsIG5vZGU6IHN0cmluZ1xyXG4gIH0pIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudChcclxuICAgICAgY29uZmlnLnBhcmVudCEsIGNvbmZpZy5jbGFzcyEsIGNvbmZpZy5jb250ZW50ISwgY29uZmlnLm5vZGUsIHRoaXMucm9vdERvbUVsZW1lbnQsIFxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmNvbXBvbmVudC5kYXRhID0gey4uLnJlc3VsdH07XHJcbiAgfVxyXG5cclxuICAjc2VhcmNoTm9kZSA9IChlbGVtZW50OiBhbnkpID0+IHtcclxuICAgIHJldHVybiB0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtlbGVtZW50fWApIDogZWxlbWVudDtcclxuICB9XHJcblxyXG4gIGNoYW5nZUF0dHIoYXR0cmlidXRlczogQXJyYXk8e2tleTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nfT4pIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmZpbmRDb21wb25lbnRUYXJnZXQodGhpcy5jb21wb25lbnQuZGF0YSk7XHJcbiAgICBjb25zdCBmb3VuZERvbUVsZW1lbnQ6IGFueSA9IHRoaXMuI3NlYXJjaE5vZGUoZWxlbWVudCk7XHJcblxyXG4gICAgaWYgKGZvdW5kRG9tRWxlbWVudCkge1xyXG4gICAgICBmb3IgKGxldCBhdHRyIG9mIGF0dHJpYnV0ZXMpIHtmb3VuZERvbUVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIua2V5LCBhdHRyLnZhbHVlKX07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVDaGlsZChjb25maWc6IHtjbGFzcz86IHN0cmluZywgY29udGVudD86IHN0cmluZywgbm9kZTogc3RyaW5nfSkge1xyXG4gICAgY29uc3QgcGFyZW50OiBhbnkgPSB0aGlzLmZpbmRDb21wb25lbnRUYXJnZXQodGhpcy5jb21wb25lbnQuZGF0YSk7XHJcblxyXG4gICAgdGhpcy5jcmVhdGVEb21FbGVtZW50KFxyXG4gICAgICBwYXJlbnQsIGNvbmZpZy5jbGFzcyEsIGNvbmZpZy5jb250ZW50ISwgY29uZmlnLm5vZGUsIFxyXG4gICAgICB0aGlzLnJvb3REb21FbGVtZW50XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtQ29udGVudCh0cmFuc2Zvcm06IEZ1bmN0aW9uKSB7XHJcbiAgICBjb25zdCBpbml0aWFsQ29udGVudDogc3RyaW5nID0gdGhpcy5jb21wb25lbnQuZGF0YS5jb250ZW50ITtcclxuICAgIGxldCByZXN1bHQ6IHN0cmluZyA9IGluaXRpYWxDb250ZW50O1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnQ6IGFueSA9IHRoaXMuZmluZENvbXBvbmVudFRhcmdldCh0aGlzLmNvbXBvbmVudC5kYXRhKTtcclxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLiNzZWFyY2hOb2RlKGVsZW1lbnQpO1xyXG4gICAgXHJcbiAgICBpZiAoaW5pdGlhbENvbnRlbnQpIHtcclxuICAgICAgdGhpcy5jb21wb25lbnQuZGF0YS5jb250ZW50ID0gIXRyYW5zZm9ybShpbml0aWFsQ29udGVudCkgPyByZXN1bHQgOiB0cmFuc2Zvcm0oaW5pdGlhbENvbnRlbnQpO1xyXG4gICAgICByZXN1bHQgPSB0aGlzLmNvbXBvbmVudC5kYXRhLmNvbnRlbnQhO1xyXG4gICAgfTsgXHJcbiAgICBub2RlLmlubmVySFRNTCA9IHJlc3VsdDtcclxuICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IENvbW1vbiB9IGZyb20gXCIuL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBEZnJhemVDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBEb21Db25maWcgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERmcmF6ZUJhc2UgZXh0ZW5kcyBDb21tb24ge1xyXG4gIHB1YmxpYyBjb21wb25lbnRzITogQXJyYXk8Q29tcG9uZW50PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb290RG9tRWxlbWVudDogSFRNTERpdkVsZW1lbnQpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmNvbXBvbmVudHMgPSBbXTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUVsZW1lbnQobm9kZTogc3RyaW5nLCBjb25maWc6IERvbUNvbmZpZykge1xyXG4gICAgaWYgKG5vZGUubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGlmIChSZWZsZWN0Lm93bktleXMoY29uZmlnKS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoXHJcbiAgICAgICAgICBjb25maWcucGFyZW50ISwgY29uZmlnLmNsYXNzISwgY29uZmlnLmNvbnRlbnQhLCBub2RlLCB0aGlzLnJvb3REb21FbGVtZW50LCBcclxuICAgICAgICApO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ29tcG9uZW50KGNvbmZpZzogQ29tcG9uZW50KSB7XHJcbiAgICBjb25zdCBjb21wb25lbnRDbGFzcyA9IG5ldyBEZnJhemVDb21wb25lbnQodGhpcy5yb290RG9tRWxlbWVudCk7XHJcbiAgICB0aGlzLmNvbXBvbmVudHMucHVzaCh7bmFtZTogY29uZmlnLm5hbWUsIGNvbXBvbmVudDogT2JqZWN0LmFzc2lnbihjb21wb25lbnRDbGFzcy5jb21wb25lbnQpfSk7XHJcbiAgICByZXR1cm4gY29tcG9uZW50Q2xhc3M7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvbXBvbmVudHMpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgYmFzZSA9IG5ldyBEZnJhemVCYXNlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZnJhemUtcm9vdCcpISk7XHJcblxyXG5iYXNlLmNyZWF0ZUVsZW1lbnQoJ2gyJywge1xyXG4gIHBhcmVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRmcmF6ZS1yb290JykhLFxyXG4gIGNsYXNzOiAndGVzdC1jbGFzcycsIFxyXG4gIGNvbnRlbnQ6ICdJIGxvdmUgcHJvZ3JhbW1pbmcnXHJcbn0pO1xyXG5cclxuYmFzZS5jcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICd3cmFwJ30pO1xyXG5iYXNlLmNyZWF0ZUVsZW1lbnQoJ2gzJywge3BhcmVudDogJy53cmFwJywgY29udGVudDogJ0l0IGlzIGluc2lkZSBkaXYnfSk7XHJcblxyXG5jb25zdCBmaXJzdENvbXBvbmVudCA9IGJhc2UuY3JlYXRlQ29tcG9uZW50KHtuYW1lOiAnc2Vjb25kJ30pO1xyXG5maXJzdENvbXBvbmVudC5iYXNlQ29uZmlnKHtwYXJlbnQ6ICcud3JhcCcsIGNvbnRlbnQ6ICdoZWxsbycsIG5vZGU6ICdkaXYnfSk7XHJcblxyXG5maXJzdENvbXBvbmVudC5jaGFuZ2VBdHRyKFt7a2V5OiAnaWQnLCB2YWx1ZTogJ3Rlc3RJRCd9XSk7XHJcbmZpcnN0Q29tcG9uZW50LnRyYW5zZm9ybUNvbnRlbnQoKGNvbnRlbnQ6IHN0cmluZykgPT4gY29udGVudC50b1VwcGVyQ2FzZSgpKTtcclxuXHJcbmZpcnN0Q29tcG9uZW50LmNyZWF0ZUNoaWxkKHtcclxuICBub2RlOiAnc2VjdGlvbicsIGNsYXNzOiAnY2hpbGRTZWN0aW9uJywgY29udGVudDogJ2NoaWxkJ1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9