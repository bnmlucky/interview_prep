function canReach(arr: number[], start: number): boolean {
    const visited: Set<number> = new Set();

    // Helper function for DFS
    function dfs(currentIndex: number): boolean {
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
}

// Example usage:
console.log(canReach([4, 2, 3, 0, 3, 1, 2], 5)); // Output: true
/* 
The TypeScript solution is quite similar to the JavaScript solution, with the following TypeScript-specific features:

Function parameter types: TypeScript allows you to specify the types of function parameters. In this case, arr is expected to be an array of numbers, and start is expected to be a number.
The Set type: TypeScript supports native Set objects, and in this solution, a Set is used to keep track of visited indices.
The logic of the solution remains the same, where DFS is used to explore possible jumps from the current index. The DFS function recursively calls itself for jumping to the right and left based on the current value. The final result is true if the last index can be reached and false otherwise.
*/