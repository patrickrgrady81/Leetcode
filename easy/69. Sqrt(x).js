var mySqrt = function(x) {
    let left = 0;
    let right = x;
    let middle = 0;
    
    while (left <= right){
        middle = Math.floor((left + right) / 2);
        if (middle * middle === x) return middle;
        middle * middle > x ? right = middle - 1 : left = middle + 1;
    }
    return right;
};