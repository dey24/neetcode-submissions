class MyStack {
    constructor() {
        this.input = [];
        this.output = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.input.push(x);
    }

    /**
     * @return {number}
     */
    pop() {
        while(this.input.length > 1){
            this.output.push(this.input.shift());
        }

        const poppedVal = this.input.pop();

        [this.input, this.output] = [this.output, this.input];

        return poppedVal;
        
    }

    /**
     * @return {number}
     */
    top() {
            while(this.input.length > 1){
            this.output.push(this.input.shift());
        }

        const topVal = this.input[0];
        this.output.push(this.input.shift());

        [this.input, this.output] = [this.output, this.input];

        return topVal;

    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.input.length === 0
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
