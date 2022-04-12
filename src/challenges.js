// Desafio 1
function compareTrue(first, second) {
  if (first === true && second === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let array = [];
  array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let first = array[0];
  let last = array[array.length - 1];
  let string = '';
  string = `${last}, ${first}`;
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsWins = wins * 3;
  let pointsTies = ties * 1;
  let points = pointsWins + pointsTies;
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let max = Math.max(...numbers);
  let aux = 0;
  let count = 0;
  for (let number of numbers) {
    aux = number;
    if (aux === max) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mouseCat1 = cat1 - mouse;
  let mouseCat2 = cat2 - mouse;
  if (Math.abs(mouseCat1) < Math.abs(mouseCat2)) {
    return 'cat1';
  }
  if (Math.abs(mouseCat1) > Math.abs(mouseCat2)) {
    return 'cat2';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
// eslint-disable-next-line complexity
function fizzBuzz(numbers) {
  let newArray = [];
  for (let number of numbers) {
    if (number % 3 === 0 && number % 5 !== 0) {
      newArray.push('fizz');
    }
    if (number % 5 === 0 && number % 3 !== 0) {
      newArray.push('buzz');
    }
    if (number % 3 === 0 && number % 5 === 0) {
      newArray.push('fizzBuzz');
    }
    if (number % 3 !== 0 && number % 5 !== 0) {
      newArray.push('bug!');
    }
  }
  return newArray;
}
console.log(fizzBuzz([3, 3, 30, 6, 20, 7]));

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
