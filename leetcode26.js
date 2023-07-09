//1979 Find the Greatest Common Divisor of Array

//gratest common divisor of largest and smallest values in the array

let array1=[2,5,6,9,10] //Expected output : 2
let array2=[7,5,6,8,3] //Expected output : 1
let array3=[3,3] //Expected output : 3

const largestCommonDivisor=(array)=>{
    let smallest=+Infinity;
    let largest=-Infinity;
    for(let i=0;i<array.length;i++){
        if(array[i]<smallest){
            smallest=array[i];
        }
        if(array[i]>largest){
            largest=array[i];
        }
    }
    if(largest%smallest==0){
        return smallest
    }
    for(let i=Math.round(smallest/2);i>0;i--){
        if(largest%i==0&&smallest%i==0){
            return i
        }

    }
}

console.log(largestCommonDivisor(array2));