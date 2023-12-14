/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    // Create a dummy node to serve as the starting point of the merged list
    const dummy = new ListNode();
    // Initialize a current pointer to the dummy node
    let current = dummy;

    // Iterate while both lists have nodes
    while (l1 !== null && l2 !== null) {
        // Compare the values of the current nodes in both lists
        if (l1.val < l2.val) {
            // If the value in l1 is smaller, append it to the merged list
            current.next = l1;
            // Move the l1 pointer to the next node
            l1 = l1.next;
        } else {
            // If the value in l2 is smaller or equal, append it to the merged list
            current.next = l2;
            // Move the l2 pointer to the next node
            l2 = l2.next;
        }

        // Move the current pointer to the newly added node
        current = current.next;
    }

    // If one of the lists is exhausted, append the remaining nodes from the other list
    if (l1 !== null) {
        current.next = l1;
    } else {
        current.next = l2;
    }

    // Return the merged list starting from the dummy node's next
    return dummy.next;
};
/* 
Explanation:

Initialization:

Create a dummy node to serve as the starting point of the merged list.
Initialize a current pointer to the dummy node.
Merge Loop:

Use a while loop to iterate while both linked lists (l1 and l2) have nodes.
Compare the values of the current nodes in both lists.
Append the node with the smaller value to the merged list.
Move the respective pointers (l1 or l2) to the next node.
Move the current pointer to the newly added node.
Append Remaining Nodes:

After the loop, if one of the lists is exhausted, append the remaining nodes from the other list to the merged list.
Return Merged List:

Return the merged list starting from the dummy node's next.
Example:

// Example ListNode definition
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// Example usage
const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

const result = mergeTwoLists(l1, l2);
console.log(result);
// Output: ListNode { val: 1, next: ListNode { val: 1, next: ListNode { val: 2, next: [ListNode] } } }
This solution maintains the sorted order while merging the two linked lists. The time complexity is O(n), where n is the total number of nodes in the merged list.

*/