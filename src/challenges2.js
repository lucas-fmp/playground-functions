/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
// Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let zero = 0;
  let one = 0;
  let two = 0;
  let three = 0;
  let four = 0;
  let five = 0;
  let six = 0;
  let seven = 0;
  let eight = 0;
  let nine = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === 0) {
      zero += 1;
    }
    if (numbers[i] === 1) {
      one += 1;
    }
    if (numbers[i] === 2) {
      two += 1;
    }
    if (numbers[i] === 3) {
      three += 1;
    }
    if (numbers[i] === 4) {
      four += 1;
    }
    if (numbers[i] === 5) {
      five += 1;
    }
    if (numbers[i] === 6) {
      six += 1;
    }
    if (numbers[i] === 7) {
      seven += 1;
    }
    if (numbers[i] === 8) {
      eight += 1;
    }
    if (numbers[i] === 9) {
      nine += 1;
    }
  }

  if (zero >= 3 || one >= 3 || two >= 3 || three >= 3 || four >= 3 || five >= 3 || six >= 3 || seven >= 3 || eight >= 3 || nine >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  let phoneNumber = '(xx) xxxxx-xxxx';

  for (let number of numbers) {
    if (number < 0 || number > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    phoneNumber = phoneNumber.replace('x', number);
  }

  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sumAB = lineA + lineB;
  let sumAC = lineA + lineC;
  let sumBC = lineB + lineC;
  let subtractionAB = Math.abs(lineA - lineB);
  let subtractionAC = Math.abs(lineA - lineC);
  let subtractionBC = Math.abs(lineB - lineC);
  if (lineA < sumBC && lineA > subtractionBC) {
    if (lineB < sumAC && lineB > subtractionAC) {
      if (lineC < sumAB && lineC > subtractionAB) {
        return true;
      }
      return false;
    }
    return false;
  }
  return false;
}

// Desafio 13
function hydrate(drinks) {
  let numbersDrinks = '';
  numbersDrinks = drinks.replace(/[^0-9]/g, '');
  let array = numbersDrinks.split('');
  let arrayNumbers = array.map(Number);
  let sum = 0;
  for (let number of arrayNumbers) {
    sum += number;
  }
  if (sum === 1) {
    return '1 copo de água';
  }
  return `${sum} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
