class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    sameMap(map1, map2){
        if(map1.size !== map2.size){
            return false
        }
        for (let [key, value] of map1) {
            if (map2.get(key) !== value) {
                return false;
            }
        }
        return true;
    }
    checkInclusion(s1, s2) {
        let left = 0; 
        let map1 = new Map();

        for(let ch of s1){
            map1.set(ch, (map1.get(ch) || 0) + 1);
        }

        // console.log(map1)
        let map2 = new Map();
        for(let right=0; right<s2.length; right++){
            map2.set(s2[right], (map2.get(s2[right]) || 0) + 1);
            if (right - left + 1 === s1.length) { // window length check
                if (this.sameMap(map1, map2)) { //same map or not
                    return true;
                }
                let removed = s2[left]; //storing for reference
                map2.set(removed, map2.get(removed) - 1); //decrease the count of frequency
                if (map2.get(removed) === 0) {
                    map2.delete(removed); //remove if frequency is 0
                }
                left++; // shrink window as current window invalid
            }
        }
        return false
    }
}
