class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let found = Infinity;

        for(let num of nums){
            if(num <= found){
                found  = num;
            }
        }

        return found
    }
}
