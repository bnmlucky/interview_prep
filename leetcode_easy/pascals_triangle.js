/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 0) {
        return [];
    }

    const triangle = [[1]];

    for (let i = 1; i < numRows; i++) {
        const row = [1]; // Each row starts with 1

        for (let j = 1; j < i; j++) {
            row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
        }

        row.push(1); // Each row ends with 1
        triangle.push(row);
    }

    return triangle;
};

// Explanation:

// We start by checking if numRows is 0. If it is, we return an empty array since there are no rows to generate.

// We initialize the triangle array with the first row, which is always [1].

// We use a nested loop to generate each subsequent row of Pascal's Triangle. The outer loop runs from 1 to numRows - 1.

// Inside the outer loop, we initialize a new array row for the current row. Each row starts with 1.

// The inner loop (j) runs from 1 to i - 1 for each row, where i is the current row number. In each iteration, we calculate the value at the current position using the values from the previous row (triangle[i - 1][j - 1] and triangle[i - 1][j]) and push it to the row array.

// After the inner loop, we push 1 to the row array, as each row ends with 1.

// Finally, we push the generated row to the triangle array.

// After the outer loop completes, the triangle array represents Pascal's Triangle up to the specified number of rows.

// We return the triangle array as the final result.

// The time complexity of this algorithm is O(numRows^2), where numRows is the input parameter, as we generate each value in Pascal's Triangle once. The space complexity is O(numRows^2) as well, as we store all the values in the triangle.