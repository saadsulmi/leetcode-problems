//1464 Maximum Product of Two Elements in Array

//operation to do : (num[i]-1)*(num[j]-1); where i and j gives out max product;

let a1= [3,4,5,2]; //expected output:12
let a2= [1,5,4,5]; //expected output:16
let a3= [3,7]; //expected output:12

const maxProductFinder = (array) =>{
    let largest,lIdx,sIdx;
    let secondLargest=-Infinity;
    for(let i=0;i<array.length;i++){
        if(i===0){
            largest=array[i];
            lIdx=i
            continue;
        }

        if(array[i]>secondLargest){
            if(array[i]>largest){
                secondLargest=largest;
                sIdx=lIdx
                largest = array[i];
                lIdx=i
            }else{
                secondLargest=array[i];
                sIdx=i;
            }
        }
    }
    return (array[lIdx]-1)*(array[sIdx]-1);
}

console.log(maxProductFinder(a3));