import { displayItems } from './display-description-items';

export function norDa() {
  const content = document.querySelector('#content');

  let header = document.createElement('h1');
  header.textContent = 'Petti';

  let img = document.createElement('img');
  img.className = 'profile-pic';

  content.appendChild(header);
  content.appendChild(img);

  const description = [
    'Musikari eta abeslari nafarra',
    'Jatorrizko izena Juan Luis Pérez Mitxelena da',
    'Beran jaio zen',
    '53 urte',
  ];

  displayItems(description);
}
