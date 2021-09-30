function genRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function modules (value) {
    var possibleError = genRandom(1,4);
    if (possibleError == 4) {
        value = value + 1 
    }
    arrayResults.push(value);
}

function mean (array) {
    var mean = 0
    let sum = array.reduce((a,b) => a + b, 0);
    mean = sum / array.length;
    return mean;
}

function range(array) {
    var min = Math.min(...array);
    var max = Math.max(...array);
   
    var range = max - min
    return range
}

function median (array) {
    const arraySorted = array.sort((a, b ) => a - b);
    console.table(array);
    return arraySorted.length % 2 === 0 ? (arraySorted[arraySorted.length/2 - 1] + arraySorted[arraySorted.length/2]) / 2 : arraySorted[Math.floor(arraySorted.length/2)];
}

function mode(array) {
    const obj = {};
    array.forEach(number => {
      if (!obj[number]) {
        obj[number] = 1;
      } else {
        obj[number] += 1;
      }
    });
    
    let highestValue = 0;
    let highestValueKey = -Infinity;
  
    for (let key in obj) {
      const value = obj[key];
      if (value > highestValue) {
        highestValue = value;
        highestValueKey = key;
      }
    }

    return Number(highestValueKey);
  }

var VALUE_CALC = genRandom(1,10);
const DOUBLE_VALUE = VALUE_CALC + VALUE_CALC;
const NUMBER_OF_RUNS = genRandom(1,5);

var arrayResults = Array();

for (i=0; i<NUMBER_OF_RUNS; i++){
    modules(VALUE_CALC, DOUBLE_VALUE);
}


// var mode = mode(arrayResults)
// var range = range(arrayResults)
// var median = median(arrayResults);
// var meanValue = mean(arrayResults, NUMBER_OF_RUNS);
// alert(mode);
