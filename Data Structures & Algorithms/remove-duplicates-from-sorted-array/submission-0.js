class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let i = nums.length-1, j = nums.length-2;
        let count = 0;
        while(j>=0){
            if(nums[i] !== nums[j]){
                i--;
                j--;
            }
            else{
                nums.splice(j, 1);
                j--;
                i--;
            }
        }

        console.log(nums)
        return nums.length
    }
}
