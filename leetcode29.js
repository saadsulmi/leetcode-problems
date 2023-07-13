//1773 count items matching a Rule

//[type,color,name] rulekey=field name ; rulevalue = fieldvalue;

let items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver" ;
let items1 = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey1 = "type", ruleValue1 = "phone"
const itemsFinder=(items,field,value)=>{
    let keys=['type','color','name'];
    let key=0;
    for(let i=0;i<keys.length;i++){
        if(field==keys[i]){
            break;
        }
        key++
    }
    let count=0;
    for(let i=0;i<items.length;i++){
        
        if(items[i][key]==value){
            count++
        }
    }
    return count;
}

console.log(itemsFinder(items1,ruleKey1,ruleValue1));