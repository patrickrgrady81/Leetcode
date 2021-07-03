let numIdenticalPairs = (nums) => {
    let pairs = []
    for (let i = 0; i < nums.length - 1; i++){
        for (let j = i; j < nums.length; j++){
            if (nums[i] == nums[j] && i < j) pairs.push([i, j])
        }
    }
    console.log(pairs, pairs.length);
    return pairs.length
};

// needs refactoring