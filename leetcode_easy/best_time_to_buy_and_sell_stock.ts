function maxProfit(prices: number[]): number {
    if (!prices || prices.length <= 1) {
        return 0;
    }

    let minPrice: number = prices[0]; // Initialize the minimum price to the first day's price
    let maxProfit: number = 0; // Initialize the maximum profit to 0

    for (let i: number = 1; i < prices.length; i++) {
        // Update the minimum price if the current price is lower
        minPrice = Math.min(minPrice, prices[i]);

        // Update the maximum profit if selling at the current price results in a higher profit
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }

    return maxProfit;
}
/* 
Explanation:

The TypeScript solution is very similar to the JavaScript solution, as TypeScript is a superset of JavaScript, and the code structure remains the same.

We use TypeScript's type annotations to declare the types of variables and function parameters.

The logic is the same: we iterate through the array of prices, keeping track of the minimum price (minPrice) and the maximum profit (maxProfit).

The minPrice is updated whenever we find a lower price, and the maxProfit is updated whenever selling at the current price results in a higher profit.

The time complexity and space complexity remain O(n) and O(1) respectively, where n is the number of days.
*/