class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        console.log(strs[0][0])
        
        let pref = strs[0];
        for(let i =1; i<strs.length; i++){
            let j =0;
            while(j < Math.min(pref.length, strs[i].length)){
                if(pref[j] !== strs[i][j]){
                    break;
                }
                j++;
            }
            pref = pref.slice(0,j);
        }

        return pref
    }
}
