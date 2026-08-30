class MyQueue {
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
        this.peek();
        return this.output.pop();

    }

    /**
     * @return {number}
     */
    peek() {
        if(!this.output.length){
            while(this.input.length){
                this.output.push(this.input.pop());
            }
        }
        return this.output[this.output.length -1];
    }

    /**
     * @return {boolean}
     */
    empty() {
        return !this.input.length && !this.output.length
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
