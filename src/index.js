module.exports = function toReadable (number) {
  const from0to19 = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  };

  const dozensWith0 = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
  };  

  numberArray = ('' + number).split('').map(Number);

  if ( numberArray.length === 3 ) {
    return (`${from0to19[numberArray[0]]} hundred`
          +`${numberArray[1] in dozensWith0 ? ' '+ dozensWith0[numberArray[1]] + ' ' + from0to19[numberArray[2]] : ' ' + from0to19[number % 100]}`).trim();
  }
  
  if ( numberArray.length === 2 ) {
    return (`${numberArray[0] in dozensWith0 ? ' '+ dozensWith0[numberArray[0]] + ' ' + from0to19[numberArray[1]] : ' ' + from0to19[number % 100]}`).trim();
  }

  if ( number === 0) return 'zero';

  return (`${from0to19[number % 100]}`).trim();
}
