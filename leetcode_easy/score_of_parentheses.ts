function scoreOfParentheses(S: string): number {
    const stack: number[] = [];

    for (let char of S) {
        if (char === '(') {
            stack.push(0); // 0 represents an open parenthesis
        } else {
            let currentScore: number = stack.pop()!; // Non-null assertion operator

            // Calculate the new score based on the rules
            let score: number = currentScore === 0 ? 1 : 2 * currentScore;

            // If the stack is not empty, update the score of the previous element
            if (stack.length > 0) {
                stack[stack.length - 1] += score;
            } else {
                stack.push(score);
            }
        }
    }

    return stack[0]!; // Non-null assertion operator
}

// Example usage:
console.log(scoreOfParentheses("(()(()))")); // Output: 6
/*
The TypeScript solution for the "Score of Parentheses" problem is quite similar to the JavaScript solution. TypeScript is a superset of JavaScript, so you can use TypeScript with the same code structure and add type annotations for better static typing.
In this TypeScript code:

The S: string in the function parameters specifies that the input S should be a string.
I've added type annotations for variables (stack, currentScore, score) to specify their types.
The non-null assertion operator (!) is used in a couple of places where TypeScript cannot determine nullability. In this case, it's safe to use the assertion operator because we are confident that the values won't be null at those points.
The logic of the solution remains the same, where a stack is used to keep track of the scores of open parentheses, and the scores are calculated based on the rules provided in the problem statement. The final result is the score at the top of the stack.
*/