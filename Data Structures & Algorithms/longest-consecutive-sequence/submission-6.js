class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        //did it by myself using chatgpt hints. Not full code.
        if(nums.length == 0){
            return 0;
        }
        
        const set = new Set(nums);

        let max = 0;
        for(let num of set){
            let next = num + 1;
            let count = 1;
            if(!set.has(num - 1)){ //most important condition
                while(set.has(next)){
                    count++;
                    next++; //do not forget
                }
            }
            max = Math.max(max, count);
        }

        return max
    }
}
