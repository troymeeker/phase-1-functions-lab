// Code your solution in this file!
function distanceFromHqInBlocks(din){
  if(din>42){
      return din-42;
  }else if(din<42){
      return 42-din;
  }
}

distanceFromHqInBlocks(43);

function distanceFromHqInFeet(din){
    return distanceFromHqInBlocks(din)*264;
    
}
distanceFromHqInFeet(25);

function distanceTravelledInFeet(start,end){
    if(start>end){
        return (start-end) * 264;
    }else if(start<end){
        return (end-start) * 264;
    }
    
}
distanceTravelledInFeet(10,5);


function calculatesFarePrice(start, destination){
  if(distanceTravelledInFeet<=400){
        return 'Free sample.';
    }else if(distanceTravelledInFeet>400 && distanceTravelledInFeet<2000){
        return (distanceTravelledInFeet)*.02;
    }else if((distanceTravelledInFeet-400)>2000){
        return 'That will be $25';
    } else if(distanceTravelledInFeet>2500){
        return 'cannot travel that far';
          } 
}
calculatesFarePrice(44,43);