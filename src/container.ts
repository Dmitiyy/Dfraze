import { DfrazeBase } from "./lib";
import { panelCard } from "./panelCard";

export const ContainerComponent = (base: DfrazeBase) => {
  const mainContainer = base.createComponent({name: 'mainContainer'});
  mainContainer.baseConfig({node: 'div', class: 'container'});

  const panel = mainContainer.createChild({node: 'div', class: 'panel'});

  const cardsData = [
    {title: 'Thor', image: 'images/thor-bg.jpg'},
    {title: 'Spider Man', image: 'images/spider-bg.jpg'},
    {title: 'Black widow', image: 'images/black-bg.jpg'},
    {title: 'Captain America', image: 'images/cap-bg.jpg'},
  ];

  cardsData.forEach((item, index) => {panelCard(panel, item, index)});
}