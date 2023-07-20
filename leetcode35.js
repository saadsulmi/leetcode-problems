//2309 Greatest English Letter in Upper and Lower Case

//greatest english letter occurs in both uppercase and lower case

let s1='lEetcodE' //expected out : 'E'
let s2='arRazFif' //expected out : 'R'
let s3='AbCdEfGhIjK' //expected out : ''

const letterFinder=(str)=>{
    let size=0
    let val=''
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<str.length;j++){
            if(str.charCodeAt(j)-32==str.charCodeAt(i)||str.charCodeAt(j)+32==str.charCodeAt(i)){
                if(val<str.charCodeAt(j)+32||val<str.charCodeAt(i)){
                    if(str.charCodeAt(j)<str.charCodeAt(i)){
                        size=str.charCodeAt(j)
                        val=''
                        val=val+str.charAt(j)
                    }else{
                        size=str.charCodeAt(i)
                        val=''
                        val=val+str.charAt(i)
                    }
                }
            }
        }
}
return val
}

console.log(letterFinder(s3));