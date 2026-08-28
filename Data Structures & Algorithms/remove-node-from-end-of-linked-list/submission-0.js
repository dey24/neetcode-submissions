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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = new ListNode();
        dummy.next = head;

        let curr = head;
        let count= 0;

        //find the length of the list
        while(curr){
            curr = curr.next;
            count++
        }
        //assign prev to dummy
        let prev = dummy;

        //move prev to count - n position, that is the node just before deletion Node
        for(let i =0; i<count -n; i++){
            prev = prev.next;
        }

        //assign node next to deletion node to prev
        prev.next = prev.next.next;

        // return the modified list
        return dummy.next
    }
}
