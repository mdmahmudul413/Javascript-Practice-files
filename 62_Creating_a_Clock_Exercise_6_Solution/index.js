function updateClock(){
    let currentTime = new Date();

    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    let currentSecond = currentTime.getSeconds();

    currentMinute = (currentMinute < 10 ? '0' : '') + currentMinute;
    currentSecond = (currentSecond < 10 ? '0' : '') + currentSecond;

    let timeOfDay = (currentHour < 12) ? "AM" : "PM";
    
    currentHour = (currentHour > 12) ? (currentHour - 12) : currentHour;

    let currentTimeStr = currentHour + ' : ' + currentMinute + ' : ' + currentSecond + ' ' + timeOfDay;

    document.getElementById('clock').innerHTML = currentTimeStr;
}

// we can run the updateClock() function like this or we can also add onload="" attribute on the <body> tag of the html file
// setInterval(() => {
//     updateClock()
// }, 1000);
