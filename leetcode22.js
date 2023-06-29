//744 Find Smallest Letter Greater Than Target

let letters1 =['c','f','j'] , target1 ='a' // output : c
let letters2 =['c','f','j'] , target2 ='c' // output : f
let letters3 =['x','y','j'] , target3 ='z' // output : x (if there is no letter greater than target return letter[0])

//given arrays will be sorted in non-decreasing order : its mentioned in problem 

const closestLargerLetter = (letter,target) => {
    let sample=letter[letter.length-1]
    if(sample.charCodeAt(0)<target.charCodeAt(0)){
        return letter[0]
       }

    let smallest=+Infinity;
    let result=''
    for(let i=0;i<letter.length;i++){
        let val=letter[i]
        let checker = val.charCodeAt(0)-target.charCodeAt(0);
       if(checker>0&&checker<smallest){
          smallest=checker;
          result=''+letter[i];
       }
    }
    
    return result;
}

console.log(closestLargerLetter(letters3,target3));
