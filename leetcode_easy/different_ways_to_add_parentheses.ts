function diffWaysToCompute(input: string): number[] {
    const result: number[] = [];

    for (let i = 0; i < input.length; i++) {
        const char = input[i];

        if (char === '+' || char === '-' || char === '*') {
            const leftPart = diffWaysToCompute(input.slice(0, i));
            const rightPart = diffWaysToCompute(input.slice(i + 1));

            for (const left of leftPart) {
                for (const right of rightPart) {
                    if (char === '+') {
                        result.push(left + right);
                    } else if (char === '-') {
                        result.push(left - right);
                    } else if (char === '*') {
                        result.push(left * right);
                    }
                }
            }
        }
    }

    // If the input contains only a number, add it to the result
    if (result.length === 0) {
        result.push(parseInt(input));
    }

    return result;
}
/* 
Explanation:

The TypeScript solution is essentially the same as the JavaScript solution, with the addition of type annotations for variables and function parameters.

We use a recursive approach to break down the input string based on operators and compute the results for all possible combinations.

For each operator encountered, split the input into left and right parts and recursively compute the results for both parts.

Use nested loops to combine the results of the left and right parts with the current operator.

The base case is when the input contains only a number, in which case add that number to the result.

The result array stores all possible results for different ways to group numbers and operators.

The time complexity of this solution is not straightforward to determine due to its recursive nature. In the worst case, it might be exponential, but memoization can be applied to improve efficiency.

The space complexity is also influenced by the recursion depth, and it is generally O(n), where n is the length of the input string.
*/