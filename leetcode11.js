//509 Fibonacci Number

const fibonacci=(n)=>{
   if(n<=0){
    return 0
   }else if(n==1){
    return 1
   }
   let val1= fibonacci(n-1);
   let val2= fibonacci(n-2);
   return val1+val2
}
console.log(fibonacci(9));

//f(0)=0
//f(1)=1
//f(2)=1
//f(3)=2
//f(4)=3
//f(5)=5
//f(6)=8
//f(7)=13
