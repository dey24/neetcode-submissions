class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        //dp
        let profit = 0;
        let buy = prices[0];
        for(let i = 1; i<prices.length; i++){
            buy = Math.min(buy, prices[i]);
            profit = Math.max(profit, prices[i] - buy);
        }
        return profit;
    }
}
