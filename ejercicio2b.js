function multiplyMatrices(array1, array2) {
    var result = [];
    for (var i = 0; i < array1.length; i++) {
        result[i] = [];
        for (var j = 0; j < array2[0].length; j++) {
            var sum = 0;
            for (var k = 0; k < array1[0].length; k++) {
                sum += array1[i][k] * array2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

const array1 = [
    [1, 3, 5],
    [7, 9, 7],
    [5, 3, 1],
];

const array2 = [
    [2, 4, 6],
    [8, 10, 8],
    [6, 4, 2],
];

var mResult = multiplyMatrices(array1, array2);

console.log(mResult)

var newResult = mResult.toString();

console.log(newResult);

function addLeadingZeros(mResult, targetLength) {
    return mResult.toString().padStart(targetLength, '0');
}

/* var mResult = multiplyMatrices(array1, array2); */

console.log(addLeadingZeros(mResult, 3));

const result = newResult.map(Number)


/* const result = newResult.map(str => str.padStart(3, '0')); */

/* const result = newResult.padStart(5, '0'); */
console.log(result);
console.log('22'.padStart(3, '0'));
