var strStr = function(haystack, needle) {
    if (!needle.length) return 0;
    
    let i = 0;
    let s = 0;
    
    while (i < haystack.length) {
        if (haystack[i + s] != needle[s]) {
            i++;
            s = 0;
        } else {
            s++;
            if (s == needle.length) return i;
        }
    }
    return -1;
};