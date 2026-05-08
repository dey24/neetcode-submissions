class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // let i =0, j=i+1;
        // console.log(temperatures.length)
        let stack = []
        for(let i =0; i<temperatures.length; i++){
            let found = false
            for(let j = i+1; j<temperatures.length; j++){
                if(temperatures[j] > temperatures[i]){
                    stack.push(j-i);
                    found = true;
                    break;
                }
                
            }
            if(!found){
                stack.push(0);
            }
            // console.log(stack)
        }
        return stack
    }
}
