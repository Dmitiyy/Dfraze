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
    this.child.data!.children = [{...result}];
    
    return new DfrazeChild(result, this.rootDomElement);
  }

  transformContent(transform: Function) {
    this.transformElemContent(this.child, transform);
  }

  render() {
    // console.log('Child: ', this.child.data);
    this.subData.subscribe(observer => {
      console.log(observer);
    })
  }
}