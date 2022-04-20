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

  changeAttr(attributes: Array<{key: string; value: string}>) {
    if (this.component.data.class) {
      const foundDomElement = document.querySelector(`.${this.component.data.class}`);

      if (foundDomElement) {
        for (let attr of attributes) {foundDomElement.setAttribute(attr.key, attr.value)};
      }
    }  
  }

  createChild(config: {class?: string, content?: string, node: string}) {
    if (this.component.data.class) {
      this.createDomElement(
        `.${this.component.data.class}`, config.class!, config.content!, config.node, this.rootDomElement
      );
    }
    console.log(this.component.data);
    
  }

  transformContent(transform: Function) {
    const initialContent: string = this.component.data.content!;
    let result: string = initialContent;
    
    if (initialContent) {
      this.component.data.content = !transform(initialContent) ? result : transform(initialContent);
      result = this.component.data.content!;
    }; 

    document.querySelector(`.${this.component.data.class}`)!.innerHTML = result;
  }
}