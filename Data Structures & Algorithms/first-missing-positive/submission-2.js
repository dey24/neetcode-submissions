class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        //Cycle Sort solution
        let i= 0, n = nums.length;

        while(i < n){
            if(nums[i] <= 0 || nums[i] > n){
                i++;
                continue;
            }
            let correctIndex = nums[i] - 1;

            if(nums[i] !== nums[correctIndex]){
                [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
            }
            else{
                i++;
            }
        }

        // console.log(nums)
        for(let i =0; i<n; i++){
            if(nums[i] !== i+1){
                return i+1;
            }
        }
        return n+1;
    }
}
