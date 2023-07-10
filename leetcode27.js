//1790 Check if One String Swap Can Make Strings Equal

//Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.

let sa1 = "bank", sa2 = "kanb"; //expected out : true
let sb1 = "attack", sb2 = "defend" //expected out : false
let sc1 = "kelb", sc2 = "kelb" //expected out : true
let sd1 = "tworn", sd2 = "trown" //expected out : true

const checkerFunction = (s1,s2) =>{
    if(s1==s2){
       return true;
    }
    let strArray=s1.split('')
    for(let i=0;i<strArray.length;i++){
        for(let j=0;j<strArray.length;j++){
            swap(i,j,strArray);
            let check = strArray.join('')
            console.log(check);
            if(check===s2){
               return true
            }
            swap(i,j,strArray);
        }
    }
    return false
}
const swap=(i,j,array)=>{
    let temp=array[i];
    array[i]=array[j];
    array[j]=temp;
}

console.log(checkerFunction(sa1,sa2))