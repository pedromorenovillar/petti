import { displayItems } from './display-description-items';

export function lana() {
  const content = document.querySelector('#content');

  let header = document.createElement('h1');
  header.textContent = '25 urte lanean';

  let img = document.createElement('img');
  img.className = 'work-pic';

  content.appendChild(header);
  content.appendChild(img);

  const description = [
    '1999an argitaratu zuen bere lehen diskoa',
    '12 disko kaleratu ditu',
    'Azkena "Manipulazio estrategiak" da (2020an)',
  ];

  displayItems(description);
}
