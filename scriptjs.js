'use strict';

const monthReturn = function(answer){
    if(answer === 0) return ' января ';
    else if( answer === 1) return ' февраля ';
    else if (answer === 2) return ' марта ';
    else if (answer === 3) return ' апреля ';
    else if (answer === 4) return ' мая ';
    else if (answer === 5) return ' июня ';
    else if (answer === 6) return ' июля ';
    else if (answer === 7) return ' августа ';
    else if (answer === 8) return ' сентября ';
    else if (answer === 9) return ' октября ';
    else if (answer === 10) return ' ноября ';
    else if (answer === 11) return ' декабря ';
    
}

const weekDay = function(answer) {
    if (answer === 0) return 'Воскресенье,';
    else if(answer === 1) return 'Понедельник,';
    else if(answer === 2) return 'Вторник,';
    else if(answer === 3) return 'Среда,';
    else if(answer === 4) return 'Четверг,';
    else if(answer === 5) return 'Пятница,';
    else if(answer === 6) return 'Суббота,';
    
}

const hoursStr = function(answer){
    if(answer === 0 || (answer >= 5 && answer <= 20)) return ' часов ';
    else if (answer === 1 || answer === 21) return ' час ';
    else if (answer >= 2 && answer <= 4 || answer === 22 || answer === 23) return ' часа ';
}


const dateFormat = function(number){
    if(number > 0 && number < 10) return '0';
    else return '';
}

const printDateFirst = function (){
    let date = new Date();
    let dayWeek = weekDay(date.getDay());
    let day = date.getDate();
    let month = monthReturn(date.getMonth());
    let year = date.getFullYear();
    let hours = date.getHours();
    let strHours = hoursStr(hours);
    let minute = date.getMinutes();
    let sec = date.getSeconds();

    return 'Сегодня ' + dayWeek + day + month + year + ' года, '  + hours + strHours + minute + ' минут ' + sec + ' секунд';
}

const printDateSecond = function(){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let sec = date.getSeconds();

    return dateFormat(day)+day + '.' + dateFormat(month) + month + '.' + year + '-' + dateFormat(hours) +hours + ':'+ dateFormat(minute) + minute + ':' + dateFormat(sec) + sec ;
}

//document.getElementById("time").innerHTML = printDateFirst();
//let timerId = setInterval(() => {document.getElementById("time").innerHTML = printDateFirst()}, 1000);
let timerId = setInterval(() =>  consoel.log(printDateFirst()), 1000);
let timerIdi = setInterval(() => console.log(printDateSecond()), 1000);


const div = document.createElement('div');
div.innerHTML = printDateFirst() + '\n' + printDateSecond();
document.body.appendChild(div);