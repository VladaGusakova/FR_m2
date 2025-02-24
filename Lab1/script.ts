alert("Hello, world");

//Вариант 1

/////// Задание 2
const concatNumbersToString = (num1: number, num2: number): string => {
    return num1.toString() + num2.toString();
};

const result = concatNumbersToString(100, 500);
console.log(result);

///////Задание 3
let numberValue: number = 42;
const stringValue: string = "Hello";
let booleanValue: boolean = true;
const arrayValue: number[] = [1, 2, 3, 4, 5];
const objectValue: { key: string; value: number } = { key: "age", value: 25 };
let anyValue: any = "This can be any type";

///////Задание 4
interface Entity {
    id: number;
}

interface ToJsonStringify extends Entity {
    name: string;
    surname?: string;
}

const data: ToJsonStringify = {
    id: 1,
    name: "Василий",
};

const jsonString = JSON.stringify(data);
console.log(jsonString);