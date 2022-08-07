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
            if(confirm('Играем')===true){
                if(x > 100){
                    //x = +prompt('Введите число ещё раз');
                    console.log('Загаданное число меньше, осталось попыток ' + numberOfAttempts);
                    x = +prompt('Введите число ещё раз');
                    func();
                }
                else if(x < 1){
                    console.log('Загаданное число больше, осталось попыток ' + numberOfAttempts);
                    x = +prompt('Введите число ещё раз');
                    func();
                } else if(!Number(x)){
                    console.log('Введи число!, осталось попыток ' + numberOfAttempts +  ' x = ' + x + ' '+ typeof(x));
                    x = +prompt('Введите число ещё раз');
                    func();
                } 
                else if(x !== y ){
                    console.log('Неверно , осталось попыток ' + numberOfAttempts +  ' x != ' + x + typeof(x));
                    x = +prompt('Введите число ещё раз');
                    func();
                }
                else if(x === y){
                    console.log('Поздравляю, Вы угадали!!! ' + x);
                }
            }
            else {
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