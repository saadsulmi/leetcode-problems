//Remove Digit From Number to Maximize Result

//return the resulting value after removing exactly one occurrence of digit

let number1=123 , digit1 =3 ; //expected out: 12
let number2=1231 , digit2 =1 ; //expected out: 231
let number3=551 , digit3 =5 ; //expected out: 231

const remover=(value,digit)=>{
    
    let arr=value.toString().split('');
    let res=[]
    for(let i=0;i<arr.length;i++){
        let val=[...arr]
        if(parseInt(val[i])===digit){
            val.splice(i,1);
            let obtainer=parseInt(val.join(''))
            res.push(obtainer)
        }
    }
    let largest=-Infinity;
    for(let i=0;i<res.length;i++){
        if(res[i]>largest){
            largest=res[i]
        }
    }
    return largest==-Infinity?value:largest
}

console.log(remover(number3,5));