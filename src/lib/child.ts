import { Common } from "./common";
import { ComponentChild, ComponentGroup, CreatedElement } from "./types";

export class DfrazeChild extends Common {
  public child: ComponentChild;
  
  constructor(
    private mainConfig: CreatedElement, private rootDomElement: HTMLDivElement,
    private parentComponent: ComponentGroup | ComponentChild
  ) {
    super();
    this.child = {data: {...this.mainConfig}};
  }

  changeAttr(attributes: Array<{key: string; value: string}>) {
    const attrs = !this.child.data!.attributes! ? [] : this.child.data!.attributes!;
    const result = [...attrs, ...attributes];

    this.changeElemAttr(this.child, result);
    this.child.data!.attributes = result;

    this.#changeChildData({key: 'attributes', value: result});
  }

  createChild(config: {class?: string, content?: string, node: string}) {
    const result = this.createElemChild(this.child, config, this.rootDomElement);
    let existingChilds: any = [];
    
    const {data} = this.child;
    if (data && data.children! && data.children!.length !== 0) {existingChilds = [...data.children!]};
    
    this.child.data!.children = [...existingChilds, {...result}];

    this.#changeChildData({key: 'children', value: [...existingChilds, {...result}]});
    return new DfrazeChild(result, this.rootDomElement, this.child);
  }

  transformContent(transform: Function) {
    const result = this.transformElemContent(this.child, transform);
    this.#changeChildData({key: 'content', value: result});
  }

  #changeChildData(data: {key: string, value: any}) {
    const children = this.parentComponent.data?.children!;

    for (let item of children) {
      if (item.target === this.child.data?.target) {Reflect.set(item, data.key, data.value)};
    }
  }
}