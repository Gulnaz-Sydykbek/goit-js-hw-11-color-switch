/*const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const start = document.querySelector('button[data-action="start"]');
console.log(start);

start.addEventListener('click', onStart);

function onStart() {

  const intervalId = setInterval(() => {
    document.body.style.backgroundColor;
  }, 1000)
}


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const color = colors[randomIntegerFromInterval(colors.length - 1)]
console.log(color)

console.log(randomIntegerFromInterval);
  
console.log(colors.find(color => color));*/

//=========================================

  
colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


const refs = {
  startButton: document.querySelector('button[data-action="start"'),
  stopButton: document.querySelector('button[data-action="stop"'),
};

refs.startButton.addEventListener('click', onStart);
refs.stopButton.addEventListener('click', onStop);

let interval = null;

function onStart() {
  interval = setInterval(() => {
    makeRandomColor();
  }, 1000);

  refs.startButton.disabled = true;
  refs.stopButton.disabled = false;
}

function onStop() {
  clearInterval(interval);

  refs.startButton.disabled = false;
  refs.stopButton.disabled = true;
}

randomIntegerFromInterval = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

makeRandomColor = () => {
  const randomColor = randomIntegerFromInterval(colors.length - 1);
  const bodyColor = colors[randomColor];
  document.body.style.backgroundColor = bodyColor;
};
