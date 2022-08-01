let lang = prompt('Введите en/ru');

if(lang == 'ru'){
    console.log('Понедельник. Вторник. Среда. Четверг. Пятница. Суббота. Воскресенье');
}
else if(lang == 'en'){
    console.log('Monday. Tuesday. Wednesday. Thursday. Friday. Saturday. Sanday');
}
else{
    console.log('ERROR');
}

lang = prompt('Введите en/ru');
switch(lang){
    case 'ru':
        console.log('Понедельник. Вторник. Среда. Четверг. Пятница. Суббота. Воскресенье');
        break;
    case 'en':
        console.log('Monday. Tuesday. Wednesday. Thursday. Friday. Saturday. Sanday');
        break;
    default:
        console.log('ERROR');
}

const arrayDay = [['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'], ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sanday']];
console.log('На русском:');
console.log(arrayDay[0]);
console.log('English:');
console.log(arrayDay[1]);


let namePerson = prompt('Введите  имя');
namePerson ==='Артем' ? console.log('директор') : (namePerson === 'Александр'?console.log('преподаватель') : console.log('студент'));