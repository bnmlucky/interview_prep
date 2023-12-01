/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let result = '';
    let carry = 0;

    // Iterate from the rightmost digit to the leftmost digit
    for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0 || carry > 0; i--, j--) {
        const digitA = i >= 0 ? parseInt(a[i]) : 0;
        const digitB = j >= 0 ? parseInt(b[j]) : 0;

        // Sum the current digits and the carry
        const sum = digitA + digitB + carry;

        // Calculate the current bit and update the carry
        const currentBit = sum % 2;
        carry = Math.floor(sum / 2);

        // Prepend the current bit to the result
        result = currentBit + result;
    }

    return result;
};
// Explanation:

// The addBinary function takes two binary strings, a and b, as input and returns their sum as a binary string.

// We initialize an empty string result to store the final sum and a variable carry to store the carry during addition.

// We use a loop to iterate through the binary strings from right to left, starting from the least significant bit.

// Inside the loop, we extract the current bits (digitA and digitB) from the input strings a and b. If we reach the end of either string, we assume a zero for that string.

// We sum the current bits (digitA, digitB) and the carry (carry).

// We calculate the current bit of the sum (currentBit) and update the carry for the next iteration.

// We prepend the current bit to the result string.

// After the loop, if there's a remaining carry, we prepend it to the result.

// The final result is the binary sum of the input strings.

// This algorithm has a time complexity of O(max(N, M)), where N and M are the lengths of the input strings a and b. It iterates through the longer of the two strings and performs constant-time operations in each iteration.