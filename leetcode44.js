//290 Word Pattern

// Input: 
pattern1 = "cdfdd", s1 = "dog cat pig cat cat"
// Output: true

// Input: 
pattern2 = "abba", s2 = "dog cat cat fish"
// Output: false

// Input: 
pattern3 = "abba", s3 = "dog cat cat dog"
// Output: true


const wordPatternCheck=(pattern,string)=>{
    let res1=pattern.split('')
    let res2=string.split(' ')
    if(res1.length!==res2.length){
        return false
    }
    for(let i=0;i<res1.length;i++){
        for(let j=0;j<res1.length;j++){
            if(res1[i]===res1[j]&&res2[i]!==res2[j]){
                return false
            }
            if(res1[i]!==res1[j]&&res2[i]===res2[j]){
                return false
            }
        }
    }
    return true
}

console.log(wordPatternCheck(pattern1,s1));
