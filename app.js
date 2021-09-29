function genRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var VALUE_CALC = genRandom(1,10);
const DOUBLE_VALUE = VALUE_CALC + VALUE_CALC;
const NUMBER_OF_RUNS = genRandom(1,20);

var arrayResults = Array();

function modules (value) {
    var possibleError = genRandom(1,4);
    if (possibleError == 4) {
        value = value + 1 
    }
    arrayResults.push(value);
}

for (i=0; i<10; i++){
    modules(VALUE_CALC, DOUBLE_VALUE);
}

console.table(arrayResults);