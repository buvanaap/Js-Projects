
const day=document.getElementById('days-value');;
const hour=document.getElementById('hours-value');
const minute=document.getElementById('mins-value');
const second=document.getElementById('secs-value');
const currentDate=new Date();
const currentYear=new Date(`Jan 1,${currentDate.getFullYear() +1 } 00:00:00`).getTime();
function UpdateTime(){
    const now=new Date().getTime();
    const diff=currentYear-now;
    const days=Math.floor(diff/(1000*60*60*24));
    const hoursLeft = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((diff % (1000 * 60)) / 1000);
    day.innerHTML=days<10?"0"+days:days;
    hour.innerHTML = hoursLeft<10?"0"+hoursLeft:hoursLeft;
    minute.innerHTML = minutesLeft<10?"0"+minutesLeft:minutesLeft;
    second.innerHTML = secondsLeft<10?"0"+secondsLeft:secondsLeft;
  

}
setInterval(UpdateTime,1000);


