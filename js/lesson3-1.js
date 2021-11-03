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
    rooms: 5,
    rating: 9,
    price: 32000,
    getName() {
        console.log("function in object");
    },
    changeName(newName) {
        this.name = newName;
        console.log(home.name);
    }
};

console.log(home);
home.getName(13);
home.changeName("The big home at the Mountines");
console.log(home);





