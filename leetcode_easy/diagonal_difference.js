function diagonalDifference(arr) {
    const n = arr.length;
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    // Calculate the sum of the primary diagonal (left to right)
    for (let i = 0; i < n; i++) {
        primaryDiagonalSum += arr[i][i];
    }
    // Calculate the sum of the secondary diagonal (right to left)
    for (let i = 0; i < n; i++) {
        secondaryDiagonalSum += arr[i][n - 1 - i];
    }
    // Calculate the absolute difference between the two diagonals
    const absoluteDifference = Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
    return absoluteDifference;
}