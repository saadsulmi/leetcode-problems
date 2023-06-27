//1768 Merge Strings Alternatively

let word1='abc';
let word2='pqrst';
//expected output : apbqcrst

const mergeAlter=(w1,w2)=>{
    w1=w1.split('');
    w2=w2.split('');
    let i=0,j=0,k=0;
    let newStr=[]
    while(i<w1.length||j<w2.length){
        if(i<w1.length&&j<w2.length){
            newStr[k++]=w1[i++];
            newStr[k++]=w2[j++];
        }
        else if(i<w1.length){
            newStr[k++]=w1[i++];
        }
        else{
            newStr[k++]=w2[j++];
        }
    }
    return newStr.join('')
}

console.log(mergeAlter(word1,word2));