let plusOne = (digits) => {
    let carry = false;
    for (let i = digits.length - 1; i >= 0; i--){
        digits[i] = digits[i] + 1;
        if (digits[i] > 9) {
            carry = true;
            digits[i] = digits[i] % 10;
        } else {
            carry = false;
        }
        if (!carry) return digits
    }
    if (carry) digits.unshift(1);
    return digits
};