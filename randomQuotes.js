let quoteButton = document.getElementById("quote-button");
let quoteText = document.getElementById("quote-text");

const quotes = [
  "The purpose of education is to turn mirrors into windows. - Sydney J. Harris",
  "Life is easier when you live it the hard way. - Martin Meadows",
  "The struggle itself toward the heights is enough to fill a man\'s heart. One must imagine Sisyphus happy.",
  "Fear is only in our minds.",
  "The harder you work, the harder it is to surrender. - Vince Lombardi",
  "Someone who works hard… can never beat someone who enjoys himself. - Baki",
  "We are what we repeatedly do. Excellence, then, is not an act, but a habit. - Aristotle",
  "A man who asks is a fool for five minutes. A man who never asks is a fool for life. - Chinese proverb",
  "Work like a slave. Command like a king. Create like a God. - Constantin Brancusi",
  "Life is easier when you live it the hard way.",
  "To follow, without halt, one aim: there is the secret to success. — Anna Pavlova, Russian ballet dancer",
  "Simplicity is the ultimate sophistication. - Leonardo DaVinci",
  "You are what you do, not what you say you\'ll do. - Carl Jung",
  "A goal without a plan is just a wish. ― Antoine De Saint-Exupery",
  "I recognize that winning is not everything, but the effort to win is.",
  "When we tune out the opinions, expectations, and obligations of the world around us, we begin to hear ourselves.",
  "When I face the desolate impossibility of writing 500 pages, a sick sense of failure falls on me and I know I can never do it. Then, gradually, I write one page and then another. One day\'s work is all I can permit myself to contemplate. - John Steinbeck",
  "For in refusing to give up, we refuse to give in, not just to oppressive circumstances, but to the moment-by-moment experience of suffering itself. - Alex Lickerman",
  "Life isn't about finding yourself. Life is about creating yourself. - George Bernard Shaw",
  "I hate loneliness but it loves me. - unknown",
  "The purpose of the exploration of an Essentialist is to discern the vital few from the trivial many. - Greg McKown",
  "If you want to improve, be content to be thought foolish and stupid - Epictetus"
];


function randomQuote() {
  let randomNumber = Math.floor(Math.random() * (quotes.length));
  quoteText.innerText = quotes[randomNumber];
}

quoteButton.addEventListener("click", randomQuote);
