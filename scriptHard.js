let variable = '  123  ';

const Number = function(num){
    return !isNaN(num) && isFinite(num);
}


console.log("== " + Number(String(variable).trim()));