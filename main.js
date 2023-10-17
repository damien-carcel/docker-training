import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/league.css';
/* Code syntax highlighting */
import 'reveal.js/plugin/highlight/monokai.css';

import './style.css';

import Reveal from 'reveal.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
import RevealNotes from 'reveal.js/plugin/notes/notes';

const deck = new Reveal({
  plugins: [RevealHighlight, RevealNotes],
});
deck.initialize({
  width: 1280,
  height: 720,
  transition: 'fade',
});
