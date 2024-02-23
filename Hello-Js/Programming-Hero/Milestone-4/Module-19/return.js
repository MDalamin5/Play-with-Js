function findSum(...num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
      sum += num[i];
    }
    return sum;
  }
  
  const number = [1, 2, 3, 4, 5, 6, 7, 8];
  const result = findSum(number);
  console.log(result); 
  