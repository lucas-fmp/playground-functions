/* eslint-disable sonarjs/cognitive-complexity */
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

// Desafio 9
function encode(string) {
  let encoder = '';
  encoder = string.replace(/a/g, 1);
  encoder = encoder.replace(/e/g, 2);
  encoder = encoder.replace(/i/g, 3);
  encoder = encoder.replace(/o/g, 4);
  encoder = encoder.replace(/u/g, 5);
  return encoder;
}

function decode(string) {
  let decoder = '';
  decoder = string.replace(/1/g, 'a');
  decoder = decoder.replace(/2/g, 'e');
  decoder = decoder.replace(/3/g, 'i');
  decoder = decoder.replace(/4/g, 'o');
  decoder = decoder.replace(/5/g, 'u');
  return decoder;
}

// Desafio 10
// eslint-disable-next-line max-lines-per-function
function techList(techNames, name) {
  let object = [];
  for (let i = 0; i < techNames.length; i += 1) {
    object.push(
      {
        tech: techNames[i],
        name,
      },
    );
  }
  function compare(a, b) {
    if (a.tech < b.tech) {
      return -1;
    }
    if (a.tech > b.tech) {
      return 1;
    }
    return 0;
  }
  object.sort(compare);

  if (object.length !== 0) {
    return object;
  }
  return 'Vazio!';
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
