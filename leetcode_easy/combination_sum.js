/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    // Initialize an array to store the result
    const result = [];

    // Sort the candidates array for optimization in backtracking
    candidates.sort((a, b) => a - b);

    // Recursive function to find combinations
    const findCombinations = (currentCombination, startIndex, currentSum) => {
        // Base case: if the current sum equals the target, add the combination to the result
        if (currentSum === target) {
            result.push([...currentCombination]);
            return;
        }

        // Iterate through candidates starting from the current index
        for (let i = startIndex; i < candidates.length; i++) {
            // If adding the current candidate does not exceed the target, proceed
            if (currentSum + candidates[i] <= target) {
                // Include the current candidate in the combination
                currentCombination.push(candidates[i]);
                // Recursively call the function with the updated combination and sum
                findCombinations(currentCombination, i, currentSum + candidates[i]);
                // Backtrack: remove the last added candidate for the next iteration
                currentCombination.pop();
            }
        }
    };

    // Start the recursion with an empty combination, starting index 0, and current sum 0
    findCombinations([], 0, 0);

    return result;
};
/*
Explanation:

The combinationSum function takes an array of candidates (candidates) and a target value (target) as input and returns an array of arrays representing unique combinations that sum up to the target.

The result array is initialized to store the final combinations.

The candidates array is sorted in ascending order. Sorting the array allows for optimization in backtracking by avoiding unnecessary duplicate combinations.

The findCombinations function is defined to perform the recursive backtracking. It takes three parameters: currentCombination (the current combination being formed), startIndex (the index to start considering candidates), and currentSum (the current sum of the elements in the combination).

In the findCombinations function:

The base case checks if the currentSum equals the target. If true, the current combination is added to the result array.

The function then iterates through the candidates starting from the startIndex.

For each candidate, it checks if adding it to the current sum would exceed the target. If not, it includes the candidate in the current combination, makes a recursive call with the updated combination and sum, and then backtracks by removing the last added candidate.

The main function starts the recursion with an empty combination, starting index 0, and current sum 0.

The final result array, containing all unique combinations, is returned.

This solution follows the backtracking approach, exploring all possible combinations. The sorting of the candidates array helps in pruning unnecessary branches during the exploration. The time complexity is influenced by the number of valid combinations, and in the worst case, it can be exponential. The space complexity is O(n) where n is the length of the candidates array.
*/