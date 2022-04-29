import { ComponentGroupElement, CreatedElement } from "./types";

export class Common {
  protected createDomElement(
    parent: Element | string, elemClass: string, content: string, 
    node: string, root: HTMLDivElement,
  ): CreatedElement {
    let foundDomElement: any = parent;
    let classDomElement: string = '';
    const createdDomElement = document.createElement(node);
    
    if (typeof parent === 'string') {
      foundDomElement = document.querySelector(parent)!;
    };
    
    if (elemClass !== undefined) {classDomElement = elemClass};
    if (content) {createdDomElement.textContent = content};

    if (classDomElement.length !== 0) {
      createdDomElement.classList.add(classDomElement);
    }

    (foundDomElement! || root).append(createdDomElement);
    
    const result = {
      parent: foundDomElement!, class: elemClass, content: content, node: node, target: createdDomElement
    };

    return result;
  }

  protected findComponentTarget(config: ComponentGroupElement) {
    if (config.class) return `.${config.class}`;
    else {
      const classElement = config.target?.classList;
      if (classElement && classElement.length !== 0) return classElement;
    }
    return config.target;
  }

  #searchNode = (element: any) => {
    return typeof element === 'string' ? document.querySelector(`${element}`) : element;
  }

  protected changeElemAttr(component: any, attributes: Array<{key: string; value: string}>) {
    const element = this.findComponentTarget(component.data ? component.data : component);
    const foundDomElement: any = this.#searchNode(element);

    if (foundDomElement) {
      for (let attr of attributes) {foundDomElement.setAttribute(attr.key, attr.value)};
    }
  }

  protected createElemChild(
    component: any, 
    config: {class?: string, content?: string, node: string}, 
    rootDomElement: HTMLDivElement
  ) {
    const parent: any = this.findComponentTarget(component.data);

    const result = this.createDomElement(
      parent, config.class!, config.content!, config.node, 
      rootDomElement
    );

    return result;
  }

  protected transformElemContent(component: any, transform: Function) {
    const initialContent: string = component.data.content!;
    let result: string = initialContent;

    const element: any = this.findComponentTarget(component.data);
    const node = this.#searchNode(element);
    
    if (initialContent) {
      component.data.content = !transform(initialContent) ? result : transform(initialContent);
      result = component.data.content!;
    }; 

    node.innerHTML = result;
    return result;
  }
}