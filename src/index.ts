interface ComponentGroupElement {
  node?: string;
  class?: string;
  content?: string;
  func?: Function;
  children?: Array<ComponentGroupElement>;
}

class DfrazeBase {
  constructor(private rootDomElement: HTMLDivElement) {}

  createDomElement(
    node: string, config: {parent?: Element, class?: string, content?: string, func?: Function}, 
  ) {
    if (node.length !== 0) {
      const element: HTMLElement = document.createElement(node);      
      
      if (Reflect.ownKeys(config).length !== 0) {
        if (config.class) {element.classList.add(config.class)};
        if (config.content) {
          element.innerHTML = config.func ? config.func(config.content) : config.content;
        };
      };

      (config.parent || this.rootDomElement).append(element);
    }
  }

  createComponent(
    config: {name: string, group?: {
      main: ComponentGroupElement, firstLevel?: Array<ComponentGroupElement>
    }}
  ) {
    console.log(config);
  }
}

const base = new DfrazeBase(document.querySelector('.dfraze-root')!);

base.createDomElement('h2', {
  parent: document.querySelector('.dfraze-root')!,
  class: 'test-class', 
  content: 'I love programming',
  func(content: string) {return content.toUpperCase()}
});

base.createDomElement('div', {class: 'wrap'});
base.createDomElement('h3', {parent: document.querySelector('.wrap')!, content: 'It is inside div'});

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