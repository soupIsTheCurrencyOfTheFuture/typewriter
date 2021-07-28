const transpose = function(matrix) {
    // Put your solution here
    let newMatrixLength = matrix[0].length;
    let newMatrix = []

    if (matrix.length === 1) {
        newMatrix = [] 
        for (let i = 0; i < matrix[0].length; i++) {
            newMatrix.push([matrix[0][i]]);
        }
        return newMatrix
    }
    
    for (let i = 0; i < matrix.length; i++) {
        newMatrix.push([])
        for (let j = 0; j < matrix.length; j++) {
            newMatrix[i].push(matrix[j][i])
        }
    }
    newMatrix.length = newMatrixLength
    return newMatrix
};
// const transpose = function(matrix) {
//   let newArray = [];
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       if(!newArray[i]) {
//         newArray.push([]);
//       };
//       newArray[i].push(matrix[j][i])
//     }
//   }
//   return newArray;
// };

  
  // Do not edit this function.
  const printMatrix = (matrix) => {
      for (const row of matrix) {
          for (const el of row) {
              process.stdout.write(el + " ");
          }
          process.stdout.write('\n')
      }
  }

  console.log(transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4]
  ]))
  
  // Do not edit this function.
  
  printMatrix(transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4]
  ]));
  
  console.log('----')
  
  printMatrix(transpose([
    [1, 2],
    [3, 4],
    [5, 6]
  ]));
  
  console.log('----')
  
  printMatrix(transpose([
    [1, 2, 3, 4, 5, 6, 7]
  ]));
  
