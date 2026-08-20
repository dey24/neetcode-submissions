class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }
        const hashMapS1 = {};
        const hashMapS2 = {};

        for(let i =0; i<s.length; i++){
            hashMapS1[s[i]] = (hashMapS1[s[i]] || 0) +1;
            hashMapS2[t[i]] = (hashMapS2[t[i]] || 0) +1;
        }
        console.log(hashMapS1, 'S1')
        console.log(hashMapS2, 'S2')

        for(const key in hashMapS1){
            if(hashMapS1[key] !== hashMapS2[key]){
                return false
            }
        }
        return true;
    }
}
