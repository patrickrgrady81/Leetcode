let lengthOfLastWord = (s) => {
    if (s.length <= 0 || s === " ") return 0
    return s.trim().split(" ").slice(-1).join('').length;
};