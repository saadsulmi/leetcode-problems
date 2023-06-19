//14 Longest Common Prefix

let str1=['flower','flow','flight'];
let str2=['dog','racecar','car'];
let str3=['amaze','amazing','aman','ama']

const checker=(str)=>{
    let Prefix=+Infinity;
    for(let i=0;i<str.length-1;i++){
        let val = checkHelper(str[i],str[i+1]);
        if(val<Prefix){
            Prefix=val;
        }
    }
    return str[1].slice(0,Prefix);
}

const checkHelper=(str1,str2)=>{
    let idx=0;
    while(idx<str1.length&&idx<str2.length){
        if(str1[idx]===str2[idx]){
            idx++
        }else{
            return idx;
        }
    }
    return idx;
}

console.log(checker(str3))