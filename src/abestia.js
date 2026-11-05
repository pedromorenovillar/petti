import { displayItems } from './display-description-items';

export function abestia() {
  const content = document.querySelector('#content');

  let header = document.createElement('h1');
  header.textContent = 'Eman Eta Hartu';

  let iframe = document.createElement('iframe');
  iframe.className = 'video-pic';
  iframe.src = 'https://www.youtube.com/embed/6G4EQrQgRlY?list=RD6G4EQrQgRlY';
  iframe.title = 'Petti - Eman eta Hartu (On)';
  iframe.frameborder = '0';
  iframe.allow =
    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.referrerPolicy = 'strict-origin-when-cross-origin';
  iframe.allowFullscreen = true;

  content.appendChild(header);

  let lyricEU = `
Emaile txarrari beala<br>
<br>
Ezer eman orduko<br>
<br>
Zer emana bukatzen<br>
<br>
Emaile ona ez da inoiz<br>
<br>
Emateaz eta emateaz aspertzen<br>
<br>
Beti ematen eta eskuak<br>
<br>
Eskuak beti gainezka, inoiz ez husten<br>
<br>
Hustu ahala ehun halakotz<br>
<br>
Baizaizkio betetzen<br>
<br>
Hartzaile onak egiten du emaile ona<br>
<br>
Emanez eskertzen baitu hartu duena<br>
<br>
Norengandik duen ikusteak<br>
<br>
Norentzat behar duen<br>
<br>
Dio erakusten<br>`;

  const description = [
    'Etxeko Uztarekin eginda',
    'Joxan Artzek hitzak idatzi zituen',
    'Joxan Artzek "Txoria txori" ere idatzi nuen',
  ];

  displayItems(description);

  const lyricContainer = document.createElement('div');
  lyricContainer.className = 'lyric-container';

  const lyricBasque = document.createElement('div');
  lyricBasque.className = 'lyric-basque';
  lyricBasque.innerHTML = lyricEU;

  lyricContainer.appendChild(lyricBasque);

  // video and lyrics side by side
  const mediaRow = document.createElement('div');
  mediaRow.className = 'media-row';
  mediaRow.appendChild(iframe);
  mediaRow.appendChild(lyricContainer);
  content.appendChild(mediaRow);
}
