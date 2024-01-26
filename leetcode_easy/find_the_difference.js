var findTheDifference = function (s, t) {
    let result = 0;
    // XOR all the characters in string s
    for (const char of s) {
        result ^= char.charCodeAt(0);
    }
    // XOR all the characters in string t
    for (const char of t) {
        result ^= char.charCodeAt(0);
    }
    // Convert the result back to a character
    return String.fromCharCode(result);
}