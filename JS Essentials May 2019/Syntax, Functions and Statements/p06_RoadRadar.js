function roadRadar(arr){
    const currentSpeed = +arr[0];
    const area = arr[1];

    function getSpeedLimit(area){
        switch(area){
            case('motorway'):
            return 130;
            case('interstate'):
            return 90;
            case('city'):
            return 50;
            case('residential'):
            return 20;
            default:
            return -1;
        }
    }

    function speedOutput(speed, speedLimit){
        if(speed>0 && speed<=speedLimit){
            return '';
        }else if (speed>speedLimit && speed <= speedLimit+20){
            return 'speeding';
        }else if (speed>speedLimit+20 && speed <= speedLimit+40){
            return 'excessive speeding';
        }else{
            return 'reckless driving';
        }
    }

    console.log(speedOutput(currentSpeed, getSpeedLimit(area)));
}

roadRadar([21, 'residential']);