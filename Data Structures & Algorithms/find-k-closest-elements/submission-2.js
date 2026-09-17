class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        //most optimal solution
        let left = 0, right = arr.length - 1;

        while(right - left >= k){
            if(Math.abs(x - arr[left]) > Math.abs(x - arr[right])){
                left++;
            }
            else{
                right--;
            }
        }

        return arr.slice(left, right+1);
    }
}
