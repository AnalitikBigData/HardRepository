let str = ' dkdl opqqq qqqq q xz @Mial asa ';


const workWithStr = function(strNew){
    if(typeof(strNew)!== 'string'){
        return 'не строка';
    }
    else{
        let strTemp1 = '-', strTemp2='-', result;
        if(strNew[0] === ' '){
            strTemp1 = strNew[0].replace(' ', '');
        }
        if(strNew[strNew.length-1] === ' '){
            strTemp2 = strNew[strNew.length-1].replace(' ', '');
        }
        if(strTemp1 === '' && strTemp2 === ''){
            result = strTemp1 + strNew.slice(1, strNew.length - 1) + strTemp2;
            if (result.length > 30 ){
                return result.slice(0, 30) + '...';
            }
            else{
                return result;
            }
        }
        else if(strTemp1 !== '' && strTemp2 === ''){
            result = strNew.slice(0, strNew.length - 1) + strTemp2;
            if (result.length > 30 ){
                return result.slice(0, 30) + '...';
            }
            else{
                return result;
            }
        }
        else if(strTemp1 === '' && strTemp2 !== ''){
            result = strTemp1 + strNew.slice(1);
            if (result.length > 30 ){
                return result.slice(0, 30) + '...';
            }
            else{
                return result;
            }
        }
        else{
            if (strNew.length > 30 ){
                return strNew.slice(0, 30) + '...';
            }
            else{
                return strNew;
            }
        }
    }
}
console.log(workWithStr(str));