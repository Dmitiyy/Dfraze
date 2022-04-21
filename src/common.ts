import { ComponentGroupElement } from "./types";

export class Common {
  createDomElement(
    parent: Element | string, elemClass: string, content: string, 
    node: string, root: HTMLDivElement,
  ) {
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

    return {
      parent: foundDomElement!, class: elemClass, content: content, node: node, 
      target: createdDomElement
    };
  }

  findComponentTarget(config: ComponentGroupElement) {
    if (config.class) return `.${config.class}`;
    else {
      const classElement = config.target?.classList;
      if (classElement && classElement.length !== 0) return classElement;
    }
    return config.target;
  }
}