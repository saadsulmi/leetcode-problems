//1800 Maximum Ascending Subarray Sum

let nums1 = [10,20,30,5,10,50] //Output: 65
let nums2 = [10,20,30,40,50] //Output: 150
let nums3 = [12,17,15,13,10,11,12] //Output: 33

const subarraySum=(array)=>{
    let greatestSum=0
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum+=array[i]
        if(sum>greatestSum){
            greatestSum=sum;
        }
        if(array[i]>array[i+1]){
            sum=0
        }
    }
    return greatestSum
}

console.log(subarraySum(nums3));