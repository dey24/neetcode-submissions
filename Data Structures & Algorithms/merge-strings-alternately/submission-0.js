class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let resultStr  = '';

        let greaterLength = (word1.length < word2.length ? word2.length : word1.length);
        console.log(greaterLength);

        for(let i=0; i<greaterLength; i++){
            if(word1[i] >= 'a' || word1[i] <='z'){
                resultStr = resultStr.concat(word1[i]);
            }
            if(word2[i] >= 'a' || word2[i] <= 'z'){
                resultStr = resultStr.concat(word2[i]);
            }
            else{
                continue;
            }
        }

        // console.log(resultStr)
        return resultStr;
    }
}
