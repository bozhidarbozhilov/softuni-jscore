function calcWalkingTime(steps, footprint, speed){
    let totalLengthInKms = (steps*footprint)/1000;
    let walkingTimeInHours = totalLengthInKms/speed;

    let hours = Math.floor(walkingTimeInHours%60);
    let minutes = Math.floor(walkingTimeInHours * 60 ) % 60;
    let seconds = Math.round((walkingTimeInHours * 60 * 60) % 60);
    let minutesForBreak = totalLengthInKms * 1000/500;
    let totalMinutes = minutes + Math.floor(minutesForBreak);

    console.log(`${hours<10?'0'+hours:hours}:${totalMinutes<10?'0'+totalMinutes:totalMinutes}:${seconds<10?'0'+seconds:seconds}`);
}

calcWalkingTime(2564, 0.70, 5.5);