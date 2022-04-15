/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

class DfrazeBase {
    constructor(rootDomElement) {
        this.rootDomElement = rootDomElement;
    }
    createDomElement(node, config) {
        if (node.length !== 0) {
            const element = document.createElement(node);
            if (Reflect.ownKeys(config).length !== 0) {
                if (config.class) {
                    element.classList.add(config.class);
                }
                ;
                if (config.content) {
                    element.innerHTML = config.func ? config.func(config.content) : config.content;
                }
                ;
            }
            ;
            (config.parent || this.rootDomElement).append(element);
        }
    }
    createComponent(config) {
        console.log(config);
    }
}
const base = new DfrazeBase(document.querySelector('.dfraze-root'));
base.createDomElement('h2', {
    parent: document.querySelector('.dfraze-root'),
    class: 'test-class',
    content: 'I love programming',
    func(content) { return content.toUpperCase(); }
});
base.createDomElement('div', { class: 'wrap' });
base.createDomElement('h3', { parent: document.querySelector('.wrap'), content: 'It is inside div' });
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBUUEsTUFBTSxVQUFVO0lBQ2QsWUFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQUcsQ0FBQztJQUV0RCxnQkFBZ0IsQ0FDZCxJQUFZLEVBQUUsTUFBNkU7UUFFM0YsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNyQixNQUFNLE9BQU8sR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUUxRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDeEMsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO29CQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7aUJBQUM7Z0JBQUEsQ0FBQztnQkFDeEQsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO29CQUNsQixPQUFPLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2lCQUNoRjtnQkFBQSxDQUFDO2FBQ0g7WUFBQSxDQUFDO1lBRUYsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEQ7SUFDSCxDQUFDO0lBRUQsZUFBZSxDQUNiLE1BRUU7UUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Q0FDRjtBQUVELE1BQU0sSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFFLENBQUMsQ0FBQztBQUVyRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFO0lBQzFCLE1BQU0sRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBRTtJQUMvQyxLQUFLLEVBQUUsWUFBWTtJQUNuQixPQUFPLEVBQUUsb0JBQW9CO0lBQzdCLElBQUksQ0FBQyxPQUFlLElBQUcsT0FBTyxPQUFPLENBQUMsV0FBVyxFQUFFLEdBQUM7Q0FDckQsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO0FBQzlDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsRUFBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUUsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO0FBRXJHLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDbkIsSUFBSSxFQUFFLE1BQU07SUFDWixLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsU0FBUztZQUNmLEtBQUssRUFBRSxjQUFjO1lBQ3JCLE9BQU8sRUFBRSxrQkFBa0I7WUFDM0IsUUFBUSxFQUFFO2dCQUNSO29CQUNFLElBQUksRUFBRSxPQUFPO29CQUNiLEtBQUssRUFBRSxZQUFZO29CQUNuQixPQUFPLEVBQUUsZ0JBQWdCO2lCQUMxQjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsT0FBTztvQkFDYixLQUFLLEVBQUUsWUFBWTtvQkFDbkIsT0FBTyxFQUFFLGlCQUFpQjtpQkFDM0I7YUFDRjtTQUNGO0tBQ0Y7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yeGpzLXRhc2tzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBDb21wb25lbnRHcm91cEVsZW1lbnQge1xyXG4gIG5vZGU/OiBzdHJpbmc7XHJcbiAgY2xhc3M/OiBzdHJpbmc7XHJcbiAgY29udGVudD86IHN0cmluZztcclxuICBmdW5jPzogRnVuY3Rpb247XHJcbiAgY2hpbGRyZW4/OiBBcnJheTxDb21wb25lbnRHcm91cEVsZW1lbnQ+O1xyXG59XHJcblxyXG5jbGFzcyBEZnJhemVCYXNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvb3REb21FbGVtZW50OiBIVE1MRGl2RWxlbWVudCkge31cclxuXHJcbiAgY3JlYXRlRG9tRWxlbWVudChcclxuICAgIG5vZGU6IHN0cmluZywgY29uZmlnOiB7cGFyZW50PzogRWxlbWVudCwgY2xhc3M/OiBzdHJpbmcsIGNvbnRlbnQ/OiBzdHJpbmcsIGZ1bmM/OiBGdW5jdGlvbn0sIFxyXG4gICkge1xyXG4gICAgaWYgKG5vZGUubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlKTsgICAgICBcclxuICAgICAgXHJcbiAgICAgIGlmIChSZWZsZWN0Lm93bktleXMoY29uZmlnKS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBpZiAoY29uZmlnLmNsYXNzKSB7ZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNvbmZpZy5jbGFzcyl9O1xyXG4gICAgICAgIGlmIChjb25maWcuY29udGVudCkge1xyXG4gICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBjb25maWcuZnVuYyA/IGNvbmZpZy5mdW5jKGNvbmZpZy5jb250ZW50KSA6IGNvbmZpZy5jb250ZW50O1xyXG4gICAgICAgIH07XHJcbiAgICAgIH07XHJcblxyXG4gICAgICAoY29uZmlnLnBhcmVudCB8fCB0aGlzLnJvb3REb21FbGVtZW50KS5hcHBlbmQoZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVDb21wb25lbnQoXHJcbiAgICBjb25maWc6IHtuYW1lOiBzdHJpbmcsIGdyb3VwPzoge1xyXG4gICAgICBtYWluOiBDb21wb25lbnRHcm91cEVsZW1lbnQsIGZpcnN0TGV2ZWw/OiBBcnJheTxDb21wb25lbnRHcm91cEVsZW1lbnQ+XHJcbiAgICB9fVxyXG4gICkge1xyXG4gICAgY29uc29sZS5sb2coY29uZmlnKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGJhc2UgPSBuZXcgRGZyYXplQmFzZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGZyYXplLXJvb3QnKSEpO1xyXG5cclxuYmFzZS5jcmVhdGVEb21FbGVtZW50KCdoMicsIHtcclxuICBwYXJlbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZnJhemUtcm9vdCcpISxcclxuICBjbGFzczogJ3Rlc3QtY2xhc3MnLCBcclxuICBjb250ZW50OiAnSSBsb3ZlIHByb2dyYW1taW5nJyxcclxuICBmdW5jKGNvbnRlbnQ6IHN0cmluZykge3JldHVybiBjb250ZW50LnRvVXBwZXJDYXNlKCl9XHJcbn0pO1xyXG5cclxuYmFzZS5jcmVhdGVEb21FbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICd3cmFwJ30pO1xyXG5iYXNlLmNyZWF0ZURvbUVsZW1lbnQoJ2gzJywge3BhcmVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXAnKSEsIGNvbnRlbnQ6ICdJdCBpcyBpbnNpZGUgZGl2J30pO1xyXG5cclxuYmFzZS5jcmVhdGVDb21wb25lbnQoe1xyXG4gIG5hbWU6ICdtYWluJyxcclxuICBncm91cDoge1xyXG4gICAgbWFpbjoge1xyXG4gICAgICBub2RlOiAnc2VjdGlvbicsXHJcbiAgICAgIGNsYXNzOiAnbWFpbi1zZWN0aW9uJyxcclxuICAgICAgY29udGVudDogJ015IGZpcnN0IHNlY3Rpb24nLFxyXG4gICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5vZGU6ICdjaGlsZCcsXHJcbiAgICAgICAgICBjbGFzczogJ21haW4tY2hpbGQnLFxyXG4gICAgICAgICAgY29udGVudDogJ015IGZpcnN0IGNoaWxkJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5vZGU6ICdjaGlsZCcsXHJcbiAgICAgICAgICBjbGFzczogJ21haW4tY2hpbGQnLFxyXG4gICAgICAgICAgY29udGVudDogJ015IHNlY29uZCBjaGlsZCcsXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfVxyXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=