class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        //brute force
        let diff = 0;

        for(let i = 0; i<prices.length; i++){
            let j = i+1;

            while(j<prices.length){
                let difference = prices[j] - prices[i];

                if(difference > diff){
                    diff = difference;
                }
                j++;
            }
        }
        return diff;
    }
}
