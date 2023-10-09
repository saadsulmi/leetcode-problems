// 507 Perfect Number

// A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.

// Input: 
let num1 = 28
// Output: true
// Explanation: 28 = 1 + 2 + 4 + 7 + 14

// Input: 
let num2 = 7
// Output: false

const perfectNumChecker=(val)=>{
    let sum=0;
    for(let i=1;i<=val/2;i++){
        if(val%i==0){
            sum+=i
        }
    }
    if(val===sum) return true
    else return false
}

console.log(perfectNumChecker(num2));