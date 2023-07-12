// 1528 Shuffle String

let s1='codeleet' , indices1 = [4,5,6,7,0,2,1,3]; //expected out : 'leetcode'
let s2='abc' , indices2 = [0,1,2]; //expected out : 'abc'

const strShuffler=(str,idxArray)=>{
    let placementArray=[];
    str=str.split('')
    for(let i=0;i<idxArray.length;i++){
        let placer=idxArray[i];
        placementArray[placer]=str[i]
    }
    return placementArray.join('')
}

console.log(strShuffler(s1,indices1));