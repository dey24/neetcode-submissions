class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let result = []
        for(let i =0; i<arr.length; i++){
            let rightMax = -1;
            for(let j = i+1; j<arr.length; j++){
                rightMax = Math.max(rightMax, arr[j]);
            }
            result[i] = rightMax;
        }

        return result;
    }
}
