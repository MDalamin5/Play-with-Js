function oddNumberSum(num){
    var sum = 0;
    for(var i = 0; i< num.length; i++)
    {
        if(num[i] % 2 == 1)
            // console.log(num[i])
            sum += num[i];

        else
            continue;
    }
    return sum;

}

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11]
console.log(oddNumberSum(number));