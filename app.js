function genRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function modules (value) {
    var possibleError = genRandom(1,4);
    if (possibleError == 4) {
        value = value + 0.5; 
    }
    let DOUBLE_VALUE = value + value;
    arrayResults.push(DOUBLE_VALUE);
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

function standardDeviation(array) {
  var standard = math.std(array);
  return standard;
}

var VALUE_CALC = genRandom(1,10);
const NUMBER_OF_RUNS = 3;
var voter = Array();

var arrayResults = Array();

for (i=0; i<NUMBER_OF_RUNS; i++){
    modules(VALUE_CALC);
}

var msg = ``;
var mean = mean(arrayResults);
var range = range(arrayResults);
var standard = standardDeviation(arrayResults);

if(Number.isInteger(mean)) {
  voter.push(true);
} else {
  voter.push(false);
}

if(range === 0) {
  voter.push(true);
} else {
  voter.push(false);
}

if(standard === 0) {
  voter.push(true);
} else {
  voter.push(false);
}

for (i=0; i<3; i++) {
  if(voter[i] == false) {
    msg = `Voter found an error`;
  } 
}

if(msg === `` ){
  msg = `Voter not found an error`;
}
 
console.table(arrayResults)

let infoDiv = document.getElementById('info');
let number = document.getElementById('number');
let occurances = document.getElementById('occurances');
let meanDiv = document.getElementById('mean');
let rangeDiv = document.getElementById('range');
let sdDiv = document.getElementById('sd');
let msgDiv = document.getElementById('msg');

number.innerHTML = number.textContent + VALUE_CALC;
occurances.innerHTML = occurances.textContent + NUMBER_OF_RUNS;

meanDiv.innerHTML = meanDiv.textContent + mean;
rangeDiv.innerHTML = rangeDiv.textContent + range;
sdDiv.innerHTML = sdDiv.textContent + standard;

msgDiv.innerHTML = msg;

// infoDiv.style.visibility='hidden';