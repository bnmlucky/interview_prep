var isPalindrome = function (x) {
    if (x < 0 || (x !== 0 && x % 10 === 0)) {
        return false;
    }
    let reversed = 0;
    let original = x;
    // Reverse the last half of the number
    while (x > 0) {
        const digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }
    //Compare the original number with the reversed half
    return original === reversed;
};

/* 
Explanation:

First, the function checks for some special cases where the number cannot be a palindrome. If the number is negative or ends with a zero (except for 0 itself), it cannot be a palindrome.

The function then initializes two variables, reversed and original. The reversed variable will store the reversed last half of the number, and original will store the original number.

The function enters a loop where it extracts the last digit (digit) of the number x using the modulo operator (%) and updates the reversed variable by multiplying it by 10 and adding the digit. This process effectively reverses the last half of the number.

The loop continues until x becomes 0, and at the end of the loop, reversed contains the reversed last half of the original number.

Finally, the function compares the original number (original) with the reversed half (reversed). If they are equal, the number is a palindrome, and the function returns true; otherwise, it returns false.

This approach reverses the last half of the number without reversing the entire number, which is an efficient way to check for palindromes. The time complexity of this solution is O(log10(n)), where n is the input number.
*/