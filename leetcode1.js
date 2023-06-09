//2506 Count Pairs Of Similar Strings

let words = ["ab","aabb","ba"];
let count =0;
for(let i=0;i<words.length;i++){
    const word1=words[i].split('');
    const a1=new Set(word1);
    for(let j=i+1;j<words.length;j++){
        const word2=words[j].split('');
        const a2=new Set(word2);
        if(a1.length!==a2.length){
            continue;
        }
        let b1=[...a1].sort().join("");
        let b2=[...a2].sort().join("");
        if(b1===b2){
            count++
        }
    }
}

console.log(count);