// 1295 Find Numbers with Even Number of Digits

// input1:
let nums1 = [12, 345, 2, 6, 7896];
// output: 2;
// input2:
let nums2 = [555, 901, 482, 1771];
// output2: 1;

const EvenDigitCounter = (nums) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 === 0) count++;
  }
  return count;
};

console.log(EvenDigitCounter(nums2));
