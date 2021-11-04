const bigArray = [1, 2, 3,].concat([4, 5, 6], [7, 8, 9]);
console.log(bigArray);

//spread
const addFromOnotherArray = [...[23, 56, 33, 55],...[3, 56, 5, 66], 8, 99, ...bigArray];
console.log(addFromOnotherArray);

const MaxNumInBigArr = Math.max(...addFromOnotherArray);
console.log(MaxNumInBigArr);

// all this operations its not destroyed array only make a copy

const objArr = [{ apple: 1 }, { pear: 2 }, { lemon: 5 }];
const newObjArr = [...objArr];

console.log(objArr);
console.log(newObjArr);

console.log(newObjArr[0] === objArr[0]);
console.log(objArr === newObjArr);

newObjArr[0].apple = 8;// link in objArr
//======================================

const objFruits = {apple: 1,  pear: 2,  lemon: 5,};
const objFruitsII = { plump: 1, pear: 7, orange: 5};

const basket = Object.assign({apple: 9,}, objFruits, objFruitsII);
console.log(basket);

//Object.assign change first object and add new key in his body.
const modernBusket = {
    lichi: 0,
    ...objFruitsII,
    mango: 10,
    ...objFruits,
    strawberry: 3,
};
console.log(modernBusket);




const sstrJs = "JS it is easy";
// const aboutJs = (...sstrJs);
console.log(...sstrJs);

// =====================================================================================================

const trainingPlaylist = {
    names: 'My training play list',
    rating: 9,
    tracks: ['track_1', 'track_2', 'track_3', 'track_4'],
    trackCount: 4,
    stats: {
        views: 100,
        likes: 98,
        downloads: 1500,
    },
};



console.log(trainingPlaylist.names);
console.log(trainingPlaylist.rating);
console.log(trainingPlaylist.trackCount);
console.log(trainingPlaylist.tracks);

// destruct
const { names,
    rating,
    trackCount: totalTracks,
    tracks,
    author = 'LimBizkit',
    stats: {
        views,
        likes,
        downloads
    }
} = trainingPlaylist;

//const { views, likes, downloads, } = stats;

    

console.log(totalTracks);
console.log(names);
console.log(rating);
console.log(totalTracks);
console.log(tracks);
//console.log(stats);


console.log(
    names, // теперь это переменные и с ними можна работать в коде
    rating,
    totalTracks,
    tracks,
    //stats.likes,
    // 
    views,
    downloads
);

// const addNewTrack = 
tracks.push('My favorite songs');
console.log(trainingPlaylist);


// если скобки слева от равно (любые) это деструкторизация.

// ==============================================================
//array destruct
const time = [12, 13, 14, 15, 16];

const [firsttime, secondtime, thirdtime, , lasttime] = time;

console.log(firsttime, secondtime, thirdtime,lasttime);
// ================================================================

const artistsRating = {
    Nick: 10,
    Venya: 7,
    Alice: 5,
    Mike: 4,
    George: 6,
};

const allRatings = Object.values(artistsRating);
console.log(allRatings);

const entries = Object.entries(artistsRating);

for (const [name, rating] of entries){ //for (const entry of entries){
    // const name = entry[0];
    // const rating = entry[1];

    //its like(desruct)

    // const [name, rating] = entry;

    console.log(name, rating);
};

// ================================================================

// rest

const playlist = {
    title: 'My training play list',
    rat: 9,
    tr: ['track_1', 'track_2', 'track_3', 'track_4'],
    trackTotal: 4,
    statistic: {
        view: 100,
        like: 98,
        download: 1500,
    },
};

// const { title, rat, tr } = playlist;
// console.log(title, rat, tr);

// const trackStats = {
//     trackTotal: playlist.trackTotal,
//     statistic: playlist.statistic,
// }

// console.log(trackStats);
// ====
// its like
const { title, rat, tr, ...trackStats } = playlist;

// trackStats //restDataInNewObject;


console.log(trackStats);
console.table(trackStats);

// ======================================================================

const ShowProfileInfo = function (userProfile) {
    const {
        title,
        rat,
        tr,
        trackTotal,
        // statistic:
        // { view, like, download 
        ...statsUser
    } = userProfile;

    console.log(userProfile);
    console.table(title, rat, tr, trackTotal, statsUser);

};

const profile = {
    title: 'My training play list',
    rat: 9,
    tr: ['track_1', 'track_2', 'track_3', 'track_4'],
    trackTotal: 4,
    statistic: {
        view: 100,
        like: 98,
        download: 1500,
    },
};

ShowProfileInfo(profile);

// =========================================================================
// =========================================================================
                                // Задача //   
const cart = {
    items: [],
    getItems() {
        return this.items;
    },
    add(product) {
        for (const item of this.items){
            if (item.name === product.name) {
                console.log('already yet this product', product.name);
                item.quantity += 1;
                return;
            }
        }

        const newProduct = {
            ...product,
            quantity: 1,
        };
        this.items.push(newProduct);
    },
    remove(productName) {
        for (let i = 0; i < this.items.length; i += 1) {
            if (productName === this.items[i].name) {
                console.log("this product find ", productName);
                console.log(i);
                this.items.splice(i, 1);
            };
        }
    },
    clear() {
        this.items = [];
    },
    countTotalPrice() {
        let total = 0;

        for (const item of this.items) {
            total += item.price * item.quantity;
            
        }
        return total;
    },
    increaseQuantity() { },
    decreaseQuantity() { },
    
};

console.log(cart.getItems());

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'berry', price: 60 });
cart.add({ name: 'banana', price: 110 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'lemon', price: 60 });

console.table(cart.getItems());

console.log('Total price = ', cart.countTotalPrice(), 'credits');

cart.remove('apple');

console.table(cart.getItems());

cart.clear();

console.log(cart.getItems());



