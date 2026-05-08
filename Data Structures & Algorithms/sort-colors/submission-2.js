class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        // Use the three pointer approach here. ileft will handle 0s, mid will handled 1s, right will handle 2s.
        let left = 0, mid = 0, right = nums.length -1;

        while(mid<=right){
            if(nums[mid] == 0){
                [nums[left], nums[mid]] = [nums[mid], [nums[left]]];
                mid++;
                left++;
            }
            else if(nums[mid] == 1) mid++;
            else{
                [nums[mid], nums[right]] = [nums[right], nums[mid]];
                right--;
            }
        }
        return nums
    }
}   
