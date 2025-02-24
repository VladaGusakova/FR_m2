//Вариант 1
/////// Задание 1
function findMaxNumber(numbers) {
    return Math.max(...numbers);
}
;
const numbers = [1, 2, 3, 1];
console.log(findMaxNumber(numbers));
function hasNegativeNumber(matrix) {
    for (let row of matrix) {
        for (let num of row) {
            if (num < 0) {
                return true;
            }
        }
    }
    return false;
}
;
const matrix = [
    [1, 2, 3],
    [4, -5, 6],
    [7, 8, 9]
];
console.log(hasNegativeNumber(matrix));
function sumTuple(tuple) {
    let sum = 0;
    for (let num of tuple) {
        sum += num;
    }
    return sum;
}
;
const tuple = [1, 2, 3];
console.log(sumTuple(tuple));
/////// Задание 3
var BallType;
(function (BallType) {
    BallType["Football"] = "Football";
    BallType["Basketball"] = "Basketball";
    BallType["Volleyball"] = "Volleyball";
})(BallType || (BallType = {}));
const Ball = BallType.Basketball;
console.log(Ball);
/////// Задание 4
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
function printPetInfo(pet) {
    console.log(`Type of pet is: ${pet.constructor.name} Name: ${pet.name}, Age: ${pet.age}, Speak: ${pet.speak()}`);
}
;
const myCat = new Cat();
printPetInfo(myCat);
const game = {
    name: "Tabletop Simulator",
    genre: "Simulator",
    developers: "Berserk Games",
    price: 9.99,
};
console.log(JSON.stringify(game, null, 2));
