function loopMaker(i){
    if(i>234)
    return;
    console.log(i);
    loopMaker(i+1);
}
loopMaker(1);