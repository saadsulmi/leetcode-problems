//258 Add Digits

let num1=381 // expected out : 2
let num2=0 // expected out : 0

const numFast=(num)=>{
    if(num==0){
        return 0
    }
    let val=0,init;
    while(num!=0){
        val=val+num%10;
        num=(num-num%10)/10;
        if(val-val%10===0&&num==0){
            return val
        }
        if(num===0){
            num=val;
            val=0
        }
        init++
    }
}

console.log(numFast(num1));