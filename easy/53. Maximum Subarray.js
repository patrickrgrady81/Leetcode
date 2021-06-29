const maxSubArray = (nums) => {
    let best = nums[0];
    let running = nums[0];
    
    for (let i = 1; i < nums.length; i++){
        // best + num[i] or nums[i]
        running = Math.max(nums[i], running + nums[i]);
        best = Math.max(running, best);
    }
    return best;
};