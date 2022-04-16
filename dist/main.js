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
        return { parent: foundDomElement, class: elemClass, content: content, node: node };
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
    constructor(props, rootDomElement) {
        super();
        this.props = props;
        this.rootDomElement = rootDomElement;
        this.group = { main: {}, firstLevel: [] };
    }
    groupMain(config) {
        const result = this.createDomElement(config.parent, config.class, config.content, config.node, this.rootDomElement);
        this.group.main = Object.assign({}, result);
    }
    render() {
        console.log(this.props);
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
        this.components.push(config);
        return new _component__WEBPACK_IMPORTED_MODULE_1__.DfrazeComponent(Object.assign({}, config), this.rootDomElement);
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
    transformContent(content) { return content.toUpperCase(); }
});
base.createElement('div', { class: 'wrap' });
base.createElement('h3', { parent: '.wrap', content: 'It is inside div' });
base.createComponent({
    name: 'main',
    group: {
        main: {
            node: 'section',
            class: 'main-section',
            content: 'My first section',
            children: [
                {
                    node: 'child',
                    class: 'main-child',
                    content: 'My first child',
                },
                {
                    node: 'child',
                    class: 'main-child',
                    content: 'My second child',
                }
            ]
        }
    }
});
const firstComponent = base.createComponent({ name: 'second' });
firstComponent.groupMain({ parent: '.wrap', class: 'main-wrap', content: 'hello', node: 'div' });
firstComponent.render();
base.render();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxFQUFFLEVBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO0FBRXpFLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDbkIsSUFBSSxFQUFFLE1BQU07SUFDWixLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsU0FBUztZQUNmLEtBQUssRUFBRSxjQUFjO1lBQ3JCLE9BQU8sRUFBRSxrQkFBa0I7WUFDM0IsUUFBUSxFQUFFO2dCQUNSO29CQUNFLElBQUksRUFBRSxPQUFPO29CQUNiLEtBQUssRUFBRSxZQUFZO29CQUNuQixPQUFPLEVBQUUsZ0JBQWdCO2lCQUMxQjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsT0FBTztvQkFDYixLQUFLLEVBQUUsWUFBWTtvQkFDbkIsT0FBTyxFQUFFLGlCQUFpQjtpQkFDM0I7YUFDRjtTQUNGO0tBQ0Y7Q0FDRixDQUFDLENBQUM7QUFFSCxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7QUFDOUQsY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0FBQy9GLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUV4QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yeGpzLXRhc2tzLy4vc3JjL2NvbW1vbi50cyIsIndlYnBhY2s6Ly9yeGpzLXRhc2tzLy4vc3JjL2NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9yeGpzLXRhc2tzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3J4anMtdGFza3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3J4anMtdGFza3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yeGpzLXRhc2tzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnhqcy10YXNrcy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29tbW9uIHtcclxuICBjcmVhdGVEb21FbGVtZW50KFxyXG4gICAgcGFyZW50OiBFbGVtZW50IHwgc3RyaW5nLCBlbGVtQ2xhc3M6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBcclxuICAgIG5vZGU6IHN0cmluZywgcm9vdDogSFRNTERpdkVsZW1lbnQsXHJcbiAgKSB7XHJcbiAgICBsZXQgZm91bmREb21FbGVtZW50OiBFbGVtZW50O1xyXG4gICAgbGV0IGNsYXNzRG9tRWxlbWVudDogc3RyaW5nID0gJyc7XHJcbiAgICBjb25zdCBjcmVhdGVkRG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZSk7XHJcbiAgICBcclxuICAgIGlmICh0eXBlb2YgcGFyZW50ID09PSAnc3RyaW5nJykge1xyXG4gICAgICBmb3VuZERvbUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmVudCkhO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgaWYgKGVsZW1DbGFzcyAhPT0gdW5kZWZpbmVkKSB7Y2xhc3NEb21FbGVtZW50ID0gZWxlbUNsYXNzfTtcclxuICAgIGlmIChjb250ZW50KSB7Y3JlYXRlZERvbUVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50fTtcclxuXHJcbiAgICBpZiAoY2xhc3NEb21FbGVtZW50Lmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBjcmVhdGVkRG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzRG9tRWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgKGZvdW5kRG9tRWxlbWVudCEgfHwgcm9vdCkuYXBwZW5kKGNyZWF0ZWREb21FbGVtZW50KTtcclxuICAgIHJldHVybiB7cGFyZW50OiBmb3VuZERvbUVsZW1lbnQhLCBjbGFzczogZWxlbUNsYXNzLCBjb250ZW50OiBjb250ZW50LCBub2RlOiBub2RlfTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBDb21tb24gfSBmcm9tIFwiLi9jb21tb25cIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRHcm91cCB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGZyYXplQ29tcG9uZW50IGV4dGVuZHMgQ29tbW9uIHtcclxuICBwcml2YXRlIGdyb3VwOiBDb21wb25lbnRHcm91cDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9wczogQ29tcG9uZW50LCBwcml2YXRlIHJvb3REb21FbGVtZW50OiBIVE1MRGl2RWxlbWVudCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuZ3JvdXAgPSB7bWFpbjoge30sIGZpcnN0TGV2ZWw6IFtdfTtcclxuICB9XHJcblxyXG4gIGdyb3VwTWFpbihjb25maWc6IHtcclxuICAgIHBhcmVudD86IEVsZW1lbnQgfCBzdHJpbmcsIGNsYXNzPzogc3RyaW5nLCBjb250ZW50Pzogc3RyaW5nLCBub2RlOiBzdHJpbmdcclxuICB9KSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmNyZWF0ZURvbUVsZW1lbnQoXHJcbiAgICAgIGNvbmZpZy5wYXJlbnQhLCBjb25maWcuY2xhc3MhLCBjb25maWcuY29udGVudCEsIGNvbmZpZy5ub2RlLCB0aGlzLnJvb3REb21FbGVtZW50LCBcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5ncm91cC5tYWluID0gey4uLnJlc3VsdH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTsgIFxyXG4gIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgQ29tbW9uIH0gZnJvbSBcIi4vY29tbW9uXCI7XHJcbmltcG9ydCB7IERmcmF6ZUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIERvbUNvbmZpZyB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGZyYXplQmFzZSBleHRlbmRzIENvbW1vbiB7XHJcbiAgcHVibGljIGNvbXBvbmVudHMhOiBBcnJheTxDb21wb25lbnQ+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvb3REb21FbGVtZW50OiBIVE1MRGl2RWxlbWVudCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuY29tcG9uZW50cyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRWxlbWVudChub2RlOiBzdHJpbmcsIGNvbmZpZzogRG9tQ29uZmlnKSB7XHJcbiAgICBpZiAobm9kZS5sZW5ndGggIT09IDApIHtcclxuICAgICAgaWYgKFJlZmxlY3Qub3duS2V5cyhjb25maWcpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuY3JlYXRlRG9tRWxlbWVudChcclxuICAgICAgICAgIGNvbmZpZy5wYXJlbnQhLCBjb25maWcuY2xhc3MhLCBjb25maWcuY29udGVudCEsIG5vZGUsIHRoaXMucm9vdERvbUVsZW1lbnQsIFxyXG4gICAgICAgICk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVDb21wb25lbnQoY29uZmlnOiBDb21wb25lbnQpIHtcclxuICAgIHRoaXMuY29tcG9uZW50cy5wdXNoKGNvbmZpZyk7XHJcbiAgICByZXR1cm4gbmV3IERmcmF6ZUNvbXBvbmVudCh7Li4uY29uZmlnfSwgdGhpcy5yb290RG9tRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvbXBvbmVudHMpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgYmFzZSA9IG5ldyBEZnJhemVCYXNlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZnJhemUtcm9vdCcpISk7XHJcblxyXG5iYXNlLmNyZWF0ZUVsZW1lbnQoJ2gyJywge1xyXG4gIHBhcmVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRmcmF6ZS1yb290JykhLFxyXG4gIGNsYXNzOiAndGVzdC1jbGFzcycsIFxyXG4gIGNvbnRlbnQ6ICdJIGxvdmUgcHJvZ3JhbW1pbmcnLFxyXG4gIGF0dHJpYnV0ZXM6IFt7a2V5OiAnY2xhc3MnLCB2YWx1ZTogJ3Rlc3QtMid9XSxcclxuICB0cmFuc2Zvcm1Db250ZW50KGNvbnRlbnQ6IHN0cmluZykge3JldHVybiBjb250ZW50LnRvVXBwZXJDYXNlKCl9XHJcbn0pO1xyXG5cclxuYmFzZS5jcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICd3cmFwJ30pO1xyXG5iYXNlLmNyZWF0ZUVsZW1lbnQoJ2gzJywge3BhcmVudDogJy53cmFwJywgY29udGVudDogJ0l0IGlzIGluc2lkZSBkaXYnfSk7XHJcblxyXG5iYXNlLmNyZWF0ZUNvbXBvbmVudCh7XHJcbiAgbmFtZTogJ21haW4nLFxyXG4gIGdyb3VwOiB7XHJcbiAgICBtYWluOiB7XHJcbiAgICAgIG5vZGU6ICdzZWN0aW9uJyxcclxuICAgICAgY2xhc3M6ICdtYWluLXNlY3Rpb24nLFxyXG4gICAgICBjb250ZW50OiAnTXkgZmlyc3Qgc2VjdGlvbicsXHJcbiAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbm9kZTogJ2NoaWxkJyxcclxuICAgICAgICAgIGNsYXNzOiAnbWFpbi1jaGlsZCcsXHJcbiAgICAgICAgICBjb250ZW50OiAnTXkgZmlyc3QgY2hpbGQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbm9kZTogJ2NoaWxkJyxcclxuICAgICAgICAgIGNsYXNzOiAnbWFpbi1jaGlsZCcsXHJcbiAgICAgICAgICBjb250ZW50OiAnTXkgc2Vjb25kIGNoaWxkJyxcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3QgZmlyc3RDb21wb25lbnQgPSBiYXNlLmNyZWF0ZUNvbXBvbmVudCh7bmFtZTogJ3NlY29uZCd9KTtcclxuZmlyc3RDb21wb25lbnQuZ3JvdXBNYWluKHtwYXJlbnQ6ICcud3JhcCcsIGNsYXNzOiAnbWFpbi13cmFwJywgY29udGVudDogJ2hlbGxvJywgbm9kZTogJ2Rpdid9KTtcclxuZmlyc3RDb21wb25lbnQucmVuZGVyKCk7XHJcblxyXG5iYXNlLnJlbmRlcigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==