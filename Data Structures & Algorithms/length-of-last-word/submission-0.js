class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let modStr = s.trim().split(' ');
        // console.log(modStr)
        return modStr[modStr.length - 1].length;
    }
}
