//2465 Number of Distinct Averages

//Calculate the average of the two numbers ie minimum and maximum and remove it from array and find so on and return the number of distinct values.

let nums1=[4,1,4,0,3,5] //expected out : 2
let nums2=[1,100] //expected out : 1

const distinctAvg=(Array)=>{
    Array.sort();
    let avgArray=[]
    while(Array.length>0){
        let n1=Array.pop()
        let n2=Array.shift();
        let avg=(n1+n2)/2
        avgArray.push(avg)
    }
    let distinct=new Set(avgArray);
    return distinct.size
}

console.log(distinctAvg(nums2))