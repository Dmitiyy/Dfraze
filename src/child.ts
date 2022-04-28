import { Common } from "./common";
import { ComponentChild, CreatedElement } from "./types";

export class DfrazeChild extends Common {
  private child: ComponentChild;
  
  constructor(private mainConfig: CreatedElement, private rootDomElement: HTMLDivElement) {
    super();
    this.child = {data: {...this.mainConfig}};
  }

  changeAttr(attributes: Array<{key: string; value: string}>) {
    this.changeElemAttr(this.child.data, attributes);
    this.child.data!.attributes = [...attributes];
  }

  createChild(config: {class?: string, content?: string, node: string}) {
    const result = this.createElemChild(this.child, config, this.rootDomElement);
    let existingChilds: any = [];
    
    const {data} = this.child;
    if (data && data.children! && data.children!.length !== 0) {existingChilds = [...data.children!]};
    
    this.child.data!.children = [...existingChilds, {...result}];
    return new DfrazeChild(result, this.rootDomElement);
  }

  transformContent(transform: Function) {
    this.transformElemContent(this.child, transform);
    this.changeChildData();

  }

  render() {
    // console.log('Child: ', this.child.data);
  }
}