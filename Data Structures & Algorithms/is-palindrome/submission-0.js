class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const modStr = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
        console.log(modStr);

        let i = 0;
        let j = modStr.length-1;
        while(i <= j){
            if(modStr[i] != modStr[j]){
                return false;
            }
            i++;
            j--;
        }
        return true
    }
}
