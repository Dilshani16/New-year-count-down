let cDay;
let cHours;
let cMin;
let cSec;
let cMonth;
let daysleft;
let cyear;
let daysperyear;
let daysinFeb;


let interval = window.setInterval(function(){
     let cDate = new Date();
     cHours = cDate.getHours();
     cMin = cDate.getMinutes();
     cSec = cDate.getSeconds();
     cDay = cDate.getDate();
     cMonth = cDate.getMonth() + 1;
     cyear = cDate.getFullYear();
     
    if(cyear % 4 == 0)
    {
        daysperyear = 366;
        daysinFeb = 29;
    }
    else{
        daysperyear = 365;
        daysinFeb = 28;
    }

    switch(cMonth){
        case 1:
            daysleft = daysperyear;
            break;

        case 2:
            daysleft = daysperyear - 31;
            break;

        case 3:
            daysleft = daysperyear - (31 + daysinFeb);
            break;

        case 4:
            daysleft = daysperyear - (62 + daysinFeb);
            break;

        case 5:
            daysleft = daysperyear - (92 + daysinFeb);
            break;

        case 6:
            daysleft = daysperyear - (123 + daysinFeb);
            break;

        case 7:
            daysleft = daysperyear - (153 + daysinFeb);
            break;

        case 8:
            daysleft = daysperyear - (184 + daysinFeb);
            break;

        case 9:
            daysleft = daysperyear - (215+ daysinFeb);
            break;

        case 10:
            daysleft = daysperyear - (245 + daysinFeb);
            break;

        case 11:
            daysleft = daysperyear - ( 276+ daysinFeb);
            break;

        case 12:
            daysleft = daysperyear - ( 306+ daysinFeb);
            break;
    }


     document.getElementById('seconds').innerHTML = 60 - cSec;
     document.getElementById('minutes').innerHTML = 60 - cMin -1;
     document.getElementById('hours').innerHTML = 24 - cHours -1;
     document.getElementById('days').innerHTML = daysleft - cDay ;
},1000);