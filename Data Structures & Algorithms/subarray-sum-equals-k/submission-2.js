class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        //solved by myself with just some hints from ChatGPT
        let count = 0;

        for(let i=0; i<nums.length; i++){
            if(nums[i] == k){
                count++;
            }
            let j = i+1;
            let sum = nums[i]; // -1, 0
            while(j < nums.length){
                sum += nums[j];

                if(sum == k){
                    count++;
                }
                j++
            }
        }
        return count;
    }
}
