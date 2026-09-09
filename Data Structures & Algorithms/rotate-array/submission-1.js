class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        k = k % nums.length;

        let tempArr = nums.splice(nums.length - k, k);

        nums.unshift(...tempArr)
    }
}
