//1184 Distance Between Bus Stops

const busDistance=(start=0,destination,stops)=>{
    if(!stops){
        return undefined;
    }
    else if(start===destination){
        return 0;
    }
    let clockWise=0, antiClockWise=0;
    let distance=[];
    //to make distance array
    for(let i=start;i<stops;i++){
        distance[i]=i+1;
    }

    //get distance in clock wise direction
    for(i=start;i<destination;i++){
        clockWise+=distance[i];
    }
    
    //to get distance in anti clock wise direction
    for(let i=stops-1;i>=destination;i--){
        antiClockWise+=distance[i];
        if(i==destination&&start!=0){
            destination=0;
            i=start;
        }
    }
    // if(clockWise<antiClockWise){
    //     return clockWise;
    // }else{
    //     return antiClockWise;
    // }
    
    if(clockWise<antiClockWise){
        return clockWise;
    }else{
        return antiClockWise;
    }

}

console.log(busDistance(start=0,destination=1,stops=4));