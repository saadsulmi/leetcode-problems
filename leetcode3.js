//2582 Pass the Pillow

class Person{
    constructor(data){
        this.person=data;
        this.prev=null;
        this.next=null;
    }
}

class pillowTransfer{
    constructor(){
        this.first=null;
        this.last=null;
    }

    personFinder(number,time){
        this.lineCreator(number);
        this.pillow(time)
    }

    lineCreator(number){
        for(let i=1;i<=number;i++){
            let node=new Person(i);
            if(!this.first){
                this.first=node;
                this.last=node;
            }else{
                let current =this.last;
                node.prev=current;
                current.next=node;
                this.last=node;
            }
        }
    }
    pillow(time){
        let flag=1;
        let i=1, n=1;
        let current=this.first;
       while(i<=time){
        if(flag===1){
            current=current.next;
            n++;
            if(current.next===null){
                flag=0;
            }
        }
        else if(flag===0){
            current=current.prev;
            n--;
            if(current.prev===null){
                flag=1;
            }
        }
        i++;
       }
       console.log(n);
    }
}

const lp=new pillowTransfer()
lp.personFinder(8,10)