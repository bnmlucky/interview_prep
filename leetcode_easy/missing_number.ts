function missingNumber(nums: number[]): number {
    const n = nums.length;

    // Calculate the expected sum of numbers from 0 to n
    const expectedSum = (n * (n + 1)) / 2;

    // Calculate the actual sum of the numbers in the array
    const actualSum = nums.reduce((acc, num) => acc + num, 0);

    // The difference between the expected sum and the actual sum is the missing number
    return expectedSum - actualSum;
}
// Explanation:

// The function missingNumber takes an array of numbers (nums) as input and returns the missing number in the sequence.

// We calculate the length of the array (n) using nums.length.

// The expected sum of numbers from 0 to n in a consecutive sequence is given by the formula (n * (n + 1)) / 2. This is based on the sum of an arithmetic series formula.

// We use the reduce function to calculate the actual sum of the numbers in the array (actualSum).

// The missing number is the difference between the expected sum and the actual sum.

// We return the missing number as the result.

// This TypeScript solution is very similar to the JavaScript solution provided earlier. TypeScript adds static typing to JavaScript, making the code more robust and less error-prone. The logic and approach remain the same, with the type annotations added to the function parameters and the return type. The time complexity is O(n), and the space complexity is O(1).





