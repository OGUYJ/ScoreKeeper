

/***** FOR OVER ARRAY *****/
const myFriends = ["Julien", "Sylvain", "Lucile", "Arnold", "Jimmy"];

for (let i = 0; i < myFriends.length; i++){
    console.log(myFriends[2]);
}

/*  NESTED LOOPS */
const myFriends = [
    ["Julien", "Sylvain"],
    ["Papa", "Maman"],
    ["Tonton", "Tati"],
]

for (let i = 0; i<= myFriends.length; i++){
    console.log(`Row 1 is`)
    const row = myFriends[i];
    for (let j = 0; j <= myFriends.length; j++){
        console.log(row[j])
    }
}