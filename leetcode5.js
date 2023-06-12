//1346 Check If N and Its Double Exist
 let array1=[5,3,5,14,1];
 let array2=[10,3,5,14,1];

 const Checker=(array)=>{
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length;j++){
            if(i!=j){
                if(array[i]===2*array[j]){
                    return true;
                }
            }
        }
    }
    return false;
 }
 console.log("array1 :"+Checker(array1));
 console.log("array2 :"+Checker(array2));