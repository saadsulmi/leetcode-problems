//859 Buddy Strings

let s1='ab';
let s2='aa';
let goal1='ba';
let goal2='ab';
let goal3='aa';
let c1='sad';
let c2='sda'
const swap=(i,j,s1)=>{
    let array=s1.split('');
    let temp=array[i];
    array[i]=array[j];
    array[j]=temp;
    s1=array.join('')
    return s1
}

const buddyCheck=(s1,s2)=>{
    if(s1.length!=s2.length){
        return false
    }
    for(let i=0;i<s1.length;i++){
        for(let j=0;j<s1.length;j++){
           if(i===j){
            continue
           }
           s1=swap(i,j,s1);
           if(s1===s2){
               return true
           }
           s1=swap(i,j,s1);
        }
    }
    return false
}

console.log(buddyCheck(c1,c2));