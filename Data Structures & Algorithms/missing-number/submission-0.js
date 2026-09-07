class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        // Cyclic Sort
        let i =0, n = nums.length;

        while(i < n){
            let correctIndex = nums[i];

            if(nums[i] <= n && nums[i] !== nums[correctIndex]){
                [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
            }
            else{
                i++;
            }
        }

        for(let i=0; i<nums.length; i++){
            if(nums[i] !== i){
                return i;
            }
        }
        return n;
    }
}
