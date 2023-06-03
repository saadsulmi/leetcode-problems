//1662 Check If Two String Array are Equivalent

let str1=["abc","d"];
let str2=["a","b","cd"];
let limit,word1="",word2="";
if(str1.length<str2.length){
    limit=str2.length;
}else{
    limit=str1.length;
}

console.log(limit);

for(let i=0;i<limit;i++){
    if(str1.length>i){
        word1+=str1[i];
    }
    if(str2.length>i){
        word2+=str2[i];
    }
}

if(word1===word2){
    console.log("true");
}else{
    console.log("false");
}