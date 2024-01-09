var romanToInt = function (s) {
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        // Get the integer value of the current Roman numeral
        const currentNumeral = romanNumerals[s[i]];
        // Check if the next Roman numeral is greater than the current one
        if (i < s.length - 1 && romanNumerals[s[i + 1]] > currentNumeral) {
            // Subtract the current value since it's going to be added in the next iteration
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

The function romanToInt takes a string s representing a Roman numeral as input and returns its corresponding integer value.

The romanNumerals object is created to map each Roman numeral to its integer value. This allows easy lookup during the conversion process.

The variable result is initialized to store the final integer value.

The function uses a for loop to iterate through each character in the input string s.

For each character, it retrieves the integer value from the romanNumerals object.

It then checks if the next Roman numeral is greater than the current one. If true, it subtracts the current value from the result since it will be added in the next iteration.

If the next Roman numeral is not greater, it simply adds the current value to the result.

The loop continues until all characters in the input string are processed.

The final result is the integer value corresponding to the input Roman numeral.

This approach leverages the fact that in a valid Roman numeral representation, a smaller numeral before a larger one indicates subtraction. By iterating through the input string and adjusting the result accordingly, the function accurately converts Roman numerals to integers.
*/