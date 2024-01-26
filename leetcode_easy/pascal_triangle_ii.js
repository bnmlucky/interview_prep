function getRow(rowIndex) {
    const result = [];
    // Calculate the values using combinations
    for (let i = 0; i <= rowIndex; i++) {
        const value = factorial(rowIndex) / (factorial(i) * factorial(rowIndex - i));
        result.push(value);
    }
    return result;
}
// Helper function to calculate factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
/* 
Explanation:
1.  We initialize an empty array "result" to store the values of the 'kth' row
2.  We loop through each index 'i' from 0 to 'rowIndex'
3.  For each index 'i', we calculate the value using the combination formula and push it to the 'result' array
4.  The combination formula is implemented using the 'factorial' function, which calculates the factorial of a given number.
5.  Finally, we return the 'result' array containing the 'kth' row of Pascal's Triangle.
While this solution works, note that calculating factorials for each element might not
be the most efficient way.  There are more optimized approaches that avoid repeated calculations 
and use the values of the previous row to compute the next row in a more iterative manner.
*/