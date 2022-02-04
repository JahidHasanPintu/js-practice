function picnicBudget(total){
    let totalTaka=0;
    if(total<=100){

        totalTaka=total*5000;
        return totalTaka;
    }
    else if(100<total&&total<=200){
        let firstHundred= 100*5000;
        let remaining= total-100; 
        let remainingTotal= remaining*4000;
        totalTaka = firstHundred+remainingTotal;
        return totalTaka;
    }
    else if(total>200){
        let firstHundred= 100*5000;
        let secondHundred=100*4000;
        const remaining= total-200;
        
        let remainingTotal= remaining*3000; 
        totalTaka = firstHundred+secondHundred+remainingTotal;
        return totalTaka;
    }
}

picBug= picnicBudget(250);
console.log(picBug);