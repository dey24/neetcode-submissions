class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s, i, j){
        while(i<j){
            if(s[i] !== s[j]){
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
    validPalindrome(s) {
        let i =0;
        let j = s.length-1
        // abc
        while(i < j){
            if(s[i] !== s[j]){
               return this.isPalindrome(s,i+1, j) || this.isPalindrome(s,i,j-1);
            }
            i++;
            j--;
        }
        return true;
    }
}
