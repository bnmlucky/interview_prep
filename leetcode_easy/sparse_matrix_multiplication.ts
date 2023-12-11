function multiply(A: number[][], B: number[][]): number[][] {
    const rowsA: number = A.length;
    const colsA: number = A[0].length;
    const colsB: number = B[0].length;

    // Initialize the result matrix with zeros
    const result: number[][] = Array.from({ length: rowsA }, () => Array(colsB).fill(0));

    // Iterate through each element in A
    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsA; j++) {
            // If the element in A is non-zero, perform multiplication with corresponding elements in B
            if (A[i][j] !== 0) {
                for (let k = 0; k < colsB; k++) {
                    result[i][k] += A[i][j] * B[j][k];
                }
            }
        }
    }

    return result;
}
/*
Explanation:

Matrix Dimensions: Obtain the dimensions of matrices A and B. The number of columns in A (colsA) should be equal to the number of rows in B for matrix multiplication to be defined.

Result Matrix Initialization: Initialize the result matrix with zeros. The result matrix will have the same number of rows as A and the same number of columns as B.

Matrix Multiplication:

Iterate through each element in matrix A.
Check if the current element in A is non-zero. If it is, perform the multiplication with the corresponding elements in matrix B.
The nested loop iterates over the columns of B. For each non-zero element in A, multiply it with the corresponding element in B and accumulate the result in the appropriate position in the result matrix.
Return Result: Return the computed result matrix.

This TypeScript solution is essentially the same as the JavaScript solution, with the addition of type annotations for the function parameters and variables (A, B, rowsA, colsA, colsB, result, i, j, and k). TypeScript adds static typing, which enhances code readability and catches potential errors during development.

The time complexity of this solution is O(rowsA * colsA * colsB), where rowsA is the number of rows in A, colsA is the number of columns in A, and colsB is the number of columns in B. The space complexity is O(rowsA * colsB) for the result matrix.
*/