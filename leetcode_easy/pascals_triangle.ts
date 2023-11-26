function generate(numRows: number): number[][] {
    if (numRows === 0) {
        return [];
    }

    const triangle: number[][] = [[1]];

    for (let i = 1; i < numRows; i++) {
        const row: number[] = [1]; // Each row starts with 1

        for (let j = 1; j < i; j++) {
            row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
        }

        row.push(1); // Each row ends with 1
        triangle.push(row);
    }

    return triangle;
}

// Explanation:

// The TypeScript solution is very similar to the JavaScript one, with the main difference being the addition of type annotations.

// We have a generate function that takes the number of rows (numRows) as a parameter and returns a 2D array of numbers representing Pascal's Triangle.

// We start by checking if numRows is 0. If it is, we return an empty array since there are no rows to generate.

// We initialize the triangle array with the first row, which is always [1].

// We use a nested loop to generate each subsequent row of Pascal's Triangle. The outer loop runs from 1 to numRows - 1.

// Inside the outer loop, we initialize a new array row for the current row. Each row starts with 1.

// The inner loop (j) runs from 1 to i - 1 for each row, where i is the current row number. In each iteration, we calculate the value at the current position using the values from the previous row (triangle[i - 1][j - 1] and triangle[i - 1][j]) and push it to the row array.

// After the inner loop, we push 1 to the row array, as each row ends with 1.

// Finally, we push the generated row to the triangle array.

// After the outer loop completes, the triangle array represents Pascal's Triangle up to the specified number of rows.

// We return the triangle array as the final result.

// The time and space complexities of this TypeScript solution are the same as the JavaScript solution: O(numRows^2) for time complexity and O(numRows^2) for space complexity.