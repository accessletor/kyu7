function findAll(arr, n){
    let aray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            aray.push(i)
        }
    }
    return aray;
}

console.log(findAll([6, 9, 3, 4, 3, 82, 11], 3))