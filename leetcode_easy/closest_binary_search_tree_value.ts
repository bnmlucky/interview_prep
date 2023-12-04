/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number;
 *     left: TreeNode | null;
 *     right: TreeNode | null;
 *     constructor(val?: number, left? : TreeNode | null, right? : TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val);
 *         this.left = (left===undefined ? null : left);
 *         this.right = (right===undefined ? null : right);
 *     }
 * }
 */

function closestValue(root: TreeNode | null, target: number): number {
    let closest: number = root!.val; // Initialize closest with the root value

    while (root !== null) {
        // Update closest if the current node's value is closer to the target
        closest = Math.abs(root.val - target) < Math.abs(closest - target) ? root.val : closest;

        // Traverse to the left or right based on the target value
        root = target < root.val ? root.left : root.right;
    }

    return closest;
}

/*
Explanation:

The closestValue function takes the root of a binary search tree (root) and a target value (target) as input and returns the closest value to the target in the BST.

We initialize closest with the root's value because, initially, the root is the closest value.

We use a while loop to traverse the BST. Inside the loop:

We update closest if the current node's value is closer to the target than the current closest value.
We then traverse to the left or right based on the target value. If the target is less than the current node's value, we move to the left; otherwise, we move to the right.
The loop continues until we reach a leaf node (when root is null). During this process, closest is continuously updated with the closest value to the target.

Finally, we return the closest value found.

This TypeScript solution is essentially the same as the JavaScript solution, with the addition of type annotations for the function parameters (root and target). TypeScript adds static typing, enhancing code readability and catching potential errors during development. The time complexity is O(H), where H is the height of the tree, and in the average case for a balanced BST, it is O(log N).

-- this solution is also not correct, but the best I can do for now.
*/