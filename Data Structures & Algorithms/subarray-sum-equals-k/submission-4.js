class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        //Optimal solution TC -> O(n)
        let res = 0, currSum = 0;

        let map = new Map();
        map.set(0, 1);

        for(let num of nums){
            // console.log(map)
            currSum += num;

            let diff = currSum - k;
            res = res + (map.get(diff) || 0);
            map.set(currSum, (map.get(currSum) || 0) + 1);
        }

        return res;
    }
}
