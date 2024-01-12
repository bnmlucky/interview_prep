var removeElement = function (nums, val) {
    // Initialize two pointers, one at the beginning, the other at the end of the array
    let left = 0;
    let right = nums.length - 1;
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
Now, let's break down the solution line by line:

let left = 0; and let right = nums.length - 1;: Initialize two pointers, left and right, where left starts at the beginning of the array, and right starts at the end of the array.

while (left <= right) {: Start a loop that continues until the left pointer surpasses the right pointer.

Inside the loop:

if (nums[left] === val) {: Check if the element at the left pointer is equal to the target value (val).
If true, swap the element at the left pointer with the element at the right pointer and move the right pointer one step to the left (right--).
If false, move the left pointer to the next element (left++).
return left;: After the loop, the new length is the position of the left pointer, as all instances of the target value have been moved to the end of the array. Return this value.

This algorithm utilizes the two-pointer approach to achieve an in-place removal of the specified value with O(1) extra memory.
*/