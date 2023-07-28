//383 Ransom Note

let ransomNote1 = "a", magazine1= "b" //Expected  Output: false
let ransomNote2 = "aa", magazine2= "ab" //Expected  Output: false
let ransomNote3 = "aa", magazine3= "aab" //Expected  Output: true

const canConstruct = (ransomNote, magazine)=>{

    let obj1 = {};
    let obj2 = {};
    for(let i=0; i<ransomNote.length; i++){
        if(obj1[ransomNote[i]]===undefined){
           obj1[ransomNote[i]]=1 
        } else {
            obj1[ransomNote[i]]++;
        }
    }

    for(let i=0; i<magazine.length; i++){
        if(obj2[magazine[i]]===undefined){
           obj2[magazine[i]]=1 
        } else {
            obj2[magazine[i]]++;
        }
    }

    for(let key in obj1){
        if(obj2[key]===undefined || obj1[key] > obj2[key]){
            return false;
        }
    }
    return true;
};

console.log(canConstruct(ransomNote3,magazine3));