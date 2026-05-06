class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        for(let i =0; i<heights.length; i++){
            for(let j = i+1; j<heights.length; j++){
                let area = 0;
                let length = heights[i] < heights[j] ? heights[i] : heights[j];
                // console.log(length);
                area = length * (j-i);

                if(area > maxArea){
                    maxArea = area;
                }
            }
        }
        // console.log(maxArea);
        return maxArea
    }
}
