let dateTime=new Date()
let ampm=document.getElementById('ampm');
const dayofWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const month=["January","Feburary","March","April","May","June","July","August","September","October","Novemeber","December"]
function displayTime(){
     let dateTime=new Date();
     let day=dateTime.getDay();
     let tdymonth=dateTime.getMonth();
     let hr=dateTime.getHours();
     let min=padZero(dateTime.getMinutes());
     let sec=padZero(dateTime.getSeconds());
     if(hr>12){
        hr=hr-12
        ampm.innerHTML='PM'
     }
     document.getElementById('month').innerHTML=month[tdymonth];
     document.getElementById('day').innerHTML=dayofWeek[day];
     document.getElementById('hours').innerHTML=hr
     document.getElementById('mins').innerHTML=min
     document.getElementById('secs').innerHTML=sec
}

function padZero(num){
    return num<10 
   ? "0"+num:num;
}

setInterval(displayTime,500)