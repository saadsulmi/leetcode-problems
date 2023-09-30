//1446 Consecutive Characters

Input: s1 = "leetcode"
// Output: 2
// Explanation: The substring "ee" is of length 2 with the character 'e' only.

Input: s2 = "abbcccddddeeeeedcba"
// Output: 5
// Explanation: The substring "eeeee" is of length 5 with the character 'e' only.


const consecutiveChar=(str)=>{
    let val=str.split('');
    console.log(val);
    check=0
    count=1;
    for(let i=0;i<=val.length-1;i++){
       if(val[i]==val[i+1]){
         count++
         continue
       }else if(count>check){
            check=count;
            count=1
        
       }
    }
    return check
}

console.log(consecutiveChar(s1));