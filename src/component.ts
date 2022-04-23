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
    this.changeElemAttr(this.component, attributes);
  }

  createChild(config: {class?: string, content?: string, node: string}) {
    const result = this.createElemChild(this.component, config, this.rootDomElement);
    return new DfrazeChild(result);
  }

  transformContent(transform: Function) {
    this.transformElemContent(this.component, transform);
  }
}