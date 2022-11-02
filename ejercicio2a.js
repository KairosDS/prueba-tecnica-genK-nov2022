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