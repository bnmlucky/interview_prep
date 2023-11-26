/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let prev = null; // Previous node, initially null
    let current = head; // Current node, initially the head of the list

    while (current !== null) {
        let nextTemp = current.next; // Save the next node
        current.next = prev; // Reverse the link
        prev = current; // Move prev to the current node
        current = nextTemp; // Move current to the next node
    }

    return prev; // The final prev is the new head of the reversed list 
};

// Explanation:

// We use three pointers: prev, current, and nextTemp.

// prev: Points to the previous node, initially set to null.
// current: Points to the current node, initially set to the head of the list.
// nextTemp: Temporary pointer to store the next node in the original list.
// We iterate through the list using a while loop until current becomes null (end of the original list).

// Inside the loop:

// We store the next node in nextTemp to avoid losing the reference.
// We reverse the link by setting current.next to prev.
// We move prev and current one step forward in the list.
// After the loop, prev will be pointing to the new head of the reversed list.

// We return prev as the result.

// This algorithm has a time complexity of O(n), where n is the number of nodes in the linked list, as we traverse the entire list once. The space complexity is O(1), as we only use a constant amount of extra space regardless of the size of the input.





