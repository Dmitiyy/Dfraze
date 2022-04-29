import { Common } from "./common";
import { DfrazeComponent } from "./component";
import { Component, DomConfig } from "./types";

export class DfrazeBase extends Common {
  public components!: Array<Component>;

  constructor(private rootDomElement: HTMLDivElement) {
    super();
    this.components = [];
  }

  createElement(node: string, config: DomConfig) {
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
}

const base = new DfrazeBase(document.querySelector('.dfraze-root')!);

base.createElement('div', {class: 'wrap'});
base.createElement('h3', {parent: '.wrap', content: 'It is inside div'});

const firstComponent = base.createComponent({name: 'second'});
firstComponent.baseConfig({parent: '.wrap', content: 'hello', node: 'div'});

firstComponent.changeAttr([{key: 'id', value: 'testID'}]);
firstComponent.transformContent((content: string) => content.toUpperCase());

const myChild = firstComponent.createChild({
  node: 'section', class: 'childSection', content: 'child'
});

myChild.changeAttr([{key: 'id', value: 'asdf'}]);
myChild.transformContent(() => 'changed');

myChild.createChild({node: 'p', content: '...child'});