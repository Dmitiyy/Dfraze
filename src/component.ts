import { Common } from "./common";
import { ComponentGroup } from "./types";

export class DfrazeComponent extends Common {
  public component: ComponentGroup;

  constructor(private rootDomElement: HTMLDivElement) {
    super();
    this.component = {data: {}};
  }

  baseConfig(config: {
    parent?: Element | string, class?: string, content?: string, node: string
  }) {
    const result = this.createDomElement(
      config.parent!, config.class!, config.content!, config.node, this.rootDomElement, 
    );

    this.component.data = {...result};
  }

  #searchNode = (element: any) => {
    return typeof element === 'string' ? document.querySelector(`.${element}`) : element;
  }

  changeAttr(attributes: Array<{key: string; value: string}>) {
    const element = this.findComponentTarget(this.component.data);
    const foundDomElement: any = this.#searchNode(element);

    if (foundDomElement) {
      for (let attr of attributes) {foundDomElement.setAttribute(attr.key, attr.value)};
    }
  }

  createChild(config: {class?: string, content?: string, node: string}) {
    const parent: any = this.findComponentTarget(this.component.data);

    this.createDomElement(
      parent, config.class!, config.content!, config.node, 
      this.rootDomElement
    );
  }

  transformContent(transform: Function) {
    const initialContent: string = this.component.data.content!;
    let result: string = initialContent;

    const element: any = this.findComponentTarget(this.component.data);
    const node = this.#searchNode(element);
    
    if (initialContent) {
      this.component.data.content = !transform(initialContent) ? result : transform(initialContent);
      result = this.component.data.content!;
    }; 
    node.innerHTML = result;
  }
}