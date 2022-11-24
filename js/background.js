const images = [
  '1.jpeg',
  '2.jpeg',
  '3.jpeg',
  '4.jpeg',
  '5.jpeg',
  '6.jpeg',
  '7.jpeg',
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
console.log(chosenImage);

// const bgImage = document.createElement('img');

// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);

window.addEventListener('load', () => {
  document.body.style.backgroundImage = `url('../img/${chosenImage}')`;
  document.body.style.backgroundSize = 'cover';
});
