class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let n = nums.length;

        let map = {};

        for(let i=0; i<n; i++){
            if(!map[nums[i]]){
                map[nums[i]] = 1;
            }
            else{
                map[nums[i]]+= 1;
            }
        }

        // console.log(map)
        let res = []
        for(let key in map){
            if(map[key] > n/3){
                // console.log(map[key])
                res.push(Number(key));
            }
        }

        // console.log(res)
        return res;
    }
}
