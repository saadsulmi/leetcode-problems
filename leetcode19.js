//1342 Number of Steps to Reduce a Number to Zero

let num1=14; //expected output : 6
let num2=8; //expected output : 4
let num3=123; //expected output : 12

const stepFinder=(num)=>{
    return stepHelper(num,0)
}

const stepHelper=(num,step)=>{
    if(num==0){
        return step;
    }
    if(num%2==0){
       return stepHelper(num/2,step+1);
    }else{
       return stepHelper(num-1,step+1);
    }
}

console.log(stepFinder(num3));