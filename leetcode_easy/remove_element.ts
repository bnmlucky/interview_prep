function removeElement(nums: number[], val: number): number {
    // Initialize two pointers, one at the beginning and one at the end of the array.
    let left: number = 0;
    let right: number = nums.length - 1;

    // Continue until the left pointer surpasses the right pointer.
    while (left <= right) {
        // If the element at the left pointer is equal to the target value,
        // swap it with the element at the right pointer.
        if (nums[left] === val) {
            nums[left] = nums[right];
            right--;
        } else {
            // If the element at the left pointer is not equal to the target value,
            // move the left pointer to the next element.
            left++;
        }
    }

    // The new length is the left pointer since all instances of the target value
    // have been moved to the end of the array.
    return left;
}
/* 
Now, let's break down the TypeScript solution line by line:

function removeElement(nums: number[], val: number): number {: Declare a function named removeElement that takes an array of numbers nums and a target value val as parameters. The function returns a number (the new length of the array).

let left: number = 0; and let right: number = nums.length - 1;: Initialize two pointers, left and right, where left starts at the beginning of the array, and right starts at the end of the array.

while (left <= right) {: Start a loop that continues until the left pointer surpasses the right pointer.

Inside the loop:

if (nums[left] === val) {: Check if the element at the left pointer is equal to the target value (val).
If true, swap the element at the left pointer with the element at the right pointer and move the right pointer one step to the left (right--).
If false, move the left pointer to the next element (left++).
return left;: After the loop, the new length is the position of the left pointer, as all instances of the target value have been moved to the end of the array. Return this value.

This TypeScript solution is essentially the same as the JavaScript solution, with type annotations added to specify the types of variables and parameters. The algorithm follows the two-pointer approach for in-place removal with O(1) extra memory.
*/