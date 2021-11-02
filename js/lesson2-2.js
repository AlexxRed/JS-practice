const add = function () {
    console.log("This text write in console, when function asks");
}
add();


const fN = function (x, y,...arg) {
    
console.log(arg);

}

console.log(fN(5, 5, 8, 11, 32));
console.log(fN(1, 8, 4, 41, 2));
console.log(fN(2, 67, 55, 7));

//...arg  - make array from arguments, but first two use in function other transform to array