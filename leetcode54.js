//26 Remove Duplicates from Sorted Array

// Input: 
let nums1 = [1,1,2]
// Output: 2, nums = [1,2,_]

// Input: 
let nums2 = [0,0,1,1,1,2,2,3,3,4]
// Output: 5 , nums = [0,1,2,3,4,_,_,_,_,_]

var removeDuplicates = function(nums) {
    let d=nums.length-1,r=0
    for(let i=0;i<nums.length-r;i++){
        if(nums[i]==nums[i+1]){
            let j=i+1
            while(j<nums.length-r){
                nums[j]=nums[j+1]
                j++
            }
            nums[d--]='_'
            i--
            r++
        }
    }
    return [nums.length-r,nums]
};

console.log(removeDuplicates(nums2));