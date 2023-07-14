//Second Largest Digit in a String

let s1='dfa12314afd'; //out : 1
let s2='abc1111';  //out : -1

//return 1 if there is a second largest else return -1

const slDigits=(str)=>{
    let firstLargest=-Infinity;
    let secondLargest=-Infinity;
    str=str.split('')
    for(let i=0;i<str.length;i++){
        let val=parseInt(str[i]);
        if(firstLargest<val){
            secondLargest=firstLargest;     
            firstLargest=val;
        }
    }
    if(secondLargest==-Infinity){
        return -1
    }else{
        return secondLargest
    }
}

console.log(slDigits(s2))