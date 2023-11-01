// 674 Longest Continuous Increasing Subsequence

// Given an unsorted array of integers nums, return the length of the longest continuous increasing subsequence (i.e. subarray). The subsequence must be strictly increasing

// Example 1:

// Input1: 
let nums1 = [1,3,5,4,7]
// Output: 3

// Example 2:

// Input2:
let nums2 = [2,2,2,2,2]
// Output: 1


const sequencer=(nums)=>{
    let diff=0,count=1,streak=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===nums[i+1]||nums[i+1]-nums[i]!=diff){
            if(count>streak) streak=count;
            count=1
        }
        if(count===1) diff=nums[i+1]-nums[i];
        if(nums[i+1]-nums[i]===diff&&diff>0) count++ ;
    }
    return streak
}

console.log(sequencer(nums2));