function mctFromLeafValues(arr: number[]): number {
    const stack: number[] = [Infinity]; // Use a stack to simulate the process of building the tree
    let result: number = 0;

    for (let leaf of arr) {
        // Pop elements from the stack while the current leaf is greater than the top of the stack
        while (stack[stack.length - 1] <= leaf) {
            const mid: number = stack.pop()!;
            result += mid * Math.min(stack[stack.length - 1], leaf);
        }
        // Push the current leaf onto the stack
        stack.push(leaf);
    }

    // Handle remaining elements in the stack
    while (stack.length > 2) {
        result += stack.pop()! * stack[stack.length - 1];
    }

    return result;
}
/* 
Explanation:

Stack Initialization: Initialize a stack with an initial value of Infinity. The stack is used to simulate the process of building the binary tree.

Iterating Through Leaf Values:

Iterate through each leaf value in the input array (arr).
For each leaf value, pop elements from the stack while the current leaf is greater than the top of the stack. This simulates the process of constructing the binary tree. The popped elements are used to calculate the cost.
Push the current leaf value onto the stack.
Handling Remaining Elements:

After processing all leaf values, there might be remaining elements in the stack.
Pop elements from the stack and calculate the cost until only two elements (Infinity and the last leaf value) remain.
Calculating Result:

The result is the total cost of constructing the minimum-cost binary tree.
How it Works:

The TypeScript solution follows the same logic as the JavaScript solution.
The idea is to use a stack to keep track of leaf values while simulating the process of constructing a binary tree.
For each leaf value, we pop elements from the stack until we find a smaller leaf value. The popped elements are used to calculate the cost.
This process ensures that we prioritize connecting smaller leaf values first, leading to a minimum-cost tree.

Example:

const arr: number[] = [6, 2, 4];
const result: number = mctFromLeafValues(arr);
console.log(result); // Output: 32

Note:

The solution is based on the observation that to minimize the cost, we should connect smaller leaf values first in the construction of the binary tree. The stack helps in keeping track of leaf values and calculating the cost efficiently.
TypeScript adds static typing to the solution, enhancing code readability and catching potential errors during development.
*/