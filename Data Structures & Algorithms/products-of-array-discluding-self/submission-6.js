class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        //prefix + postfix solution. Most optimal. TC -> O(n), SC -> O(1);
        let n = nums.length;
        let res = new Array(n).fill(1);

        for(let i =1; i<nums.length; i++){
            res[i] = res[i-1] * nums[i-1];
        }

        // console.log(res);
        let postfix = 1;
        for(let i = n-1; i>=0; i--){
            res[i] *= postfix;
            postfix *= nums[i]
        }

        // console.log(res)
        return res;
    }
}
