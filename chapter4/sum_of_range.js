/*
* return: array from start to end
* noted: start and end are inclusive
*/
function range(start, end, step = start < end ? 1 : -1){
    if(step == 0 || 
        step > 0 && start > end ||
        step < 0 && start < end) return [];
    let ret = [], cur = start, cont = true;
    do {
        ret.push(cur);
        cur += step;
        cont = step > 0 ? cur <= end : cur >= end;
    }while(cont);
    return ret;
}

function sum(numbers){
    let total = 0;
    for(let number of numbers){
        total += number;
    }
    return total;
}

console.log(range(1, -1, 2));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));