function multiply(matrix1, matrix2) {
    var result = [];
    for(var i = 0; i < matrix1.length; i++) {
        result.push([]);
        for(var j = 0; j < matrix1.length; j++) {
            var sum = 0;
            for(var k = 0; k < matrix2.length; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}


var a = [ [1, 2, 3],
          [4, 5, 6] ]

var b = [ [7, 8], 
          [9, 10],
          [11, 12] ]

console.log(multiply(b, a));
