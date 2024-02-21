function reverseStringsOrder(inputArray) {
    const reversedArray = [];
    // Iterate over the inputArray in reverse order
    for (let i = inputArray.length - 1; i >= 0; i--) {
        // Add each string to the reversedArray
        reversedArray.push(inputArray[i]);
    }
    return reversedArray;
}