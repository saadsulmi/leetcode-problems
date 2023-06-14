//1550 Three Consecutive Odds

let array1=[2,6,4,1,5];
let array2=[1,2,34,3,4,5,7,23,12];

const threeConsecutiveFinder=(array)=>{
    for(let i=0;i<array.length-2;i++){
            if(array[i]%2!==0){
                count=1;
                for(let j=i+1;j<=i+2;j++){
                    if(array[j]%2!=0){
                        count++
                    }
                    if(count==3){
                        return true
                    }
            }
        }
        
    }
    return false
}

console.log(threeConsecutiveFinder(array1));