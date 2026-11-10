const machineButton = document.querySelector('#machine-button');
const machineMessage = document.querySelector('#machine-message');
const pressCount = document.querySelector('#press-count');
const toyFace = document.querySelector('#toy-face');

const reactions = [
  'That was wonderfully unnecessary.',
  'The button has been buttoned.',
  'A tiny moment, successfully wasted.',
  'The machine appreciates your curiosity.',
  'You did it. Nothing has changed.',
  'Important work. Absolutely no results.',
  'One more click for the little face?',
  'Still no purpose. Still pretty fun.'
];

let clicks = 0;
let lastReaction = -1;

machineButton?.addEventListener('click', () => {
  clicks += 1;
  if (pressCount) pressCount.textContent = String(clicks);

  let reactionIndex = Math.floor(Math.random() * reactions.length);
  if (reactionIndex === lastReaction) {
    reactionIndex = (reactionIndex + 1) % reactions.length;
  }
  lastReaction = reactionIndex;

  if (machineMessage) machineMessage.textContent = reactions[reactionIndex];
  toyFace?.classList.remove('is-reacting');
  requestAnimationFrame(() => toyFace?.classList.add('is-reacting'));
  window.setTimeout(() => toyFace?.classList.remove('is-reacting'), 460);
});
