class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let stack = [];
        for (let i = 0; i < asteroids.length; i++) {
            let current = asteroids[i];
            let destroyed = false;
            while (stack.length > 0 && current < 0 && stack[stack.length - 1] > 0) {
                if (stack[stack.length - 1] < Math.abs(current)) {
                    stack.pop();
                    continue;
                } else if (stack[stack.length - 1] === Math.abs(current)) {
                    stack.pop();
                    destroyed = true;
                    break;
                } else {
                    destroyed = true;
                    break;
                }
            }
            if (!destroyed) {
                stack.push(current);
            }
        }
        return stack;
    }
}