//Neither Minimum nor Maximum

//return the value which is not minimum value or maximum value in the array

let ar1=[3,2] //expected out : -1
let ar2=[3,2,1,4] //expected out : 2 or 3

const numFinder=(array)=>{
    if(array.length<=2){
        return -1
    }
    let min=Infinity;
    let max=-Infinity;
    for(let i=0;i<array.length;i++){
        if(min>array[i]){
            min=array[i]
        }
        if(max<array[i]){
            max=array[i]
        }
    }
    for(let i=0;i<array.length;i++){
        if(max!==array[i]&&min!==array[i]){
            return array[i]
        }
    }
    console.log(min,max);
}

console.log(numFinder(ar1));