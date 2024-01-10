//Months=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//Days=["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"]

const options1 = { //03/14/24, 03:14:15 PM EST
    //weekday:                      //'narrow' | 'short' | 'long',
    //era:                          //'narrow' | 'short' | 'long',
    year: '2-digit',                        //'numeric' | '2-digit',
    month: '2-digit',                       //'numeric' | '2-digit' | 'narrow' | 'short' | 'long',
    day: '2-digit',                         //'numeric' | '2-digit',
    hour: '2-digit',                        //'numeric' | '2-digit',
    minute: '2-digit',                      //'numeric' | '2-digit',
    second: '2-digit',                      //'numeric' | '2-digit',
    //timeZoneName:                 //'short' | 'long',

    //// Time zone to express it in
    //timeZone: 'Asia/Shanghai',
    //// Force 12-hour or 24-hour
    hour12: true, //true | false,

    //// Rarely-used options
    //hourCycle: 'h11' | 'h12' | 'h23' | 'h24',
    //formatMatcher: 'basic' | 'best fit'
};
//                                           XXXX ms added later
const options3 = { //Thr Mar 14 2024 15:14:15.926 (Eastern Standard Time)
    //weekday:                      //'narrow' | 'short' | 'long',
    //era:                          //'narrow' | 'short' | 'long',
    //year:                         //'numeric' | '2-digit',
    month: '2-digit',                       //'numeric' | '2-digit' | 'narrow' | 'short' | 'long',
    day: '2-digit',                         //'numeric' | '2-digit',
    hour: '2-digit',                        //'numeric' | '2-digit',
    minute: '2-digit',                      //'numeric' | '2-digit',
    second: '2-digit',                      //'numeric' | '2-digit',
    timeZoneName: 'long',                //'short' | 'long',

    //// Time zone to express it in
    //timeZone: 'Asia/Shanghai',
    //// Force 12-hour or 24-hour
    hour12: false, //true | false,

    //// Rarely-used options
    //hourCycle: 'h11' | 'h12' | 'h23' | 'h24',
    //formatMatcher: 'basic' | 'best fit'
};

const dtForm1 = new Intl.DateTimeFormat('en-US', options1);
const dtForm3 = new Intl.DateTimeFormat('en-US', options3);

var count = 0;


window.onload = function() {
    setInterval(function(){
        if(document.hidden === false) {
            var date = new Date();
            //YearL = date.getFullYear(),
            //YearS = (YearL%100).toString().padStart(2,'0'),
            //Month = (date.getMonth()+1).toString().padStart(2,'0'),
            //MonthN = Months[date.getMonth()],
            //Datee = date.getDate().toString().padStart(2,'0'),
            //Day = Days[date.getDay()],
            //Hour24 = date.getHours().toString().padStart(2,'0'),
            //Hour12 = (((date.getHours()+11)%12)+1).toString().padStart(2,'0'),
            //AMPM = "AMPM".substring(2*(Hour24>=12),2*(Hour24>=12)+2),
            //Minutes = date.getMinutes().toString().padStart(2,'0'),
            //Seconds = date.getSeconds().toString().padStart(2,'0'),
            Milliseconds = date.getUTCMilliseconds().toString().padStart(3,'0'),
            //UTCYearL = date.getUTCFullYear(),
            UTCYearS = (date.getUTCFullYear()%100).toString().padStart(2,'0'),
            UTCMonth = (date.getUTCMonth()+1).toString().padStart(2,'0'),
            //UTCMonthN = Months[date.getUTCMonth()],
            UTCDatee = date.getUTCDate().toString().padStart(2,'0'),
            //UTCDay = Days[date.getUTCDay()],
            UTCHour24 = date.getUTCHours().toString().padStart(2,'0'),
            //UTCHour12 = (((date.getUTCHours()+11)%12)+1).toString().padStart(2,'0'),
            //UTCAMPM = "AMPM".substring(2*(UTCHour24>=12),2*(UTCHour24>=12)+2),
            UTCMinutes = date.getUTCMinutes().toString().padStart(2,'0'),
            //UTCSeconds = date.getUTCSeconds().toString().padStart(2,'0'),
            //UTCMilliseconds = date.getUTCMilliseconds().toString().padStart(3,'0'),
            //OffsetH = "+".substring(0,1*(date.getTimezoneOffset()>0)) + (date.getTimezoneOffset()/60).toString(),
            EpochMS = date.getTime(), //UTC only
            //EpochS = (EpochMS/1000).toFixed(0);

            //03/14/24, 03:14:15 PM EST
            //Thr Mar 14 2024 15:14:15.926 (Eastern Standard Time)
            //UTC=1514, 24/03/14
            //Epoch  1,710,443,655.926 ; 01100101111100110100110010000111
            line1 = dtForm1.format(date);
            line2t = date.toString();
            line2 = line2t.substring(0,line2t.indexOf("GMT")-1) + "." + Milliseconds + line2t.substring(line2t.indexOf("GMT")-1);
            line3 = "UTC=" + UTCHour24 + UTCMinutes + ", " + UTCYearS + "/" + UTCMonth + "/" + UTCDatee;
            line4t = EpochMS.toString();
            line4 = line4t.substring(0,1)+","+line4t.substring(1,4)+","+line4t.substring(4,7)+","+line4t.substring(7,10)+"."+line4t.substring(10,13) + " ; " + Math.floor(EpochMS/1000).toString(2).padStart(32,'0');

            document.getElementById('DT1').innerHTML = line1
            document.getElementById('DT2').innerHTML = line2
            document.getElementById('DT3').innerHTML = line3
            document.getElementById('DT4').innerHTML = line4
            count++;
            if(!(count%1000)) {
                console.log(date);
            }
        }
    }, 1); // 1ms
}