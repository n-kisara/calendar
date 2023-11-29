'use strict';

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();

const weeks = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
const dayNum = today.getDay();
const day = weeks[dayNum];

const firstDay = new Date(year,month -1,1);
const lastDate = new Date(year,month,0);

const firstDayCount = firstDay.getDay();
const lastDateCount = lastDate.getDate();

let calendarHtml = '';
calendarHtml += '<h1>' + year + '/' + month +'</h1>';
calendarHtml += '<table><tr>';
for(let i = 0;i < weeks.length;i++) {
    calendarHtml += '<td>' + weeks[i] + '</td>';
}
calendarHtml += '</tr>';

let dayCount = 1;
for(let w = 0;w < 5;w++) {
    calendarHtml += '<tr>';
    for(let d = 0;d < 7;d++) {
        if(w == 0 && d < firstDayCount) {
            calendarHtml += '<td></td>';
        } else if (dayCount > lastDateCount) {
            calendarHtml += '<td></td>';
        } else {
            calendarHtml += '<td>' + dayCount + '</td>';
            dayCount++;
        }
        
    }
    calendarHtml += '</tr>'
}
calendarHtml += '</table>'

const calendar = document.getElementById('js-calendar');
calendar.innerHTML = calendarHtml;