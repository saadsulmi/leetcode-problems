//Find Closest Number to Zero

let array1=[-4,-2,1,4,8] //expected out : 1
let array2=[2,-1,1] //expected out : 1

const closestNum=(array)=>{
    let sm=Infinity;
    for(let i=0;i<array.length;i++){
        if(Math.abs(array[i])<Math.abs(sm)||Math.abs(array[i])===Math.abs(sm)&&sm<array[i]){
            sm=array[i]
        }
    }
    return sm
}

console.log(closestNum(array2));