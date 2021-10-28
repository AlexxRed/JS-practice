//for    ---  if you  need acces for index or you need change value of elments array

const family = ['jack', 'kevin', 'john', 'bill', 'kristy', 'emma'];
const lastIndex = family.length - 1;
const secondName = ' Watson'
console.table(family)

for (let i = 0; i <= family.length - 1; i += 1) {// (index to start cycle ; how many elemens to be cycle;  условие нужно прогнать массив от 0 до последнего индекса при каждом цыкле увеличиваем значение на 1)
    console.table(' - this line repeat how many cycles in array');
    console.log(i + ' - this show all index of cycle');
    console.log(family[i] + ' - this line show index value');
    family[i] += secondName;// add in all array index new data(change element of array)
}
console.log(family);

//==================================================================

// for ... of  ------ более декларативный код - меньше нужно задавать данных если нужно перебирать весь массив
// в задачах где не нужен индекс или не нужно изменять елемент массива - так как локальная переменная не влияет на массив


for (const person of family) { // объявляем локальную переменную( внашем случаи это один член семьи)  и где будем перебирать в каком масиве данных
    console.log(person + " - this show all elements of array family") 

}

// ===============================================+++++++++============

const allBuying = [23, 67, 678, 44, 97, 440];
let totalBuying = 0;

for (let i = 0; i < allBuying.length; i += 1) {
    // totalBuying += allBuying[i];
    totalBuying = totalBuying + allBuying[i];
}

// make this for...of

for (const buy of allBuying) {
    totalBuying += buy;
}
    
console.log(totalBuying);

// если нужно кадоой покупке добавить налог 20% и округлить фор оф не подходит так как он не имеет доступа к елементу массива что бы егоизменять

for (let i = 0; i < allBuying.length; i += 1){
    allBuying[i] = Math.round(allBuying[i] * 1.2);
}
console.log(allBuying);

// =======================================================================


const newArray = [3, 6, 2, 13, 45, 55, 44, 7, 14, 56, 22, 13];

let totalNumb = 0;

for (let i = 0; i < newArray.length; i += 1){
    const arrayItem = newArray[i];

    if ( arrayItem % 2 === 0) {//( newArray[i] % 2 === 0)
        console.log(arrayItem); //console.log(newArray[i]);
        totalNumb += arrayItem;//totalNumb += newArray[i]
        
    }
};
// use for of in this task
for (const arrItem of newArray) {
    if ( arrItem % 2 === 0) {
        console.log(arrItem); 
        totalNumb += arrItem;
        
    }
}

// логика от обратного если не четное пропускаем, четное - выводим
for (const arItem of newArray) {
    if (arItem % 2 !== 0) {
        console.log(arItem, 'this itteration scipping');
        continue;
    }
    console.log(`${arItem} this itteration not scipping`)
    totalNumb += arItem;
}
console.log(totalNumb);

//================================================================================

const userslogin = ['rewqy', 'gotre', 'kols', 'user', 'admin'];
const adminLog = 'admin';
let message = `user with name${adminLog} not find`;

for (let i = 0; i < userslogin.length; i += 1) {

    console.log('login', userslogin[i]);

    console.log(`${userslogin[i]} === ${adminLog}:`, userslogin[i] === adminLog)
    
    if (userslogin[i] === adminLog) {
        // console.log(message)
        message = `this user${adminLog} to find in system, welkom!`
        break;
    }
    // message = `user with name${adminLog} not find`
}

//use for ... of

for (const log of userslogin) {
    if (log === adminLog) {
        // console.log(message)
        message = `this user${adminLog} to find in system, welkom!`
        break;
    }
}
console.log(message);

// ternarny operator - easy variants!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const mess = userslogin.includes(adminLog) ? "welkom" : "go a way";
console.log(mess);
//=====================================================================================

const numbLine = [23, 5, 67, 44, 8, 33, 2, 9];
let smallestNumber = numbLine[0];
let biggestNumber = numbLine[0];

for (const numbItem of numbLine) {
    if (numbItem < smallestNumber) {
        smallestNumber = numbItem;
    }
}

for (const numbItemII of numbLine)
    if (numbItemII > biggestNumber) {
        biggestNumber = numbItemII;
    }
console.log('smallest number = ', smallestNumber);
console.log('biggest number = ', biggestNumber);

// =================================================================================

const brothers = ['lor', 'leo', 'geru', 'mike', 'axel'];
let broString = '';

for (const bro of brothers) {
    broString += bro + ',';
}

broString = broString.slice(0, broString.length - 1);
console.log(broString);

//easy variation 
const broline = brothers.join(' - ');
console.log(broline);

// =============================================================================

const jsLine = "JavaScript";
const jsLetters = jsLine.split('');
let invertLetter = "";

console.log(jsLetters);

for (const letter of jsLetters) {
    if (letter === letter.toLowerCase()) {
        console.log("lowercase", letter);
        invertLetter += letter.toUpperCase();
    } else {
        console.log("apper case", letter);
        invertLetter += letter.toLowerCase();
    }

}
console.log(invertLetter);