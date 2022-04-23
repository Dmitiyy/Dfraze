import { Common } from "./common";
import { ComponentChild, CreatedElement } from "./types";

export class DfrazeChild extends Common {
  private child: ComponentChild;
  
  constructor(private mainConfig: CreatedElement) {
    super();
    this.child = {data: {...this.mainConfig}};
  }

  render() {
    console.log(this.child.data);
  }
}