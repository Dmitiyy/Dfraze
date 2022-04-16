import { Common } from "./common";
import { Component, ComponentGroup } from "./types";

export class DfrazeComponent extends Common {
  private group: ComponentGroup;

  constructor(private props: Component, private rootDomElement: HTMLDivElement) {
    super();
    this.group = {main: {}, firstLevel: []};
  }

  groupMain(config: {
    parent?: Element | string, class?: string, content?: string, node: string
  }) {
    const result = this.createDomElement(
      config.parent!, config.class!, config.content!, config.node, this.rootDomElement, 
    );

    this.group.main = {...result};
  }

  render() {
    console.log(this.props);  
  }
}