'use strict';
const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let now = new Date();
alert (now);
alert(now.getDay());
for (let i = 0; i < week.length; i++){
    let day = week[i];

    if (now.getDay() === i + 1){
        day = week[i].bold();
        if(now.getDay() === 6) {
            day = week[i].italics().bold();
            console.log(day);
        }
    } 
    else if (i === 5){
        day = week[i].italics();
    }
    else if(i===6){
        day = week[i].italics();
        if(now.getDay() === 0){
            day = week[i].italics().bold();
        }
    }
    const div = document.createElement('div');
    div.innerHTML = day;
    document.body.appendChild(div); 
}