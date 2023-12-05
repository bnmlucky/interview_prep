/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let result = '';
    let carry = 0;

    // Iterate from the rightmost digit to the leftmost digit
    for (let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0 || carry > 0; i--, j--) {
        const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
        const digit2 = j >= 0 ? parseInt(num2[j]) : 0;

        // Sum the current digits and the carry
        const sum = digit1 + digit2 + carry;

        // Calculate the current digit and update the carry
        const currentDigit = sum % 10;
        carry = Math.floor(sum / 10);

        // Prepend the current digit to the result
        result = currentDigit + result;
    }

    return result;
};
/* 
Explanation:

The addStrings function takes two non-negative integers represented as strings (num1 and num2) and returns their sum as a string.

We initialize an empty string result to store the final sum and a variable carry to store the carry during addition.

We use a loop to iterate through the strings from right to left, starting from the least significant digit.

Inside the loop, we extract the current digits (digit1 and digit2) from the input strings num1 and num2. If we reach the end of either string, we assume a zero for that string.

We sum the current digits (digit1, digit2) and the carry (carry).

We calculate the current digit of the sum (currentDigit) and update the carry for the next iteration.

We prepend the current digit to the result string.

After the loop, if there's a remaining carry, we prepend it to the result.

The final result is the sum of the input strings represented as a string.

This algorithm mimics the process of manual addition by starting from the least significant digits and propagating the carry as needed. The time complexity is O(max(N, M)), where N and M are the lengths of the input strings num1 and num2.

*/