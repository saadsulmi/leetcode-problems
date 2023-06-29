//1317 Convert Integer to the Sum of Two No-Zero Integers

let n1 = 2;
let n2 = 21;

function converter(num){
    let result=[]
    let m=1;
    let n=num-1;
    while(n%10===0){
        m++;
        n--;
    }
    if(n+m===num){
        result.push(n);
        result.push(m);
    }
    return result

}
console.log(converter(n2))