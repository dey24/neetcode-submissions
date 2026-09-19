class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let k = 0;

        let n = piles.length;
        let left = 1;
        let right = Math.max(...piles);

        while(left<right){
            let mid = Math.floor((left+right)/2);
            
            let sum = 0
            for(let pile of piles){
                sum += Math.ceil(pile / mid);
            }

            if(sum <= h){
                 right = mid
            }
            else{
                left = mid+1
            }
        }
        return left;
    }
}
