import { Common } from "./common";
import { DfrazeChild } from "./child";
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
    const attrs = !this.component.data!.attributes! ? [] : this.component.data!.attributes!;

    if (attributes.length === 1) {
      this.component.data?.target?.setAttribute(attributes[0].key, attributes[0].value);
    } else {
      this.changeElemAttr(this.component, attributes);
    }

    this.component.data!.attributes = [...attrs, ...attributes];
  }

  createChild(config: {class?: string, content?: string, node: string}) {
    const result = this.createElemChild(this.component, config, this.rootDomElement);
    let existingChilds: any = [];
    
    const {data} = this.component;
    if (data && data.children! && data.children!.length !== 0) {existingChilds = [...data.children!]};

    this.component.data!.children = [...existingChilds, {...result}];
    return new DfrazeChild(result, this.rootDomElement, this.component);
  }

  transformContent(transform: Function) {
    this.transformElemContent(this.component, transform);
  }
}