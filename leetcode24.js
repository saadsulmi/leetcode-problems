//1619 Mean of Array After Removing Some Elements

//find mean after removing smallest and largest elemenets
let array1 =[1,2,2,2,2,2,2,2,2,3];  //Expected output : 2
let array2 =[6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0]; //Expected output : 4
let array3 =[6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4,8,1,9,5,4,3,8,5,10,8,6,6,1,0,6,10,8,2,3,4]; //Expected output : 4.78

const meanFinder=(array)=>{
    let largest = -Infinity;
    let smallest = Infinity;
    let total=0;
    for(let i=0;i<array.length;i++){
        if(array[i]<smallest){
            smallest=array[i];
        }
        if(array[i]>largest){
            largest=array[i];
        }
        total+=array[i];
    }
    let n=array.length-2;
    return (total-smallest-largest)/n
}

console.log(meanFinder(array3));
