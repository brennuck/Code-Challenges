// Call two arms equally strong if the heaviest weights they each are able to lift are equal.

// Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.

// Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    let yourStrength = 0;
    let whichYourStrength = [];
    let friendsStrength = 0;
    let whichFriendsStrength = [];
    
    yourStrength += yourLeft;
    yourStrength += yourRight;
    
    whichYourStrength.push(yourLeft, yourRight);
    maxYourStrength = Math.max(...whichYourStrength);
    
    friendsStrength += friendsLeft;
    friendsStrength += friendsRight;
    
    whichFriendsStrength.push(friendsLeft, friendsRight);
    maxFriendsStrength = Math.max(...whichFriendsStrength);
    
    if (maxYourStrength == maxFriendsStrength && yourStrength == friendsStrength) {
        return true
    } 
    return false
}
