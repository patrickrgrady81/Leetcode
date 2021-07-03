let numJewelsInStones = (jewels, stones) => {
    let hm = {};
    
    //build hashmap
    for (let i = 0; i < stones.length; i++){
        if (stones[i] in hm) {
            hm[stones[i]] += 1;
        } else {
            hm[stones[i]] = 1;
        }
    }
    // console.log(hm);
    
    // check  hm for jewels
    let j = jewels.split('');
    let count = 0;
    for (let i = 0; i < j.length; i++){
        // console.log(hm[j[i]])
        if (j[i] in hm) count += hm[j[i]];
    }
    return count;
};