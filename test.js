let freindsNames = ["fazlay", 'pintus', 'sayem', 'fahim', 'parvez'];
function oddFreind(freindsNames) {
    // input handle for object
    if (typeof freindsNames != "object") {
        return "please give a string array";
    }
    for (let i = 0; i < freindsNames.length; i++) {
        if (freindsNames[i].length % 2 != 0) {
        let myFriend = freindsNames[i];
        return myFriend;
        }
    }
}
let freind = oddFreind(freindsNames);
console.log(freind);
