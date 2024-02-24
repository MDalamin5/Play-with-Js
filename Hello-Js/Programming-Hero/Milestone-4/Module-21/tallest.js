function maxInArray(dataValu){
    var max = dataValu[0];
    for(i = 1; i<dataValu.length; i++){
        if(dataValu[i] > max){
            max = dataValu[i]
        }
    }
    console.log(max);
}

const number = [1, 2, 34, 4, 5, 6, 7, 8, 9, 33, 55]
maxInArray(number);