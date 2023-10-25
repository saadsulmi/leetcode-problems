// 643 Maximum Average Subarray I


// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.


// Example 1:

// Input: 
let nums1 = [1,12,-5,-6,50,3], k1 = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

// Example 2:

// Input: 
let nums2 = [5], k2 = 1

// Output: 5.00000

let findMaxAverage =(nums, k)=> {
    let largeSum=-Infinity
    for(let i=0;i<nums.length-k+1;i++){
        let j=i,sum=0
        while(j<=i+k-1){
            sum+=nums[j++]
        }
        if(sum>largeSum) largeSum=sum
    }
    return largeSum/k
};

console.log(findMaxAverage(nums1,k1));