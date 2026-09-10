class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        //go through again
        let left = 0;
        let right = height.length -1;

        let leftMax = 0;
        let rightMax = 0;

        let total = 0;
        while(left < right){
            if(height[left] < height[right]){
                if(height[left] > leftMax){
                    leftMax = height[left]
                }
                else{
                    let water = leftMax - height[left];
                    total+=water;
                }
                left++;
            }
            else{
                if(height[right] > rightMax){
                    rightMax = height[right]
                }
                else{
                    let water = rightMax - height[right];
                    total+=water;
                }
                right--;
            }
        }
        return total
    }
}
