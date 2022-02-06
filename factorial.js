function calFactorial(i){
    if(i==1){
        return 1;
    }
    return i*calFactorial(i-1);
}
console.log(calFactorial(4));

function compare(a, b) {
    if (a == b) {
      return true;
    } else {
      return false;
    }
  }
  const result = compare(15, "15");
  console.log(result);