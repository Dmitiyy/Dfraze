export interface DomConfig {
  parent?: Element | string;
  class?: string;
  content?: string; 
  transformContent?: Function; 
  attributes?: Array<{key: string; value: string}>;
}

export interface ComponentGroupElement extends DomConfig {
  node?: string;
  children?: Array<ComponentGroupElement>;
}

export interface ComponentGroup {
  main: ComponentGroupElement, firstLevel?: Array<ComponentGroupElement>
}

export interface Component {
  name: string, 
  group?: ComponentGroup
}
