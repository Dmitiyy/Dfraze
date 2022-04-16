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
        const result = this.createDomElement(
          config.parent!, config.class!, config.content!, node, this.rootDomElement, 
        );
      };
    }
  }

  createComponent(config: Component) {
    this.components.push(config);
    return new DfrazeComponent({...config}, this.rootDomElement);
  }

  render() {
    console.log(this.components);
  }
}

const base = new DfrazeBase(document.querySelector('.dfraze-root')!);

base.createElement('h2', {
  parent: document.querySelector('.dfraze-root')!,
  class: 'test-class', 
  content: 'I love programming',
  attributes: [{key: 'class', value: 'test-2'}],
  transformContent(content: string) {return content.toUpperCase()}
});

base.createElement('div', {class: 'wrap'});
base.createElement('h3', {parent: '.wrap', content: 'It is inside div'});

base.createComponent({
  name: 'main',
  group: {
    main: {
      node: 'section',
      class: 'main-section',
      content: 'My first section',
      children: [
        {
          node: 'child',
          class: 'main-child',
          content: 'My first child',
        },
        {
          node: 'child',
          class: 'main-child',
          content: 'My second child',
        }
      ]
    }
  }
});

const firstComponent = base.createComponent({name: 'second'});
firstComponent.groupMain({parent: '.wrap', class: 'main-wrap', content: 'hello', node: 'div'});
firstComponent.render();

base.render();