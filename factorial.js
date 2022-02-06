function calFactorial(i){
    if(i==1){
        return 1;
    }
    return i*calFactorial(i-1);
}
console.log(calFactorial(4));