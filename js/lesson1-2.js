for (let i = 0; i < 9; i += 2) {
    console.log(i);
}
console.log('this text be write after cycl for')

// i+=1 this like i++ or ++i but his not use in now coding, we must use i += 1
// i += 1  its like i = i + 1

const minSalary = 5000;
const maxSalary = 28000;
const employees = 7;
let totalSalary = 0;

for (let i = 1; i <= employees; i += 1){
    const salary = Math.round(
        Math.random() * (maxSalary - minSalary) + minSalary
    );
    console.log(`The salary of employer number ${i} - ${salary}`);
    totalSalary += salary;
}
console.log('totalsalary = ', totalSalary);

// ==========================================================

const min = 3;
const max = 27;
let total = 0;

for (let i = min; i <= max; i += 1){
    console.log(i);
    if (i % 2 !== 0) {
        console.log('ne chetnoe', i)
        continue
    }
    console.log('this is "chetnoe" number', i);
    total += i;
}

console.log(total);
