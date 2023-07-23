//2231 Largest Number After Digit Swap by Parity

//swap two values with its parity and return the largest value thus formed

let num1=1234 //expected out = 3421
let num2=65875 //expected out = 87655

const twoSwap=(value)=>{
    let arr=value.toString().split('');
    let largeVal,largeIdx,count=0;
    for(let i=0;i<arr.length;i++){
        if(count==2){
            break;
        }
        if(parseInt(arr[i])%2==0){
            for(let j=i+1;j<arr.length;j++){
                if(parseInt(arr[j])%2==1){
                    continue
                }else{
                    if(parseInt(arr[i])<parseInt(arr[j])){
                        let temp =arr[i];
                        arr[i]=arr[j];
                        arr[j]=temp;
                        count++
                    }
                }
            }
        }else{
            for(let j=i+1;j<arr.length;j++){
                if(parseInt(arr[j])%2==0){
                    continue
                }else{
                    if(parseInt(arr[i])<parseInt(arr[j])){
                        let temp =arr[i];
                        arr[i]=arr[j];
                        arr[j]=temp;
                        count++
                    }
                }
            }
        }
    }
    value=parseInt(arr.join(''))
    return value
}


console.log(twoSwap(num2))