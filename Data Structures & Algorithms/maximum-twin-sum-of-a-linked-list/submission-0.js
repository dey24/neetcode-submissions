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
     * @return {number}
     */
    // [5,4,2,1,6,3]
    // -> [5,3], [4,6], [2,1]
    pairSum(head) {
        let dummy = new ListNode();
        dummy.next = head;
        let slow = dummy;
        let fast = head;

        while(fast){
            slow = slow.next;
            fast = fast.next.next;
        }

        // console.log(slow)

        let secondList = slow.next;
        slow.next = null;

        let curr = secondList;
        let prev = null;
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        // console.log(prev, 'prev')
        // console.log('second List', secondList)

        let first = head;
        let max = 0;
        while(prev){
            if(first.val + prev.val > max){
                max = first.val + prev.val
            }
            prev = prev.next;
            first = first.next;
        }
        return max;
    }
}
