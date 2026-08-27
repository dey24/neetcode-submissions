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
     * @param {number} val
     * @return {ListNode}
     */
    // P 2 1 4 1 2 3
    removeElements(head, val) {
        let dummy = new ListNode();

        dummy.next = head;

        let curr = head;

        let prev = dummy;

        while(curr){
            if(curr.val == val){
                prev.next = curr.next
            }
            else{
                prev = curr;
            }
            curr = curr.next;
        }
        // console.log(dummy)

        return dummy.next
    }
}
