//118 Pascal's Triangle


let numRows1=5 //Expected Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
let numRows2=1 //Expected Output: [[1]]

const pascalArray=(set)=>{
    let result=[]
    for(let i=0;i<set;i++){
        let j=i+1;
        let res=[]
        for(let j=0;j<=i;j++){
            if(j==0){
                res.push(1)
            }
            else if(j==i){
                res.push(1)
            }
            else{
                res.push(result[i-1][j-1]+result[i-1][j])
            }
        }
        result.push(res);
    }
    return result
}

console.log(pascalArray(numRows1));