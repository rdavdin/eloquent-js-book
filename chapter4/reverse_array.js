/*
* reverse the argument array itself
*/
function reverseArrayInPlace(array){
    for(let i = 0; i < Math.floor(array.length/2); i++){
        let tmp = array[i];
        array[i] = array[array.length - i - 1];
        array[array.length - i - 1] = tmp;
    }
}

/*
* return a new array
*/
function reverseArray(array){
    let newArray = [];
    let halfIndex = Math.floor(array.length/2);
    for(let i = 0; i < halfIndex; i++){
        newArray[array.length - i - 1] = array[i];
        newArray[i] = array[array.length - i - 1];
    }
    if(array.length%2 == 1){
        newArray[halfIndex] = array[halfIndex];
    }
    return newArray;
}
let array1 = ["A"];
console.log(reverseArray(array1));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]


//Lesson learnt:
/**
 * 
 */