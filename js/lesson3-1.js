const artistAlbom = {
    name: "The Generation",
    genre: "R'n'b",
    rating: 9,
    tracks: ["Black and whites", "Your wave", "Cool time", "The subway"],
};
console.log(artistAlbom);

console.log(artistAlbom.tracks); //["Black and whites", "Your wave", "Cool time", "The subway"],
console.log(artistAlbom.genre); // "R'n'b"

// keys of oject its strings - '' or ""

const propertyName = 'rating';

// ask like string

// console.log(artistAlbom.propertyName);// not work


console.log(artistAlbom['rating']);
// its like
console.log(artistAlbom[propertyName]);

// если значение ключа лежит в переменной то подругому как через скобки ты не достучишся до него 

const userName = "David";
const userEmail = "david2017@gmail.com";

// const userSignup = {
//     userName: userName,
//     userEmail: userEmail,
// };

// its like
const userSignup = {
    userName,
    userEmail,
};

console.log(userSignup);

// =======================================================

//input name = "mateial" value = "steel"
const inputType = "material";
const inputValue = "steel";

const itemMaterrial = {
    [inputType]: inputValue,
    [inputValue]: inputType ,
};
console.log(itemMaterrial);


itemMaterrial.title = "item";
console.log(itemMaterrial);

// =========================================================
const a = { x: 1, y: 2, };
const b = a;

b.y = 3;
b.z = 5;
console.log(a);

// ===========================================================

const home = {
    name: "The Generation",
    ownerCount: 2,
    rating: 9,
    price: 32000,
    owners: ["Carla", "John"],
    getName() {
        console.log("function in object");
    },
    changeName(newName) {
        this.name = newName;
        console.log(home.name);
    },
    addOwner(owner) {
        this.owners.push(owner);
        this.ownerCount = this.owners.length;
    },
    changeRating(newrating) {
        this.rating = newrating
    },
};

console.log(home);
home.getName(13);
home.changeName("The big home at the Mountines");
console.log(home);

home.addOwner('Bill')
console.log(home);

home.changeRating(10);
console.log(home);
//  ==============================================================
//Object.keys
const keys = Object.keys(home);
console.log(keys);
for (const key of keys) {
    console.log(key);
    console.log(home[key]);

}
//  ==============================================================
//Object.values

const values = Object.values(home);
console.log(values);

for (const value of values) {
    console.log(value);
};

// ====================================================================================================

const friends = [
    { name: "Bill", status:"online",},
    { name: "Fill", status:"offline",},
    { name: "Anna", status:"online",},
    { name: "Mike", status:"online",},
];
console.table(friends);

for (const friend of friends) {
    console.log(friend);
    console.log(friend.name);

    friend.age = "notInput";
    console.log(friend);
};

//1 =================================================================

const findFriendByName = function (allFriends, name) {
    
    for (const friend of allFriends) {
        // console.log(friend);
        // console.log(friend.name);

        if (friend.name === name) {
            return "This Name is find!!!!"
        };      
    };

    return "I do not know this name!"
};
console.log(findFriendByName(friends, "Mike"));

console.log(findFriendByName(friends, "Boris"));

//2 =================================================================
const getAllName = function (allFriends) {
    
    const friendsNames = [];

    for (const friend of allFriends) {
        console.log(friend.name);
        friendsNames.push(friend.name);
    };
    return friendsNames
}

console.log(getAllName(friends));

//3 =================================================================
const getOnlineFriend = function (allFriends) {

    const whoOnline = [];

    for (const friend of allFriends) {
        if (friend.status === "online") {
            whoOnline.push(friend.name);
         };
    }

    return whoOnline;
}
 
console.log(getOnlineFriend(friends));
  
//4 ===================================================================

const getOfflineFriend = function (allFriends) {

    const whoOffline = [];

    for (const friend of allFriends) {
        if (friend.status !== "online") {
            whoOffline.push(friend.name);
        };
    }

    return whoOffline;
}

console.log(getOfflineFriend(friends));

//5 ====================================================================
const getStatusFriend = function (allFriends) {

    const friendByStatus = {
    whoOffline: [],
    whoOnline: [],
    }
    
    for (const friend of allFriends) {
        if (friend.status !== "online") {
            friendByStatus.whoOffline.push(friend.name);
            continue;
        }
        // } else {
        friendByStatus.whoOnline.push(friend.name);
// this intersting
        //const key = friend.status !== "online" ? 'whoOffline' : 'whoOnline';
       // friendByStatus[key].push(friend);
        
    }

    return friendByStatus;
}

console.log(getStatusFriend(friends));

// ===============================================================================================
// ===============================================================================================
const cart = {
    items: [],
    getItems() { },
    add() { },
    remove() { },
    clear() { },
    countTotalPrice() { },
    increaseQuantity() { },
    decreaseQuantity() {},
    
}

