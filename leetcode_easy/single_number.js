var singleNumber = function (nums) {
    let result = 0;
    // XOR operation to find the single number
    for (const num of nums) {
        result ^= num;
    }
    return result;
}