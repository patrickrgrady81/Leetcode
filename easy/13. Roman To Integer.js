var romanToInt = function(s) {
    lookup = {
        "0": 0,
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M" : 1000
    }
    r = s.split("");
    let rtod = r.map(roman => {
        return lookup[roman]; 
    });
    let left = 0;
    newArr = [];
    while (left < rtod.length){
        if (left === rtod.length - 1 || rtod[left] >= rtod[left + 1]) {
            newArr.push(rtod[left]);
            left++;
        } else {
            newArr.push(rtod[left + 1] - rtod[left]);
            left += 2;
        }
    }
    sum = newArr.reduce((acc, curr) => {
        return acc + curr; 
    });
    return sum;
    
    
};