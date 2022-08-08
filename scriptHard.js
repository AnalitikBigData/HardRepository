'use strict';
alert('Загадывание случайного числа от 1 до 100');

const Number = function(num){
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const getMessage = function(x){
    let y = 21;
    let numberOfAttempts = 10; // всего попыток
    let numberOfUserAttempts = 0; // пользователь ввёл 
    const func = function(){
        if(numberOfUserAttempts < 10){
            numberOfUserAttempts++;
            numberOfAttempts--;
            if(confirm('Игра окончена')===false){
                if(x > 100){
                    console.log('Загаданное число меньше, осталось попыток ' + numberOfAttempts);
                    x = +prompt('Загаданное число меньше, осталось попыток ' + numberOfAttempts + ' Введите число ещё раз');
                    func();
                }
                else if(x < 1){
                    console.log('Загаданное число больше, осталось попыток ' + numberOfAttempts);
                    x = +prompt('Загаданное число больше, осталось попыток ' + numberOfAttempts +' Введите число ещё раз');
                    func();
                } else if(!Number(x)){
                    console.log('Введи число!, осталось попыток ' + numberOfAttempts +  ' x = ' + x + ' '+ typeof(x));
                    x = +prompt('Введи число!, осталось попыток ' + numberOfAttempts + ' Введите число ещё раз');
                    func();
                } 
                else if(x !== y ){
                    console.log('Неверно , осталось попыток ' + numberOfAttempts +  ' x != ' + x + typeof(x));
                    x = +prompt('Неверно , осталось попыток ' + numberOfAttempts + ' Введите число ещё раз');
                    func();
                }
                else if(x === y){
                    alert('Поздравляю, Вы угадали!!! ' + x);
                    console.log('Поздравляю, Вы угадали!!! ' + x);
                }
            }
            else {
                alert('Игра окончена');
                console.log('Игра окончена');
            }
        } else {
            let str = confirm('Попытки закончились, хотите сыграть еще?');
            if (str === true){
                func();
            }
            else{
                console.log('Игра окончена');
            }
            //console.log('Попытки закончились, хотите сыграть еще?');
        }
    }
    func();
}
console.log(getMessage(+prompt('Введите число')));