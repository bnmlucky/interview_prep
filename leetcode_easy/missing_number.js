/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const n = nums.length;

    // Calculate the expected sum of numbers from 0 to n
    const expectedSum = (n * (n + 1)) / 2;

    // Calculate the actual sum of the numbers in the array
    const actualSum = nums.reduce((acc, num) => acc + num, 0);

    // The difference between the expected sum and the actual sum is the missing number
    return expectedSum - actualSum;
};

// Explanation:

// The missingNumber function takes an array of numbers (nums) as input and returns the missing number.

// We calculate the length of the array (n) using nums.length.

// The expected sum of numbers from 0 to n in a consecutive sequence is given by the formula (n * (n + 1)) / 2. This is based on the sum of an arithmetic series formula.

// We use the reduce function to calculate the actual sum of the numbers in the array (actualSum).

// The missing number is the difference between the expected sum and the actual sum.

// We return the missing number as the result.

// The time complexity of this algorithm is O(n), where n is the length of the input array nums. The reduce function iterates through the array once. The space complexity is O(1), as we only use a constant amount of extra space.