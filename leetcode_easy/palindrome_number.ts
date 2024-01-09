function isPalindrome(x: number): boolean {
    // Check if x is a negative number or ends with 0 (except for 0 itself)
    if (x < 0 || (x !== 0 && x % 10 === 0)) {
        return false;
    }

    let reversed: number = 0;
    const original: number = x;

    // Reverse the last half of the number
    while (x > 0) {
        const digit: number = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }

    // Compare the original number with the reversed half
    return original === reversed;
}

// Example usage:
const result: boolean = isPalindrome(121);
console.log(result); // Output: true

/* 
Explanation:

The TypeScript code follows the same logic as the JavaScript solution.
The isPalindrome function takes an integer x as input and returns a boolean indicating whether it is a palindrome.
The function first checks for special cases where the number cannot be a palindrome (negative numbers or numbers ending with 0, excluding 0 itself).
It initializes two variables, reversed and original, similar to the JavaScript solution.
The function then enters a loop where it extracts the last digit of the number x and updates the reversed variable by multiplying it by 10 and adding the digit. This process effectively reverses the last half of the number.
The loop continues until x becomes 0, and at the end of the loop, reversed contains the reversed last half of the original number.
Finally, the function compares the original number (original) with the reversed half (reversed). If they are equal, the number is a palindrome, and the function returns true; otherwise, it returns false.
This TypeScript solution leverages the strong typing features of TypeScript while maintaining the same algorithmic approach as the JavaScript version.
*/