let number = { a: 13, b: 37, c: 42 };
let numbers = Object.values(number);

let newArr = numbers.map(function (num) {
    return num * 2;
});
console.log(newArr)