import { displayItems } from './display-description-items';

export function musika() {
  const content = document.querySelector('#content');

  let header = document.createElement('h1');
  header.textContent = 'Estiloa';

  let img = document.createElement('img');
  img.className = 'music-pic';

  content.appendChild(header);
  content.appendChild(img);

  const description = [
    'Rocka, folk eta bluesa egiten du',
    'Gitarlari aparta da',
    'Bakarlaria da, baina askotan taldearekin Etxeko Uzta jotzen du',
  ];

  displayItems(description);
}
