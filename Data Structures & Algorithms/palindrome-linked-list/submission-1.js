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
     * @return {boolean}
     */
    isPalindrome(head) {
        let curr = head;
        let slow = head;
        let fast = head;

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next;
        }
        //prev
        //3 -> 2 (next) -> 1
        //fast
        let prev = null;
        while(slow !== null){
            let next = slow.next;
            slow.next = prev;
            prev = slow;
            slow = next;
        }
        console.log(prev);

        while(prev != null){
            if(curr.val !== prev.val){
                return false;
            }
            prev = prev.next;
            curr= curr.next;
        }
        return true;
    }
}
