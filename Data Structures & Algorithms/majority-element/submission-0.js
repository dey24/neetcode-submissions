class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let majorityCount = (nums.length - 1)/2;

        // console.log(majorityCount);

        let hashMap = {};

        for(let i =0; i<nums.length; i++){
            if(hashMap[nums[i]]){
                hashMap[nums[i]]++
            }
            else {
                hashMap[nums[i]] = 1;
            }
        }

        // console.log(hashMap)
        for(let item in hashMap){
            if(hashMap[item] > majorityCount){
                return item;
            }
        }
    }
}
