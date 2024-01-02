setInterval(showtime(),1000);
function showtime(){
let time=new Date();
let hour=time.getHour();
let min=time.getMinutes();
let sec=time.getSeconds();
am_pm="AM";

if(hour>12){
    hour-=12;
    am_pm="PM";
}
if(hour==0){
    hour=12;
    am_pm="AM";
}

hour=hour<10?"0"+hour:hour;
min=min<10?"0"+min:min;
sec=sec<10?"0"+sec:sec;

let c_time=hour+":"+min+":"+sec+am_pm;
document.getElementById("clock").innerHTML=c_time;
}
showtime();