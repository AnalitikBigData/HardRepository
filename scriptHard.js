// 1 способ
let num = 266219;
let composition = 1;
while(num > 0){
    composition *= num % 10;
    num = Math.trunc(num / 10);
}
console.log(((composition)**3)%100);
// 2 способ
num = 266219;
let compositionNew = 0;
let ones = num % 10;
let tens = Math.trunc((num % 100)/10);
let hundreds = Math.trunc((num % 1000)/100);
let thousands = Math.trunc((num % 10000)/1000);
let tensOfThousands = Math.trunc((num % 100000)/10000);
let hundredsOfThousands = Math.trunc((num % 1000000)/100000);
compositionNew = ones * tens * hundreds * thousands * tensOfThousands * hundredsOfThousands;
console.log((compositionNew**3)%100);