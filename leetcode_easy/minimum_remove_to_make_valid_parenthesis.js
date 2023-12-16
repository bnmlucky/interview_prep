/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    const stack = [];
    const invalidIndices = new Set();

    // Step 1: Use a stack to keep track of open parentheses indices
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else if (s[i] === ')') {
            if (stack.length === 0) {
                // No matching open parenthesis, mark this closing parenthesis as invalid
                invalidIndices.add(i);
            } else {
                // Matching open parenthesis found, remove it from the stack
                stack.pop();
            }
        }
    }

    // Step 2: Mark remaining open parentheses in the stack as invalid
    invalidIndices.add(...stack);

    // Step 3: Construct the final result by excluding invalid indices
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (!invalidIndices.has(i)) {
            result += s[i];
        }
    }

    return result;
};
/* 
Explanation:

We use a stack to keep track of the indices of open parentheses '('.

We iterate through the input string s:

If an open parenthesis '(' is encountered, we push its index onto the stack.

If a closing parenthesis ')' is encountered:

If the stack is empty, there is no matching open parenthesis, so we mark the closing parenthesis as invalid.
If the stack is not empty, we pop the topmost element from the stack, indicating a matching open parenthesis.
After the first iteration, the stack contains the indices of unmatched open parentheses, and the invalidIndices set contains the indices of unmatched closing parentheses.

We construct the final result by excluding characters at the invalid indices.

The time complexity of this solution is O(n), where n is the length of the input string s, as we iterate through the string once.

The space complexity is O(n) due to the stack and the set. In the worst case, the stack and set could each contain all the characters in the string.
*/