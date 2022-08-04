const quotes = [
    {
        quotes: "You know that children are growing up when they start asking questions that have answers.",
        author: "John J. Plomp",
    },
    {
        quotes: "Learning without thought is labor lost; thought without learning is perilous.",
        author:"Confucius",
    },
    {
        quotes: "Seeing much, suffering much, and studying much, are the three pillars of learning.",
        author: "Benjamin Disraeli",
    },
    {
        quotes: "That is what learning is. You suddenly understand something you've understood all your life, but in a new way.",
        author: "Doris Lessing",
    },
    {
        quotes: "Life is not fair; get used to it.",
        author: "Bill Gates",
    },
    {
        quotes: "Life is pleasant. Death is peaceful. It's the transition that's troublesome.",
        author: "Isaac Asimov",
    },
    {   
        quotes: "They must often change who would be constant in happiness or wisdom.",
        author: "Confucius",
    },
    {
        quotes: "The dead might as well try to speak to the living as the old to the young.",
        author: "Willa Cather",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;
