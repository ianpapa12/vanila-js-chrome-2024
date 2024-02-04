const quotes = [
  {
    quote: "When you have faults, do not fear to abandon them.",
    author: "Confucius",
  },
  {
    quote: "Age is no guarantee of maturity.",
    author: "Lawana Blackwell",
  },
  {
    quote:
      "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quote: "The die is cast.",
    author: "Julius caesar",
  },
  {
    quote: "Only I can change me life, no one can do it for me.",
    author: "Carol Burnett",
  },
  {
    quote: "Life is unfair, get used to it.",
    author: "Bill Gates",
  },
  {
    quote:
      "Life is a mountain. Your goal is to find your path, not to reach the top.",
    author: "Maxime Lagacé",
  },
  {
    quote:
      "All you need in this life is ignorance and confidence, then success is sure.",
    author: "Mark Twain",
  },
  {
    quote:
      "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    author: "Winston S. Churchill",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
