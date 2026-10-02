class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;

        let maxLen = 0;
        let map = new Map();
        for(let right = 0; right<s.length; right++){
            map.set(s[right], (map.get(s[right]) || 0) + 1);

            
            while (map.get(s[right]) > 1) {
                // remove from left
                let removed = s[left]
                map.set(removed, map.get(removed) - 1)

                if(map.get(removed) == 0){
                    map.delete(removed)
                }
                left++;
            }
            maxLen = Math.max(right-left+1, maxLen)
        }
        return maxLen
    }
}
