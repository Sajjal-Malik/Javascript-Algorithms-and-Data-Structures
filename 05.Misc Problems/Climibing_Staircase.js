function climbingStaircase(n){
    const noOfDays = [1, 2];
    for(let i = 2; i < n; i++){
        noOfDays[i] = noOfDays[i - 1] + noOfDays[i - 2];
    }

    return noOfDays[n - 1];
}

console.log(climbingStaircase(1))
console.log(climbingStaircase(2))
console.log(climbingStaircase(3))
console.log(climbingStaircase(4))
console.log(climbingStaircase(5))