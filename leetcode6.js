//242 Valid Anagram
let s1='anagram',s2='nagaram';
let t1='rat',t2='car';


//I used map to verify that the number of repeatation are same

const validity=(str1,str2)=>{
    if(str1.length!=str2.length){
        return false;
    }
    let checker1 = new Map();
    for(let i=0;i<str1.length;i++){
        if(!checker1.has(str1.charAt(i))){
            checker1.set(str1.charAt(i),1)
        }else{
            checker1.set(str1.charAt(i),checker1.get(str1.charAt(i))+1)
        }
    }
    let checker2 = new Map();
    for(let i=0;i<str2.length;i++){
        if(!checker2.has(str2.charAt(i))){
            checker2.set(str2.charAt(i),1)
        }else{
            checker2.set(str2.charAt(i),checker2.get(str2.charAt(i))+1)
        }
    }
    if(checker1.size===checker2.size){
        for(let [key,value] of checker1){
            let testval = checker2.get(key)
            if(testval!=value){
                return false
            }
        }
        return true
    }else{
        return false
    }
}

console.log(validity(s1,s2))
console.log(validity(t1,t2))