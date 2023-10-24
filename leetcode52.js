//1287 Element Appearing More Than 25% In Sorted Array

// Example 1:

// Input: 
var arr1 = [1,2,2,6,6,6,6,7,10]
// Output: 6

// Example 2:

// Input: 
var arr2 = [1,1]
// Output: 1

var findSpecialInteger = function(arr) {
    let count=[],m=-1,visited=[],special={value:null,count:-Infinity}
    for(let i=0;i<arr.length;i++){
        if(!visited.includes(arr[i])){
            visited.push(arr[i])
            count[++m]=1
            if(special.count<count[m]){
                special.value = arr[i];
                special.count = count[m]
            }
        }
        else{
            count[m]+=1
            if(special.count<count[m]){
                special.value = arr[i];
                special.count = count[m]
                if(special.count/arr.length>0.25) return special.value
            }
        }
    }
};

console.log(findSpecialInteger(arr1));