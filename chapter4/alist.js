function arrayToList(array=[]){
    let ret = {};
    if(array.length == 0) return ret;
    for(let i = array.length - 1; i >= 0; i--){
        if(i == array.length - 1){
            ret = prepend(array[i], null);
        }else{
            ret = prepend(array[i], ret);
        }
    }
    return ret;
}

function listToArray(list={}){
    let result = [];
    if(Object.keys(list).length === 0) return result;
    while(list){
        result.push(list.value);
        list = list.rest;
    }
    return result;
}

function prepend(value, list){
    return {value : value, rest : list};
}

function nth(list, index){
    if(index == 0) return list.value;
    else if(index < 0) return undefined;
    else if(list.rest == null && index > 0) return undefined;
    else return nth(list.rest, index-1); 
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20