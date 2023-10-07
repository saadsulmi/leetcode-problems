//441 Arranging Coins

// Input: n = 5
// Output: 2
// Explanation: Because the 3rd row is incomplete, we return 2.

// Input: n = 8
// Output: 3
// Explanation: Because the 4th row is incomplete, we return 3.

const stepFinder = (val)=>{
    let stepCount=0;
    let checker=1;
    let meter=1
    for(let i=1;i<=val;i++){
        if(meter==checker){
            stepCount++;
            checker++;
            meter=1;
        }else{
            meter++
        }
    }
    return stepCount
}

console.log(stepFinder(8));