//541 Reverse String II

// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

// Example 1:

// Input:

let s1 = "abcdefg", k1 = 2;

// Output: "bacdfeg"

// Example 2:

// Input: 
let s2 = "abcd", k2 = 2;
// Output: "bacd"

const stringReverser=(s,k)=>{
    let str = s.split('')
    for(let i=0;i<str.length;i++){ 
            reverser(i,k+i,k,str)
            i=i+2*k-1
        }
    
    return str.join('')
}

reverser=(i,j,k,str)=>{
    const val=str.slice(i,j);
    val.reverse()
    str.splice(i,k,...val)
}
console.log(stringReverser(s1,k1))