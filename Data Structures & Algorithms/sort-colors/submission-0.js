class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        for(let i =0; i<nums.length; i++){
            for(let j =0; j<nums.length; j++){
                if(nums[j] < nums[i]){
                    [nums[i], nums[j]] = [nums[j], nums[i]];
                }
                else{
                    continue
                }
            }
        }
        return nums.reverse()
    }
}
