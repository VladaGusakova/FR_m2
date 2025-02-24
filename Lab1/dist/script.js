alert("Hello, world");
//Вариант 1
/////// Задание 2
const concatNumbersToString = (num1, num2) => {
    return num1.toString() + num2.toString();
};
const result = concatNumbersToString(100, 500);
console.log(result);
///////Задание 3
let numberValue = 42;
const stringValue = "Hello";
let booleanValue = true;
const arrayValue = [1, 2, 3, 4, 5];
const objectValue = { key: "age", value: 25 };
let anyValue = "This can be any type";
const data = {
    id: 1,
    name: "Василий",
};
const jsonString = JSON.stringify(data);
console.log(jsonString);
