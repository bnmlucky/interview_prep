var canReach = function (arr, start) {
    const visited = new Set();

    // Helper function for DFS
    function dfs(currentIndex) {
        // Base case: If the current index is out of bounds or already visited, return false
        if (currentIndex < 0 || currentIndex >= arr.length || visited.has(currentIndex)) {
            return false;
        }

        // Mark the current index as visited
        visited.add(currentIndex);

        // If the value at the current index is 0, we can reach the last index
        if (arr[currentIndex] === 0) {
            return true;
        }

        // Try jumping to the right and left based on the current value
        return dfs(currentIndex + arr[currentIndex]) || dfs(currentIndex - arr[currentIndex]);
    }

    // Start DFS from the given position
    return dfs(start);
};

// Example usage:
console.log(canReach([4, 2, 3, 0, 3, 1, 2], 5)); // Output: true
/* 
To solve this problem, you can use Depth-First Search (DFS) or Breadth-First Search (BFS) to explore the possible jumps from the current position and mark the visited positions. Here, I'll provide a solution using DFS.
In this solution:

We use a visited set to keep track of the indices that have been visited to avoid infinite loops.
The dfs function is a recursive function that explores possible jumps from the current index.
The base case checks if the current index is out of bounds or has already been visited. If so, it returns false.
If the value at the current index is 0, we can reach the last index, so it returns true.
The function then recursively calls itself for jumping to the right and left based on the current value.
The DFS approach explores the possible jumps and backtracks when necessary. The final result is true if the last index can be reached and false otherwise.

*/