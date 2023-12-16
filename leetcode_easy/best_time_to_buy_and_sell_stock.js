/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (!prices || prices.length <= 1) {
        return 0;
    }

    let minPrice = prices[0]; // Initialize the minimum price to the first day's price
    let maxProfit = 0; // Initialize the maximum profit to 0

    for (let i = 1; i < prices.length; i++) {
        // Update the minimum price if the current price is lower
        minPrice = Math.min(minPrice, prices[i]);

        // Update the maximum profit if selling at the current price results in a higher profit
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }

    return maxProfit;
};
/* 
Explanation:

We initialize minPrice to the price on the first day and maxProfit to 0.
We iterate through the array of prices starting from the second day.
For each day, we update minPrice to be the minimum of its current value and the current day's price.
We update maxProfit to be the maximum of its current value and the difference between the current day's price and minPrice.
At the end of the iteration, maxProfit contains the maximum profit that can be obtained.
The time complexity of this solution is O(n), where n is the number of days, as we iterate through the array only once. The space complexity is O(1) as we use constant extra space.
*/