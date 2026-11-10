const quotes = [
  { text: 'The secret of getting ahead is getting started.', author: 'Mark Twain' },
  { text: 'Adopt the pace of nature: her secret is patience.', author: 'Ralph Waldo Emerson' },
  { text: 'It is never too late to be what you might have been.', author: 'George Eliot' },
  { text: 'The journey of a thousand miles begins with one step.', author: 'Lao Tzu' },
  { text: 'Well done is better than well said.', author: 'Benjamin Franklin' },
  { text: 'The best way out is always through.', author: 'Robert Frost' },
  { text: 'Nothing is worth more than this day.', author: 'Johann Wolfgang von Goethe' },
  { text: 'No act of kindness, no matter how small, is ever wasted.', author: 'Aesop' },
  { text: 'The beginning is the most important part of the work.', author: 'Plato' },
  { text: 'Happiness depends upon ourselves.', author: 'Aristotle' },
  { text: 'Difficulties strengthen the mind, as labor does the body.', author: 'Seneca' },
  { text: 'A little while often makes a great difference.', author: 'Proverb' },
  { text: 'Energy and persistence conquer all things.', author: 'Benjamin Franklin' },
  { text: 'The only way to have a friend is to be one.', author: 'Ralph Waldo Emerson' },
  { text: 'Nothing will work unless you do.', author: 'Maya Angelou' },
  { text: 'Act as if what you do makes a difference. It does.', author: 'William James' },
  { text: 'Simplicity is the ultimate sophistication.', author: 'Leonardo da Vinci' },
  { text: 'To improve is to change; to be perfect is to change often.', author: 'Winston Churchill' }
];

const featuredQuote = document.querySelector('#featured-quote');
const featuredAuthor = document.querySelector('#featured-author');
const newQuoteButton = document.querySelector('#new-quote');
const quoteGrid = document.querySelector('#quote-grid');
const quoteCount = document.querySelector('#quote-count');

function chooseRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function showFeaturedQuote() {
  const quote = chooseRandomQuote();
  if (featuredQuote && featuredAuthor) {
    featuredQuote.textContent = `“${quote.text}”`;
    featuredAuthor.textContent = `— ${quote.author}`;
  }
}

if (featuredQuote && featuredAuthor) {
  showFeaturedQuote();
  newQuoteButton?.addEventListener('click', showFeaturedQuote);
}

if (quoteGrid) {
  quoteGrid.innerHTML = quotes.map((quote, index) => `
    <article class="quote-card">
      <span class="quote-card-number">${String(index + 1).padStart(2, '0')}</span>
      <span class="quote-mark" aria-hidden="true">“</span>
      <blockquote>${quote.text}</blockquote>
      <p>— ${quote.author}</p>
    </article>
  `).join('');
  if (quoteCount) quoteCount.textContent = `${quotes.length} THOUGHTS`;
}
