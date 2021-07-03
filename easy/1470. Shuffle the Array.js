let shuffle = (nums, n) => {
    let solution = []; 
    let first = nums.slice(0, n);
    let last = nums.slice(n, nums.length);
    for (let i = 0; i < first.length; i++){
        solution.push(first[i], last[i]);
    }
    return solution;
};