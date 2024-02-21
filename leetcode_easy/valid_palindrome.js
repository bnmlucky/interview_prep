var isPalindrome = function (s) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Check if the cleaned string is palindrome
    return cleanedString === cleanedString.split('').reverse().join('');
}