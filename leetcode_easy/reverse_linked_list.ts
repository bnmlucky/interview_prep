/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null; // Previous node, initially null
    let current: ListNode | null = head; // Current node, initially the head of the list

    while (current !== null) {
        let nextTemp: ListNode | null = current.next; // Save the next node
        current.next = prev; // Reverse the link
        prev = current; // Move prev to the current node
        current = nextTemp; // Move current to the next node
    }

    return prev; // The final prev is the new head of the reversed list
}

// Explanation:

// The TypeScript solution is quite similar to the JavaScript one, but with type annotations for TypeScript.

// We have a ListNode class representing a node in the linked list.

// We use three pointers: prev, current, and nextTemp, all of type ListNode | null.

// The reverseList function takes a head of the linked list as an argument and returns the new head of the reversed list.

// We iterate through the list using a while loop until current becomes null (end of the original list).

// Inside the loop:

// We store the next node in nextTemp to avoid losing the reference.
// We reverse the link by setting current.next to prev.
// We move prev and current one step forward in the list.
// After the loop, prev will be pointing to the new head of the reversed list.

// We return prev as the result.

// This TypeScript algorithm has the same time and space complexities as the JavaScript one: O(n) for time complexity and O(1) for space complexity.