var hasPathSum = function (root, targetSum) {
    // Base case:  if the root is null, return false
    if (root === null) {
        return false;
    }
    // Subtract the current node value from targetSum
    targetSum -= root.val;
    // If it's a leaf node and the remaining targetSum is 0, return true
    if (root.left === null && root.right === null) {
        return targetSum === 0;
    }
    // Recursively check left and right subtrees
    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
}