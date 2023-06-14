//2404 Most Frequent Even Element

let array1=[0,1,2,2,4,4,1];
let array2=[29,47,21,41,13,37,25,7];
let array3=[4,4,4,9,2,2,4];

const frequentEvenNumber=(array)=>{
    let mostEven=-1;
    let mostEvenCount=-Infinity
    for(let i=0;i<array.length;i++){
        if(array[i]%2!=0){
            continue
        }
        let count=1;
        let val=array[i];
        for(let j=0;j<array.length;j++){
            if(j===i){
                continue;
            }
            if(array[i]===array[j]){
                count++;
            }
        }
        if(mostEvenCount<count){
            mostEven=val
            mostEvenCount=count
        }
        else if(mostEvenCount===count){
            if(val<mostEven){
                mostEven=val
            }
        }
    }
    return mostEven;
}

console.log(frequentEvenNumber(array3));