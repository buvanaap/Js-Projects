const year=2025;
const calendar=document.getElementById("calendar");
const weekdays=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
function getAllDays(year){
    const firstday=new Date(year,0,1);
    const lastday=new Date(year,11,31);
    const days=[];
    while(firstday<=lastday){
        days.push(new Date( firstday));
        firstday.setDate( firstday.getDate()+1);
    }
    return days;
}
const dates=getAllDays(year);
let monthsHtml="";
months.forEach((month,idx) => {
    monthsHtml+=`<div class="month"> <h3>${month}</h3>
    <div class="weekdays">${weekdays.map(day=>`<div class="day">${day}</div>`).join("")}
    </div>
         <div class="days_container" id="month_${idx}"></div>
    </div>  `;

});
calendar.innerHTML=monthsHtml;

dates.forEach(date=>{
    const day=date.getDate();
    const monthidx=date.getMonth();
    const dayOfWeek=date.getDay();
    const monthEl = document.getElementById(`month_${monthidx}`);
    if(day==1){
        for(let i=0;i<dayOfWeek;i++){
            monthEl.innerHTML+=`<div class="day"></div>`;
        }
    }
    monthEl.innerHTML+=`<div class="day">${day}</div>`
});
