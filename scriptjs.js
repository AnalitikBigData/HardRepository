'use strict';
const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let now = new Date();
alert (now);
alert(now.getDay());
for (let i = 0; i < week.length; i++){
    let day = week[i];
    if (i === 5 || i === 6){
        day = week[i].italics();
        console.log(day);
    } 
    else if (now.getDay() === i + 1){
        day = week[i].bold();
        console.log(day);
    } 
    else{
        console.log(day);
    }
}