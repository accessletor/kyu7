function divisors(n){
    let arr = [];
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            arr.push(i)
            if (i !== n / i) {
                arr.push(n / i)
            }
        }
    }
    arr.sort((a,b) => a - b);
    if (arr.length === 0) {
        return `${n} is prima`
    }
    return arr;
}

console.log(divisors(13))