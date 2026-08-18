class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    // [1,2,3,1]
    containsNearbyDuplicate(nums, k) {
        for(let i =0; i<nums.length-1; i++){
            for(let j = nums.length-1; j>i; j--){
                if(nums[i] == nums[j] && i != j){
                    if(Math.abs(i - j) <= k){
                        return true;
                    }
                }
            }
        }
        return false;
    }
}
