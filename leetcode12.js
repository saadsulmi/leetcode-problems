//392 Is Subsequence

let s1='abc';
let s2='adh';
let t='ahbgdcegfed';

const subSequence=(s,t)=>{
    let init=0;
    let count=0;
    for(let i=0;i<s.length;i++){
        for(let j=init;j<t.length;j++){
            if(s.charAt(i)===t.charAt(j)){
                count++
                init=j+1;
                break;
            }
        }
    }
    if(count===s.length){
        return true;
    }else{
        return false;
    }
}

console.log(subSequence(s2,t));