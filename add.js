function add(matrix1, matrix2) {
    var result = [];

    // for matrices with the same length
    for(var i = 0; i < matrix1.length; i++) {
        result.push([]);
        for(var j = 0; j < matrix2.length; j++) {
            result[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }
    return result;
}

var a = [ [1, 2, 3], 
          [4, 5, 6],
          [7, 8, 9] ]

var b = [ [9, 8, 7],
          [6, 5, 4],
          [3, 2, 1] ]

console.log(add(a, b));
