const quotes = [
  '지금 공부 안 하면 더울 때 더운 데서 일하고 추울 때 추운 데서 일한다.',
  '늦었다고 생각할 때가 늦었다',
  '“내 너 그럴 줄 알았다” 알았으면 제발 미리 말 해줘라',
  '성공은 1% 재능과 99%의 빽',
  '내일도 할 수 있는 일을 굳이 오늘 할 필요 없다 ',
  '가는 말이 고우면 얕본다',
  '인생을 짧고... 열심히 해라',
  '꿈은 없고요 그냥 놀고싶습니다. ',
];

const quote = document.querySelector('#quote span:first-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.textContent = todaysQuote;
