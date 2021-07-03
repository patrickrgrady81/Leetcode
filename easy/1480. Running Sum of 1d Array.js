let runningSum = (nums) => {
    let running = [nums[0]];
    console.log(running);
    for (i = 1; i < nums.length; i++) {
        running.push(nums[i] + running[i-1]);
    }
    return running;
};