class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let left = Math.max(...weights);
        let right = 0;
        for(let i=0; i<weights.length; i++){
            right += weights[i]
        }

        while(left <= right){
            let mid = Math.floor((left+right)/2);

            let daysNeeded = 1;
            let currentWeight = 0;

            for(let weight of weights){
                if(currentWeight + weight > mid){
                    daysNeeded++;
                    currentWeight = 0;
                }
                currentWeight += weight;
            }

            if(daysNeeded <= days){
                right = mid - 1;
            }
            else{
                left = mid+1;
            }
        }
        return left
    }
}
