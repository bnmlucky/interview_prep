Array.prototype.groupBy = function (fn) {
    return this.reduce((accum, item) => {
        const key = fn(item);
        accum[key] ||= [];
        accum[key].push(item);
        return accum;
    }, {});
};
/*
You can also use the reduce method to solve the problem.
Here, we initialize the accumulator value to an empty object, {}. 
For each item in the list, we ensure the accumulator has a list associated with the resultant key.
This can be achieved with the following line of code: accum[key] ||= [];.
That code uses Logical OR Assignment operator, and it only does the assignment if the left-hand argument is falsy.
As the last step, we append the item to the list and return the accumulator.
Complexity Analysis:
N represents the length of the array.
Note that theoretically these results could depend on the provided callback, but that would be very unusual.
Time Complexity:
O(N) The algorithm iterates over each element once.
Space Complexity:
O(N) The algorithm creates new array(s) whose lengths add up to the length of the orginal array.
*/
