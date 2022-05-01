export interface DomConfig {
  parent?: Element | string;
  class?: string;
  content?: string; 
  attributes?: Array<{key: string; value: string}>;
}

export interface ComponentGroupElement extends DomConfig {
  node?: string;
  target?: HTMLElement;
  children?: Array<ComponentGroupElement>;
}

export interface ComponentGroup {
  data: ComponentGroupElement
}

export interface Component {
  name: string, 
  component?: ComponentGroup
}

export interface ComponentChild {
  data?: ComponentGroupElement
}

export interface CreatedElement {
  parent: any;
  class: string;
  content: string;
  node: string;
  target: HTMLElement;
}