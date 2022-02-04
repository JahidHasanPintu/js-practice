
function oddFriend(friends){
    for (friend of friends){
        
        
        if(friend.length%2!=0){
            return friend;
            break;
        }
    }
}

const allFriends=['abdur jabbar','kuddus','modhu','kodu'];
const oddFrTest=oddFriend(allFriends);
console.log(oddFrTest);