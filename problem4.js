
function oddFriend(friends){
    for (friend of friends){
        
        
        if(friend.length%2!=0){
            console.log(friend);
            break;
        }
    }
}

const allFriends=['abdur jabbar','kuddus','modhu','kodu'];
oddFriend(allFriends);