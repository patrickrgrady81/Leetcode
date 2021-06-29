const twoSum = (nums, target) => {
    let hm = {};
    
    for(let i = 0; i < nums.length; i++){
        need = target - nums[i];
        console.log(need, nums[i])
        if(need in hm) {
            return [i, nums[i]]
        }
        hm[need] = nums[i]
    }
    console.log(hm);
}