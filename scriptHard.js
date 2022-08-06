let variable = +prompt();
console.log(variable);
let str = String(variable);

const Number = function(num){
    return !isNaN(num) && isFinite(num);
}

if (str.trim() === ''){
    console.log('не число' + str);
}
else if(str === null){
    console.log('не число ' + str);
}
else if (!Number(String(variable).trim())){
    console.log('не число ' + str);
}
else if (Number(String(variable).trim())){
    console.log('число ' + str.trim());
    variable = +str.trim();
}

console.log('variable = ' + variable + ' type - '+ typeof(variable) );