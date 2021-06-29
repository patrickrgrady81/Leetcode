var isValid = function(s) {
    let openPar = ["(","{","[",];
    let lookup = {
        ")": "(",
        "]": "[",
        "}": "{",
    };
    if (s.length < 2 || s.length % 2 === 1) return false;
    if (!openPar.includes(s[0])) return false;
    
    let ours = [];
    for (let i = 0; i < s.length; i++){
        if (openPar.includes(s[i])) {
            ours.push(s[i]);
            continue;
        }
        if (ours.pop() !== lookup[s[i]]) return false;
    }
    if (ours.length !== 0) return false;
    return true
};