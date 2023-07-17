//1952 Three Divisors

//return true if it has exactly 3 divisors

let n1=2 //false
let n2=4 //true

const divChecker=(value)=>{
    let count=0;
    for(let i=1;i<=value;i++){
        if(value%i===0){
            count++
        }
    }
    if(count==3) return true
    
    return false
}

console.log(divChecker(9));