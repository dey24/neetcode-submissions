/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head;

        //mid finding logic
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        let secondList = slow.next //separate list that holds second part of the original list
        slow.next = null; // original list got cut from mid

        let prev = null
        let curr = secondList;
        //reversing second list logic
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        console.log(prev);
        secondList = prev; //modifiying the secondList head to point to last node that is now the head after reverse

        //merge the two halves
        let first = head;
        while (secondList) {
            // Save next nodes before changing links
            let firstNext = first.next;
            let secondNext = secondList.next;

            // Insert second node after first node
            first.next = secondList;
            secondList.next = firstNext;

            // Move to the next pair
            first = firstNext;
            secondList = secondNext;
        }
    }
}
