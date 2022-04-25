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
    this.component.data!.attributes = [...attributes];
  }

  createChild(config: {class?: string, content?: string, node: string}) {
    const result = this.createElemChild(this.component, config, this.rootDomElement);
    this.component.data!.children = [{...result}];
    
    return new DfrazeChild(result, this.rootDomElement);
  }

  transformContent(transform: Function) {
    this.transformElemContent(this.component, transform);
  }

  render() {
    // console.log('Component: ', this.component);
    this.subData.subscribe(observer => {
      console.log(observer);
    })
  }
}