import { DfrazeChild } from "./lib/child";

export const panelCard = (
  panel: DfrazeChild, config: {title: string, image: string}, index: number
) => {
  let activeCard = 0;

  const card = panel.createChild({node: 'div', class: 'panel__card'});
  const cardWrap = card.createChild({node: 'div', class: 'panel__card-wrap'});

  cardWrap.createChild({node: 'div', class: 'panel__card-line'});
  const bg = cardWrap.createChild({node: 'div', class: 'panel__card-bg'});
  
  bg.createChild({node: 'h2', content: config.title});
  card.changeAttr([{key: 'style', value: `background-image: url(${config.image})`}]);

  const checkAll = () => {
    if (activeCard === index) {
      document.querySelectorAll('.panel__card').forEach(item => {
        item.classList.remove('panel__card-active');
      });
      // card.child.data?.target?.classList.add('panel__card-active');
      card.changeAttr([{key: 'class', value: `${card.child.data?.class} ` + 'panel__card-active'}]);
    }
  }
  checkAll();

  card.child.data?.target?.addEventListener('click', () => {
    activeCard = index;
    checkAll();
  });
}

//TODO 1. Get items collection
//TODO 2. Change attrs separately