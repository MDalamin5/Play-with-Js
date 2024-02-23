function checkLeapYear(year){
    if(year % 2 === 0)
        return true;
    return false;
}

console.log(checkLeapYear(1953))