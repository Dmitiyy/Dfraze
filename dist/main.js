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
        let foundDomElement;
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
        if (this.component.data.class) {
            const foundDomElement = document.querySelector(`.${this.component.data.class}`);
            if (foundDomElement) {
                for (let attr of attributes) {
                    foundDomElement.setAttribute(attr.key, attr.value);
                }
                ;
            }
        }
    }
    createChild(config) {
        if (this.component.data.class) {
            this.createDomElement(`.${this.component.data.class}`, config.class, config.content, config.node, this.rootDomElement);
        }
        console.log(this.component.data);
    }
    transformContent(transform) {
        const initialContent = this.component.data.content;
        let result = initialContent;
        if (initialContent) {
            this.component.data.content = !transform(initialContent) ? result : transform(initialContent);
            result = this.component.data.content;
        }
        ;
        document.querySelector(`.${this.component.data.class}`).innerHTML = result;
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
                const result = this.createDomElement(config.parent, config.class, config.content, node, this.rootDomElement);
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
    content: 'I love programming',
    attributes: [{ key: 'class', value: 'test-2' }],
});
base.createElement('div', { class: 'wrap' });
base.createElement('h3', { parent: '.wrap', content: 'It is inside div' });
const firstComponent = base.createComponent({ name: 'second' });
firstComponent.baseConfig({ parent: '.wrap', class: 'main-wrap', content: 'hello', node: 'div' });
firstComponent.changeAttr([{ key: 'id', value: 'testID' }]);
firstComponent.transformContent((content) => content.toUpperCase());
firstComponent.createChild({
    node: 'section', class: 'childSection', content: 'child'
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUsUUFBUSxFQUFDLENBQUM7Q0FDOUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztBQUMzQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFDLENBQUMsQ0FBQztBQUV6RSxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7QUFDOUQsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0FBRWhHLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUMsQ0FBQztBQUMxRCxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFlLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBRTVFLGNBQWMsQ0FBQyxXQUFXLENBQUM7SUFDekIsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxPQUFPO0NBQ3pELENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3J4anMtdGFza3MvLi9zcmMvY29tbW9uLnRzIiwid2VicGFjazovL3J4anMtdGFza3MvLi9zcmMvY29tcG9uZW50LnRzIiwid2VicGFjazovL3J4anMtdGFza3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcnhqcy10YXNrcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcnhqcy10YXNrcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3J4anMtdGFza3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yeGpzLXRhc2tzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb21tb24ge1xyXG4gIGNyZWF0ZURvbUVsZW1lbnQoXHJcbiAgICBwYXJlbnQ6IEVsZW1lbnQgfCBzdHJpbmcsIGVsZW1DbGFzczogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIFxyXG4gICAgbm9kZTogc3RyaW5nLCByb290OiBIVE1MRGl2RWxlbWVudCxcclxuICApIHtcclxuICAgIGxldCBmb3VuZERvbUVsZW1lbnQ6IEVsZW1lbnQ7XHJcbiAgICBsZXQgY2xhc3NEb21FbGVtZW50OiBzdHJpbmcgPSAnJztcclxuICAgIGNvbnN0IGNyZWF0ZWREb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlKTtcclxuICAgIFxyXG4gICAgaWYgKHR5cGVvZiBwYXJlbnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGZvdW5kRG9tRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyZW50KSE7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBpZiAoZWxlbUNsYXNzICE9PSB1bmRlZmluZWQpIHtjbGFzc0RvbUVsZW1lbnQgPSBlbGVtQ2xhc3N9O1xyXG4gICAgaWYgKGNvbnRlbnQpIHtjcmVhdGVkRG9tRWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnR9O1xyXG5cclxuICAgIGlmIChjbGFzc0RvbUVsZW1lbnQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGNyZWF0ZWREb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NEb21FbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAoZm91bmREb21FbGVtZW50ISB8fCByb290KS5hcHBlbmQoY3JlYXRlZERvbUVsZW1lbnQpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBhcmVudDogZm91bmREb21FbGVtZW50ISwgY2xhc3M6IGVsZW1DbGFzcywgY29udGVudDogY29udGVudCwgbm9kZTogbm9kZSwgXHJcbiAgICAgIHRhcmdldDogY3JlYXRlZERvbUVsZW1lbnRcclxuICAgIH07XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgQ29tbW9uIH0gZnJvbSBcIi4vY29tbW9uXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudEdyb3VwIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEZnJhemVDb21wb25lbnQgZXh0ZW5kcyBDb21tb24ge1xyXG4gIHB1YmxpYyBjb21wb25lbnQ6IENvbXBvbmVudEdyb3VwO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvb3REb21FbGVtZW50OiBIVE1MRGl2RWxlbWVudCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuY29tcG9uZW50ID0ge2RhdGE6IHt9fTtcclxuICB9XHJcblxyXG4gIGJhc2VDb25maWcoY29uZmlnOiB7XHJcbiAgICBwYXJlbnQ/OiBFbGVtZW50IHwgc3RyaW5nLCBjbGFzcz86IHN0cmluZywgY29udGVudD86IHN0cmluZywgbm9kZTogc3RyaW5nXHJcbiAgfSkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5jcmVhdGVEb21FbGVtZW50KFxyXG4gICAgICBjb25maWcucGFyZW50ISwgY29uZmlnLmNsYXNzISwgY29uZmlnLmNvbnRlbnQhLCBjb25maWcubm9kZSwgdGhpcy5yb290RG9tRWxlbWVudCwgXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuY29tcG9uZW50LmRhdGEgPSB7Li4ucmVzdWx0fTtcclxuICB9XHJcblxyXG4gIGNoYW5nZUF0dHIoYXR0cmlidXRlczogQXJyYXk8e2tleTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nfT4pIHtcclxuICAgIGlmICh0aGlzLmNvbXBvbmVudC5kYXRhLmNsYXNzKSB7XHJcbiAgICAgIGNvbnN0IGZvdW5kRG9tRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuY29tcG9uZW50LmRhdGEuY2xhc3N9YCk7XHJcblxyXG4gICAgICBpZiAoZm91bmREb21FbGVtZW50KSB7XHJcbiAgICAgICAgZm9yIChsZXQgYXR0ciBvZiBhdHRyaWJ1dGVzKSB7Zm91bmREb21FbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLmtleSwgYXR0ci52YWx1ZSl9O1xyXG4gICAgICB9XHJcbiAgICB9ICBcclxuICB9XHJcblxyXG4gIGNyZWF0ZUNoaWxkKGNvbmZpZzoge2NsYXNzPzogc3RyaW5nLCBjb250ZW50Pzogc3RyaW5nLCBub2RlOiBzdHJpbmd9KSB7XHJcbiAgICBpZiAodGhpcy5jb21wb25lbnQuZGF0YS5jbGFzcykge1xyXG4gICAgICB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoXHJcbiAgICAgICAgYC4ke3RoaXMuY29tcG9uZW50LmRhdGEuY2xhc3N9YCwgY29uZmlnLmNsYXNzISwgY29uZmlnLmNvbnRlbnQhLCBjb25maWcubm9kZSwgdGhpcy5yb290RG9tRWxlbWVudFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2codGhpcy5jb21wb25lbnQuZGF0YSk7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybUNvbnRlbnQodHJhbnNmb3JtOiBGdW5jdGlvbikge1xyXG4gICAgY29uc3QgaW5pdGlhbENvbnRlbnQ6IHN0cmluZyA9IHRoaXMuY29tcG9uZW50LmRhdGEuY29udGVudCE7XHJcbiAgICBsZXQgcmVzdWx0OiBzdHJpbmcgPSBpbml0aWFsQ29udGVudDtcclxuICAgIFxyXG4gICAgaWYgKGluaXRpYWxDb250ZW50KSB7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50LmRhdGEuY29udGVudCA9ICF0cmFuc2Zvcm0oaW5pdGlhbENvbnRlbnQpID8gcmVzdWx0IDogdHJhbnNmb3JtKGluaXRpYWxDb250ZW50KTtcclxuICAgICAgcmVzdWx0ID0gdGhpcy5jb21wb25lbnQuZGF0YS5jb250ZW50ITtcclxuICAgIH07IFxyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuY29tcG9uZW50LmRhdGEuY2xhc3N9YCkhLmlubmVySFRNTCA9IHJlc3VsdDtcclxuICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IENvbW1vbiB9IGZyb20gXCIuL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBEZnJhemVDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBEb21Db25maWcgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERmcmF6ZUJhc2UgZXh0ZW5kcyBDb21tb24ge1xyXG4gIHB1YmxpYyBjb21wb25lbnRzITogQXJyYXk8Q29tcG9uZW50PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb290RG9tRWxlbWVudDogSFRNTERpdkVsZW1lbnQpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmNvbXBvbmVudHMgPSBbXTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUVsZW1lbnQobm9kZTogc3RyaW5nLCBjb25maWc6IERvbUNvbmZpZykge1xyXG4gICAgaWYgKG5vZGUubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGlmIChSZWZsZWN0Lm93bktleXMoY29uZmlnKS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoXHJcbiAgICAgICAgICBjb25maWcucGFyZW50ISwgY29uZmlnLmNsYXNzISwgY29uZmlnLmNvbnRlbnQhLCBub2RlLCB0aGlzLnJvb3REb21FbGVtZW50LCBcclxuICAgICAgICApO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ29tcG9uZW50KGNvbmZpZzogQ29tcG9uZW50KSB7XHJcbiAgICBjb25zdCBjb21wb25lbnRDbGFzcyA9IG5ldyBEZnJhemVDb21wb25lbnQodGhpcy5yb290RG9tRWxlbWVudCk7XHJcbiAgICB0aGlzLmNvbXBvbmVudHMucHVzaCh7bmFtZTogY29uZmlnLm5hbWUsIGNvbXBvbmVudDogT2JqZWN0LmFzc2lnbihjb21wb25lbnRDbGFzcy5jb21wb25lbnQpfSk7XHJcbiAgICByZXR1cm4gY29tcG9uZW50Q2xhc3M7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvbXBvbmVudHMpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgYmFzZSA9IG5ldyBEZnJhemVCYXNlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZnJhemUtcm9vdCcpISk7XHJcblxyXG5iYXNlLmNyZWF0ZUVsZW1lbnQoJ2gyJywge1xyXG4gIHBhcmVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRmcmF6ZS1yb290JykhLFxyXG4gIGNsYXNzOiAndGVzdC1jbGFzcycsIFxyXG4gIGNvbnRlbnQ6ICdJIGxvdmUgcHJvZ3JhbW1pbmcnLFxyXG4gIGF0dHJpYnV0ZXM6IFt7a2V5OiAnY2xhc3MnLCB2YWx1ZTogJ3Rlc3QtMid9XSxcclxufSk7XHJcblxyXG5iYXNlLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ3dyYXAnfSk7XHJcbmJhc2UuY3JlYXRlRWxlbWVudCgnaDMnLCB7cGFyZW50OiAnLndyYXAnLCBjb250ZW50OiAnSXQgaXMgaW5zaWRlIGRpdid9KTtcclxuXHJcbmNvbnN0IGZpcnN0Q29tcG9uZW50ID0gYmFzZS5jcmVhdGVDb21wb25lbnQoe25hbWU6ICdzZWNvbmQnfSk7XHJcbmZpcnN0Q29tcG9uZW50LmJhc2VDb25maWcoe3BhcmVudDogJy53cmFwJywgY2xhc3M6ICdtYWluLXdyYXAnLCBjb250ZW50OiAnaGVsbG8nLCBub2RlOiAnZGl2J30pO1xyXG5cclxuZmlyc3RDb21wb25lbnQuY2hhbmdlQXR0cihbe2tleTogJ2lkJywgdmFsdWU6ICd0ZXN0SUQnfV0pO1xyXG5maXJzdENvbXBvbmVudC50cmFuc2Zvcm1Db250ZW50KChjb250ZW50OiBzdHJpbmcpID0+IGNvbnRlbnQudG9VcHBlckNhc2UoKSk7XHJcblxyXG5maXJzdENvbXBvbmVudC5jcmVhdGVDaGlsZCh7XHJcbiAgbm9kZTogJ3NlY3Rpb24nLCBjbGFzczogJ2NoaWxkU2VjdGlvbicsIGNvbnRlbnQ6ICdjaGlsZCdcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==