class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let map = {
            '}' : '{',
            ']' : '[',
            ')' : '('
        } //This is a dictionary to map the opening brackets to the closing ones

        for(let c of s){
            if(map[c]){ // check if character of the string matches the character in the dictionary
                if(stack.length > 0 && stack[stack.length - 1] === map[c]){ //if last entered character in the stack matches its corresponding character in the string "s"
                    stack.pop();
                }
                else{
                    return false //does not match, not valid
                }
            }
            else{
                stack.push(c); //if it doesn't exist then push the character to the stack.
            }
        }
        return stack.length === 0; // this condition is necessary as this actually returns true only if stack is empty.
    }
}
