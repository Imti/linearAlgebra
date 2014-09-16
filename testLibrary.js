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

function multiply(matrix1, matrix2) {
    var result = [];
    for(var i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for(var j = 0; j < matrix2[0].length; j++) {
            var sum = 0;
            for(var k = 0; k < matrix1[0].length; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

function subtract(matrix1, matrix2) {
    var result = [];

    // for matrices with the same length
    for(var i = 0; i < matrix1.length; i++) {
        result.push([]);
        for(var j = 0; j < matrix2.length; j++) {
            result[i][j] = matrix1[i][j] - matrix2[i][j];
        }
    }
    return result;
}

function inverse(matrix) {

}

function findDeterminant(matrix) {
    if(matrix.length === 2) 
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    
    // iterate through first row
        // multiply each number by the determinant of the matrix formed by taking each column not in that row
    
    var bottomMatrix = matrix.slice(1, matrix.length);

    for(var i = 0; i < matrix[0].length; i++) {
        innerMatrix = [];          
        for(var j = 0; j < bottomMatrix.length; j++) {
            if(i !== j) innerMatrix.push(bottomMatrix[j]);
            console.log(bottomMatrix);
        }
    }
    console.log()
}


var matrix = [ [1, 2, 3],
               [4, 5, 6],
               [7, 8, 9] ];

var matrix2 = [ [1, 2],
                [3, 4] ];

findDeterminant(matrix2);



