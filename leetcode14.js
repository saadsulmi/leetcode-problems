//219 Contain Duplicate II

//num[i]==num[j]
//abs(i-j)<=k

let num1 =[1,2,3,1] ,k1=3;
let num2 =[1,0,1,1] ,k2=1;
let num3 =[1,2,3,1,2,3],k3=2;

const checkerFunction=(num,k)=>{
    for(let i=0;i<num.length;i++){
       for(let j=i+1;j<num.length;j++){
            if(num[i]===num[j]&&Math.abs(i-j)<=k){
                return true;
            }
       }
    }
    return false;
}

console.log(checkerFunction(num3,k3));