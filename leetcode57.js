// 724 Find Pivot Index


//Given an array of integers nums, calculate the pivot index of this array.
// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
// Return the leftmost pivot index. If no such index exists, return -1.

 

// Example 1:

// Input: 
let nums1 = [1,7,3,6,5,6]
// Output: 3

// Example 2:

// Input: 
let nums2 = [1,2,3]
// Output: -1

// Example 3:

// Input: 
let nums3 = [2,1,-1]
// Output: 0


const PivotFinder=(nums)=>{
    let pivot = -1
    let leftSum =0
    let rightSum = nums.reduce((a,b)=>a+b)
    for(let i=0;i<nums.length;i++){
        leftSum+=nums[i-1]||0;
        rightSum-=nums[i];
        if(leftSum===rightSum) return i
    }
    return pivot
}
console.log(PivotFinder(nums3));