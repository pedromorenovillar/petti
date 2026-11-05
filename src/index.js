import '@/style/styles.css';
import '@/style/normalize.css';
import { norDa } from '@/nor-da';
import { lana } from '@/lana';
import { musika } from '@/musika';
import { abestia } from '@/abestia';

// DOM elements
const content = document.querySelector('#content');
const work = document.querySelector('#lana');
const who = document.querySelector('#norda');
const music = document.querySelector('#musika');
const song = document.querySelector('#abestia');

function clearContent() {
  content.textContent = '';
}

who.addEventListener('click', () => {
  clearContent();
  norDa();
});

work.addEventListener('click', () => {
  clearContent();
  lana();
});

music.addEventListener('click', () => {
  clearContent();
  musika();
});

song.addEventListener('click', () => {
  clearContent();
  abestia();
});

norDa();
