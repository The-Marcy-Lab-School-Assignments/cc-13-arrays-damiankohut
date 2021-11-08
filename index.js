//write your code here
function averageInArray(array) {
    var sum = 0;
    for(var i = 0; i < array.length;i++){
        sum += array[i];
    }
    return sum / array.length;
}

console.log(averageInArray([2,2,5,10]))