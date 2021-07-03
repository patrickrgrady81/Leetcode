let kidsWithCandies = (candies, extraCandies) => {
    let max = Math.max(...candies);
    for (let i = 0; i < candies.length; i++){
        candies[i] + extraCandies >= max ? candies[i] = true : candies[i] = false;
    }
    return candies;
};