var isAnagram = function (s, t) {
    // Check if the lengths of both strings are equal 
    if (s.length !== t.length) {
        return false;
    }
    // Create frequency maps for each character in both strings
    const frequencyMapS = createFrequencyMap(s);
    const frequencyMapT = createFrequencyMap(t);
    // Compare the frequency maps
    return compareFrequencyMaps(frequencyMapS, frequencyMapT);
};
/**
 * Helper function to create a frequency map for a given string
 * @param {string} str
 * @return {Map}
 */
function createFrequencyMap(str) {
    const frequencyMap = new Map();
    for (const char of str) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }
    return frequencyMap;
}
/**
 * Helper function to compare two frequency maps
 * @param {Map} map1
 * @param {Map} map2
 * @return {boolean}
 */
function compareFrequencyMaps(map1, map2) {
    for (const [key, value] of map1) {
        if (map2.get(key) !== value) {
            return false;
        }
    }
    return true;
}