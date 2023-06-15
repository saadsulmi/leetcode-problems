//1909 Remove One Element to Make the Array Strictly Increasing

let array1=[1,2,10,5,7];
let array2=[2,3,1,2];
let array3=[1,1,1];

const swap=(i,array)=>{
    for(let j=i;j<array.length-1;j++){
        array[j]=array[j+1];
    }
    array.pop()
}

const increaseCheck=(array)=>{
    let checker=0;
    for(let i =0;i<array.length;i++){
        
        if(array[i]<array[i+1]){
            continue;
        }
        if(array[i]>=array[i+1]){
            if(checker===1){
                return false
            }
            swap(i,array);
            i=i-2
            checker++
        }
        if(checker>1){
            return false
        }
        console.log(checker);
    }
    console.log(array);
    return true;
}

console.log(increaseCheck(array1));