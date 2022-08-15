'use strict';
const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let now = new Date();
alert (now);
alert(now.getDay());
for (let i = 0; i < week.length; i++){
    let day = week[i];
     
    if (now.getDay() === i + 1){
        day = week[i].bold();
        if(now.getDay() === 5 || now.getDate() === 6) {
            day = week[i].italics();
            console.log(day);
        }
        else console.log(day);
         
    } 
    else if (i === 5 || i === 6){
        day = week[i].italics();
        console.log(day);
    }
    else{
        console.log(day);
    }
    const div = document.createElement('div');
    div.innerHTML = day;
    document.body.appendChild(div); 
}
