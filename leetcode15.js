//605 Can Place Flower
let array1=[1,0,0,0,0,1],n1=1;
let array2=[1,0,1,0,0,1],n2=2;

const flowerPlacer=(flowerbed,n)=>{
    let count=0
    for(let i=0;i<flowerbed.length;i++){
        if(((flowerbed[i-1]==0&&flowerbed[i+1]==0)||i===0||(i==flowerbed.length-1&&flowerbed[i-1]==0))&&flowerbed[i]!=1){
            flowerbed[i]=1;
            count++;
        } 
    }
    console.log(flowerbed);
    return count>=n
}

console.log(flowerPlacer(array2,n2));