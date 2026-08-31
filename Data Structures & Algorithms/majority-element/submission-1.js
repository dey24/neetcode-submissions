class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        // Boyer-Moore Voting Solution
        // https://www.instagram.com/reel/Dctv5b6P02S/?igsi=MTZjdmkwbDZ3OHQ4cQ==
        let count = 0;
        let candidate = 0;

        for(let i =0; i<nums.length; i++){
            if(count == 0){
                candidate = nums[i];
            }

            if(candidate == nums[i]){
                count++
            }
            else{
                count--
            }
        }

        return candidate
    }
}
