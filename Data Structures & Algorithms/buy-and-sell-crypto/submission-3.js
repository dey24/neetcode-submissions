class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let profit = 0;
        let bought = prices[0];
        let maxProfit = 0
        for(let right = 1; right<prices.length; right++){
            if (prices[right] < bought) {
                bought = prices[right];
            }
            profit = prices[right] - bought;
            maxProfit= Math.max(profit, maxProfit);
        }

        return maxProfit
    }
}
