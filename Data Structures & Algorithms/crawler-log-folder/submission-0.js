class Solution {
    /**
     * @param {string[]} logs
     * @return {number}
     */
    minOperations(logs) {
        let stack = [];
        for(let i=0; i<logs.length; i++){
            if(logs[i] === "../"){
                if(stack.length > 0) {
                    stack.pop();
                }
            }
            else if(logs[i] === "./"){
                // Do nothing
            }
            else {
                stack.push(logs[i]);
            }
        }
        return stack.length;
    }
}