var scoreOfParentheses = function (S) {
    const stack = [];

    for (let char of S) {
        if (char === '(') {
            stack.push(0); // 0 represents an open parenthesis
        } else {
            let currentScore = stack.pop(); // Pop the top element from the stack

            // Calculate the new score based on the rules
            let score = currentScore === 0 ? 1 : 2 * currentScore;

            // If the stack is not empty, update the score of the previous element
            if (stack.length > 0) {
                stack[stack.length - 1] += score;
            } else {
                stack.push(score);
            }
        }
    }

    return stack[0]; // The final score is at the top of the stack
};

// Example usage:
console.log(scoreOfParentheses("(()(()))")); // Output: 6
/* 
To solve this problem, you can use a stack to keep track of the scores. Traverse the string from left to right, and maintain a stack to store the scores calculated so far. The key is to recognize the patterns of balanced parentheses and update the scores accordingly.
In this solution, the stack is used to keep track of the scores of open parentheses. When an open parenthesis is encountered, 0 is pushed onto the stack. When a closing parenthesis is encountered, the top element is popped from the stack, and the score is calculated based on the rules. The updated score is then added to the previous element on the stack or pushed onto the stack if it's empty. Finally, the result is the score at the top of the stack.
*/