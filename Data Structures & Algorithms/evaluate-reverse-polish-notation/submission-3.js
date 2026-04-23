class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];

        for(let i =0; i<tokens.length; i++){
            // console.log(stack)
            if(tokens[i] != '*' && tokens[i] != '+' && tokens[i] != '-' && tokens[i] != '/'){
                stack.push(Number(tokens[i]));
            }
            else if(tokens[i] == '+'){
                stack.push(stack.pop() + stack.pop());
            }
            else if(tokens[i] == '*'){
                stack.push(stack.pop() * stack.pop());
            }
            else if(tokens[i] == '-'){
                const rightOperand = stack.pop();
                const leftOperand = stack.pop();
                stack.push(leftOperand - rightOperand);
            }
            else{
                const rightOperand = stack.pop();
                const leftOperand = stack.pop();
                stack.push(Math.trunc(leftOperand / rightOperand));
            }
        }
        // console.log(stack)
        return stack.pop()
    }
}
