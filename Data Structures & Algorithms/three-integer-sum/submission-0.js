class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        if(nums.length === 0)  return [];
        let res = new Set();
        let sortedArr = nums.sort((a,b) => a-b);

        for(let i =0; i<sortedArr.length -2; i++){
            let  left = i+1;
            let right = sortedArr.length -1;
            let curr = sortedArr[i];
            while(left< right){
                let sum = curr + nums[left] + nums[right]
                if( sum === 0){
                    res.add([curr, nums[left], nums[right]].join(','));
                    left++;
                    right--;
                }
                else if(sum < 0){
                    left++;
                }
                else{
                    right--;
                }
            }
        }
        
        return Array.from(res).map((item) => item.split(',').map(item => +item));
    }
}
