import { ContainerComponent } from "./container";
import { DfrazeBase } from "./lib";

const base = new DfrazeBase(document.querySelector('.dfraze-root')!);

ContainerComponent(base);