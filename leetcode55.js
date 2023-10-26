// 27 Remove Element

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Input1: 
let nums1 = [3,2,2,3], val1 = 3
// Output: 2, nums = [2,2,_,_]

// Input2: 
let nums2 = [0,1,2,2,3,0,4,2], val2 = 2
// Output: 5, nums = [0,1,3,0,4,_,_,_]

let removeElement = (nums, val)=> {
    let r=0
    for(let i=0;i<nums.length-r;i++){
        if(nums[i]===val){
            let j=i;
            while(j<nums.length-r){
                nums[j]=nums[j+1]
                j++
            }
            nums[nums.length-1-r]='_'
            i--
        }
    }
    return [nums.length-r,nums]
};

console.log(removeElement(nums2,val2));