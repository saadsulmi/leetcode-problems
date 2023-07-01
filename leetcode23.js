//1122 Relative Sort Array

let array1=[2,3,1,3,2,4,6,7,9,2,19];
let array2=[2,1,4,3,9,6];
//expected output : [2,2,2,1,4,3,3,9,6,7,19]

const relativeSorter=(array,relator)=>{
    let limit = relator.length;
    let i=0,k=0;
    while(i<limit){
        for(let j=0;j<array.length;j++){
            if(array[j]===relator[i]){
                let temp = array[j];
                array[j]=array[k];
                array[k++]=temp;
            }
        }
        i++
    }
    for(let j=k;j<array.length;j++){
        for(let m=j+1;m<array.length;m++){
            if(array[m]<array[j]){
                let temp = array[j];
                array[j]=array[m];
                array[m]=temp;
            }
        }
    }
    return array;
}

console.log(relativeSorter(array1,array2));