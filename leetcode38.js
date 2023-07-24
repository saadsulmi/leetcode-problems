//2455 Average value of Even Numbers That Are Divisible by Three

let nums1 = [1,3,6,10,12,15]; //expected out : 9
let nums2 =[1,2,4,7,10]; //expected out : 9

const divByThree=(Array)=>{
    let sum=0,count=0;
    for(let i=0;i<Array.length;i++){
        if(Array[i]%3===0&&Array[i]%2===0){
            count++;
            sum+=Array[i];
        }
    }
    return count===0?0:sum/count
}

console.log(divByThree(nums1));