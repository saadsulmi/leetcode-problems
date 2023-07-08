//1380 Lucky Numbers in a Matrix

//lucky number is minimum element in its row and maximum in its column.

let matrix1 = [[3,7,8],[9,11,13],[15,16,17]]; //expected out : 15
let matrix2 = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]; //expected out : 12
let matrix3 = [[7,8],[1,2]]; //expected out : 7

const luckyChecker = (matrix) =>{
    let lucky = []
    for(let i=0;i<matrix.length;i++){
        
        let checker = +Infinity
        let checkerIdx
        for(let j=0;j<matrix[i].length;j++){
            if(checker>matrix[i][j]){
                checkerIdx=j;
                checker=matrix[i][j];
            }
        }
        let rowIdx=0;
        let flag=0;
        while(rowIdx<matrix.length){
            if(checker<matrix[rowIdx][checkerIdx]){
                flag=1;
                break;
            }
            rowIdx++;
        }
        if(flag===0){
            lucky.push(checker)
        }
    }
    return lucky
}

console.log(luckyChecker(matrix3));

