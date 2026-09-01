class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // did by myself, taking reference from ChatGPT
        let freqTable = {};

        for(let i =0; i<nums.length; i++){
            if(freqTable[nums[i]]){
                freqTable[nums[i]] += 1
            }
            else{
                freqTable[nums[i]] = 1;
            }
        }

        freqTable = Object.entries(freqTable).sort((a,b) => b[1] - a[1]);

        // console.log(freqTable);

        let result = []
        for(let i =0; i<k; i++){
            result.push(freqTable[i][0]);
        }
        

        // console.log(result)
        return result
    }
}
