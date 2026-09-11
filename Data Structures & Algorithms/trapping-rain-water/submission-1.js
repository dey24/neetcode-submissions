class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0;
        let right = height.length - 1;

        let leftMax = 0;
        let rightMax = 0;

        let total = 0;
        while(left < right){
            if(height[left] < height[right]){
                if(leftMax < height[left]){
                    leftMax = height[left];
                }
                else{
                    let water = leftMax - height[left];

                    total += water;
                }
                left++;
            }
            else{
                if(rightMax < height[right]){
                    rightMax = height[right], rightMax;
                }
                else{
                    let water = rightMax - height[right];
                    total+=water;
                
                }
                right--
            }
        }
        return total
    }
}
