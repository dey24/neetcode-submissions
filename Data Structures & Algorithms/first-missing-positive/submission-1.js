class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        //just with intuition I was able to solve.
        let missing = 1;
        let sortedNums = nums.sort((a,b) => a - b);

        for(let i =0; i<sortedNums.length; i++){
            if(nums[i] == missing){
                missing++;
            }
        }
        return missing;
    }
}
