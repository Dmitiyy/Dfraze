import { Common } from "./common";
import { DfrazeComponent } from "./component";
import { Component, DomConfig } from "./types";

export class DfrazeBase extends Common {
  public components!: Array<Component>;

  constructor(private rootDomElement: HTMLDivElement) {
    super();
    this.components = [];
  }

  createElement(node: string, config: {parent?: string, class?: string, content?: string}) {
    if (node.length !== 0) {
      if (Reflect.ownKeys(config).length !== 0) {
        this.createDomElement(
          config.parent!, config.class!, config.content!, node, this.rootDomElement, 
        );
      };
    }
  }

  createComponent(config: Component) {
    const componentClass = new DfrazeComponent(this.rootDomElement);
    this.components.push({name: config.name, component: Object.assign(componentClass.component)});

    return componentClass;
  }

  deleteAllClasses(fromClassName: string, which: string) {
    this.deleteAllClassesCommon(fromClassName, which, this.components);
  }
}