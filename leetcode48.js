// 506 Relative Ranks

// Input: 
let score1 = [5,4,3,2,1]
// Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
// Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th]

// Input: 
let score2 = [10,3,8,9,4]
// Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
// Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th]

const realtiveRank=(arr)=>{

    const visited = new Array(arr.length)

    let rank = arr.length
    for(let i=0;i<arr.length;i++){
        let smallest = +Infinity;
        let indx;
        for(let j=0;j<arr.length;j++){
            if(visited[j]!=1&&smallest>arr[j]){
                smallest=arr[j];
                indx=j
            }
        }
        visited[indx]=1;
        arr[indx]=rank--
    }

    for(let i=0;i<arr.length;i++){
        if(arr[i]==1){
            arr[i]='Gold Medal'
        }        
        else if(arr[i]==2){
            arr[i]='Silver Medal'
        }        
        else if(arr[i]==3){
            arr[i]='Bronze Medal'
        }
    }

    return arr
}

console.log(realtiveRank(score1));