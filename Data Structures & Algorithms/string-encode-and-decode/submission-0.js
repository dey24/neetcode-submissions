class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const res  = [];

        for(let s of strs){
            res.push(String(s.length), '#', s);
        }

        // console.log(res)
        return res.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];

        let i = 0;
        while(i <str.length){
            let j = i;
            while(str[j] !== '#'){
                j++
            }
            // console.log(i, j)
            let length = parseInt(str.substring(i,j));
            // console.log(length)
            i = j+1;
            j = i + length;

            res.push(str.substring(i,j));
            i = j;
        }
        return res
    }
}
