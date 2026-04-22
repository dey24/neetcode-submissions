class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let resultArr = [];

        for(let i=0; i<operations.length; i++){
            if(!isNaN(Number(operations[i])) && operations[i] !== ""){
                resultArr.push(Number(operations[i]));
            } else if(operations[i] == "+"){
                resultArr.push(resultArr[resultArr.length - 1] + resultArr[resultArr.length - 2]);
            } else if(operations[i] == "C"){
                resultArr.pop();
            } else if(operations[i] == "D"){
                resultArr.push(resultArr[resultArr.length - 1] * 2);
            }
        }
        console.log(resultArr)
        let sum = 0;
        for(let i =0; i<resultArr.length; i++){
            sum += resultArr[i];
        }
        return sum
    }
}