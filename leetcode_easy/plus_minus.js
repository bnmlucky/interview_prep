function plusMinus(arr) {
    const n = arr.length;
    let positive = 0, negative = 0, zero = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            positive++;
        } else if (arr[i] < 0) {
            negative++;
        } else {
            zero++;
        }
    }
    const ratioPositive = positive / n;
    const ratioNegative = negative / n;
    const ratioZero = zero / n;
    // Printing the results with 6 decimal places
    console.log(ratioPositive.toFixed(6));
    console.log(ratioNegative.toFixed(6));
    console.log(ratioZero.toFixed(6));
}