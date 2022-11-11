function updateClock(){
    setTimeout(updateClock,1000);
    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    const hourDeg1 = ((hour * 360)/12);
    const hourDeg = hourDeg1.toString()
    const minutesDeg1 = ((minutes * 360)/60);
    const minutesDeg = minutesDeg1.toString()
    const secondsDeg1 = ((seconds * 360)/60);
    const secondsDeg = secondsDeg1.toString();
    
    let words1 = "rotate(";
    let words2 = "deg)";
    let hour_string = words1.concat(hourDeg,words2);

    let minutes_string = words1.concat(minutesDeg,words2);

    let seconds_string = words1.concat(secondsDeg,words2);

    document.querySelector('.hour').style.transform = hour_string;
    document.querySelector('.minutes').style.transform = minutes_string;
    document.querySelector('.seconds').style.transform = seconds_string;
   
}
updateClock();