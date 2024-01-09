function romanToInt(s: string): number {
    const romanNumerals: { [key: string]: number } = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let result: number = 0;
    for (let i: number = 0; i < s.length; i++) {
        // Get the integer value of the current Roman numeral
        const currentNumeral: number = romanNumerals[s[i]];
        // Check if the next Roman numeral is greater than the current one
        if (i < s.length - 1 && romanNumerals[s[i + 1]] > currentNumeral) {
            // Subtract the current value since it will be added in the next iteration
            result -= currentNumeral;
        } else {
            // Add the current value to the result
            result += currentNumeral;
        }
    }
    return result;
}

/* 
Explanation:

The TypeScript solution maintains the same logic as the JavaScript version.

The romanToInt function has a parameter s of type string, representing the Roman numeral.

The romanNumerals object is defined with key-value pairs mapping each Roman numeral to its integer value.

The loop iterates through each character in the input string s.

For each character, it retrieves the integer value from the romanNumerals object.

It then checks if the next Roman numeral is greater than the current one. If true, it subtracts the current value from the result since it will be added in the next iteration.

If the next Roman numeral is not greater, it simply adds the current value to the result.

The loop continues until all characters in the input string are processed.

The final result is the integer value corresponding to the input Roman numeral.

By using TypeScript, we benefit from static typing, making the code more robust and helping catch potential type-related errors during development. The overall logic for converting Roman numerals to integers remains the same as in the JavaScript version.
*/