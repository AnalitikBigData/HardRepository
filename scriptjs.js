const array = ['1353389393', '3788493922', '2433567855', '478322222', '121212000', '2355611', '4822226620'];
for(let i = 0; i < 7; i++){
    if(array[i][0] === '2' || array[i][0] === '4'){
        console.log(array[i]);
    }
}

// простые числа от 1 до 100
const isPrime = function(num){
    count = 0;
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            count += 1;
        }
    }
    if(num === 1){
        return false;
    }
    else if (num === 2){
        return true;
    }
    else{
        if(count != 0){
            return false;
        }
        else{
            return true;
        }
    }
    
}

for(let i = 1; i <= 100; i++){
    if(isPrime(i) === true){
        console.log(i);
    }
}