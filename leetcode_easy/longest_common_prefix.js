/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return '';
    }

    // Sort the array of strings to bring the shortest and longest to the front
    strs.sort();

    // Take the first and last strings after sorting
    const firstStr = strs[0];
    const lastStr = strs[strs.length - 1];

    let prefix = '';

    // Iterate through the characters of the first string
    for (let i = 0; i < firstStr.length; i++) {
        // If the character matches in the first and last strings, add it to the prefix
        if (firstStr[i] === lastStr[i]) {
            prefix += firstStr[i];
        } else {
            // Break the loop if there's a mismatch
            break;
        }
    }

    return prefix;
};

/*
Explanation:

The longestCommonPrefix function takes an array of strings (strs) as input and returns the longest common prefix among them.

If the array is empty, there is no common prefix, so the function returns an empty string.

To find the longest common prefix, the array of strings is first sorted. Sorting helps bring the strings with the common prefix to the front of the array.

The first and last strings after sorting are then selected. These two strings represent the shortest and longest strings in the original array.

The function then iterates through the characters of the first string (firstStr) and compares them with the corresponding characters in the last string (lastStr).

For each character that matches in both strings, the character is added to the prefix variable.

If there's a mismatch, the loop breaks, as the common prefix cannot continue beyond the point of mismatch.

The prefix variable contains the longest common prefix, which is then returned.

This solution exploits the fact that the common prefix is shared by all strings and is positioned at the beginning of the sorted array. The time complexity is O(S log N), where S is the total number of characters in all strings, and N is the number of strings. The space complexity is O(1), as no extra space is used other than a few variables.
*/
