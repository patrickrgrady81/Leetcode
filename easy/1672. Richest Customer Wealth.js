let maximumWealth = (accounts) => {
   let max = -Infinity
    accounts.map(a => {
        check = a.reduce((acc, curr) => acc + curr);
        if (check > max) max = check;
    });
    return max;
}