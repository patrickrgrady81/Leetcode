const reverse = (x) => {
    if(x > 2**31 || x < (-2)**31) return 0;
    let negative = false;
    if (x < 0){
        negative = true;
        x *= -1;
    }
    let str = x.toString().split("").reverse();
    
    let newArr = [];
    for (let i=str.length-1; i>= 0; i--){
        newArr = [...newArr, str[i]];
    }
    if(negative) newArr.unshift('-');
    let num = newArr.join('');
    console.log(num);
    return (num < (-2)**31 || num >= 2**31) ? 0 : num
};