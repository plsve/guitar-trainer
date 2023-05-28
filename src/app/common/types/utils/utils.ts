export const Utils = {
    swapMatrixElements(matrix: any[][]): any[][] {
        const numRows = matrix.length;
        const numCols = matrix[0].length;
      
        // Check if the matrix is rectangular
        for (let i = 1; i < numRows; i++) {
          if (matrix[i].length !== numCols) {
            throw new Error('Invalid matrix: Rows have different lengths.');
          }
        }
      
        // Swap elements
        const swappedMatrix: any[][] = [];
        for (let i = 0; i < numCols; i++) {
          const newRow: any[] = [];
          for (let j = 0; j < numRows; j++) {
            newRow.push(matrix[j][i]);
          }
          swappedMatrix.push(newRow);
        }
      
        return swappedMatrix;
      }
}