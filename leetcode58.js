//169 Majority Element

// Example 1:
// Input1: 
let nums1 = [3,2,3]
// Output: 3

// Example 2:
// Input1: 
let nums2 = [2,2,1,1,1,2,2]
// Output1: 2

const majorityFinder=(nums)=>{
    let digit=[0,0]
    for(let i=0;i<nums.length;i++){
        let count=0
        for(let j=0;j<nums.length;j++){
            if(i!=j&&nums[i]==nums[j]){
                count++
            }
        }
        if(digit[1]<count){
            digit[0]=nums[i];
            digit[1]=count;
        }
    }
    return digit[0]
}

console.log(majorityFinder(nums2));