function groupAnagrams(strs: string[]): string[][] {
    const groupedAnagrams: { [key: string]: string[] } = {};

    // Iterate through each string in the array
    for (let str of strs) {
        // Sort the characters in the string to create a unique key
        const sortedStr: string = str.split('').sort().join('');

        // If the key exists in the groupedAnagrams object, push the current string to the corresponding group
        if (groupedAnagrams[sortedStr]) {
            groupedAnagrams[sortedStr].push(str);
        } else {
            // If the key doesn't exist, create a new group with the current string
            groupedAnagrams[sortedStr] = [str];
        }
    }

    // Convert the values of the groupedAnagrams object to an array to get the final result
    const result: string[][] = Object.values(groupedAnagrams);

    return result;
}
/* 
Explanation:

Create a Hash Map (groupedAnagrams):

Initialize an empty object (groupedAnagrams) to store groups of anagrams. The keys of this object will be sorted strings (anagram keys), and the values will be arrays of strings belonging to the same group.
Iterate Through Each String:

Iterate through each string (str) in the input array (strs).
Sort Characters and Create Anagram Key:

Sort the characters of the current string to create a unique key for anagrams.
For example, if the current string is "eat," the sorted key will be "aet."
Group Anagrams:

Check if the sorted key exists in the groupedAnagrams object.
If it does, push the current string to the corresponding group.
If it doesn't, create a new group with the current string.
Convert Object Values to Array:

After processing all strings, convert the values of the groupedAnagrams object to an array to get the final result.
Return Result:

The result is an array of arrays, where each inner array represents a group of anagrams.
Example:

const input: string[] = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result: string[][] = groupAnagrams(input);
console.log(result);
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
This TypeScript solution efficiently groups anagrams using a hash map, where the sorted characters of each string serve as keys. The time complexity is O(N * K * log(K)), where N is the number of strings and K is the maximum length of a string.

*/