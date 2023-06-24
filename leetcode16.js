//1047 Remove All Adjacent Duplicates In String

let s1='abbaca'
let s2='azxxzy'

const adjacentDuplicateRemover=(string)=>{
    let char=string.split('');
    for(let i=0;i<char.length;i++){
        if(char[i]!==char[i+1]){
            continue;
        }
        if(char[i]===char[i+1]){
            char.splice(i,2);
            i=i-2;
        }
    }
    string=char.join('')
    return string
}

console.log(adjacentDuplicateRemover(s1));