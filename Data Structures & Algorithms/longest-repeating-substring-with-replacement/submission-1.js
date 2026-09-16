class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let map = new Map();

        let max = 0;
        let res = 0;
        for(let right = 0; right<s.length; right++){
            map.set(s[right], (map.get(s[right]) || 0) + 1);
            max = Math.max(max, map.get(s[right]));
            //this condition checks if valid window or not
            while((right - left + 1) - max > k){ 
                map.set(s[left], map.get(s[left]) - 1);
                left++;
            }

            res= Math.max(res, right-left+1);
        }

        return res;
    }
}
