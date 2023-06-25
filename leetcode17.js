//830 Position Of Large Groups

let s = 'abcdddeeeeaabbbcd'

const largeGroupChecker=(str)=>{
    let allPos=[]
    for(let i=0;i<str.length;i++){
        let pos=[];
        pos[0]=i
        for(let j=i+1;j<str.length;j++){
            
            if(str.charAt(i)===str.charAt(j)){
                pos[1]=j;
                i++;
            }else{
                if((pos[1]-pos[0])>=2){
                    allPos.push(pos);
                }
                break;  
            }
        }
    }
    return allPos;
}

console.log(largeGroupChecker(s))