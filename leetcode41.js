//263 Ugly Number

//An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

let n1 = 6 //Expeceted Output: true
let n2 = 1 //Expeceted Output: true
let n3 = 14 //Expeceted Output: false

const uglyValue=(num)=>{
    if(num <= 0) return false

    while (num != 1) {
        if (num%2===0) {
            num /= 2
        }
        else if (num%3===0) {
            num /= 3
        }
        else if (num%5===0) {
            num /= 5
        }
        else {
            return false
        }
    }

    return true
};

console.log(uglyValue(n3));