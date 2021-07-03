let getDecimalValue = (head) => {
    let bin = "";
    let curr = head;
    let running = true
    while (running){
        bin += curr.val;
        curr = curr.next;
        if (curr === null) running = false;
    }
    return parseInt(bin, 2);
};