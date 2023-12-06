function isPowerOfTwo(n: number): boolean {
    // Ensure n is a positive integer
    if (n <= 0) {
        return false;
    }

    // Use bitwise AND to check if only one bit is set in the binary representation of n
    return (n & (n - 1)) === 0;
}

/* 
Explanation:

The isPowerOfTwo function takes an integer n as input and returns true if it is a power of two, and false otherwise.

The function first checks if n is a positive integer. If n is less than or equal to 0, it cannot be a power of two, so the function returns false.

The key observation for this problem is that a power of two in binary form has only one bit set. For example, 2 is 10 in binary, 4 is 100, 8 is 1000, and so on.

To check if n has only one bit set, we use the bitwise AND operation n & (n - 1). If n is a power of two, the result of this operation will be 0.

For example, if n is 8 (1000 in binary), then n - 1 is 7 (0111 in binary), and their bitwise AND is 0.
If n is 6 (110 in binary), then n - 1 is 5 (101 in binary), and their bitwise AND is not 0.
Therefore, if (n & (n - 1)) === 0, the function returns true; otherwise, it returns false.

This TypeScript solution is essentially the same as the JavaScript solution, with the addition of type annotations for the function parameter (n). TypeScript adds static typing, which enhances code readability and catches potential errors during development. The time complexity is O(1), as the bitwise AND operation and comparisons are constant-time operations.
*/