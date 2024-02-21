function sortStringsAlphabetically(inputArray) {
    const sortedArray = [];
    // Iterate over each string in the inputArray
    for (let currenString of inputArray) {
        // Insert the current string at the correct position in the sortedArray
        insertSorted(sortedArray, currenString);
    }
    return sortedArray;
}
// Helper function to insert a string in a sorted array
function insertSorted(sortedArray, currenString) {
    let index = 0;
    // Find the correct position to insert the string alphabetically
    while (index < sortedArray.length && currenString > sortedArray[index]) {
        index++;
    }
    // Insert the string at the found index 
    sortedArray.splice(index, 0, currenString);
}