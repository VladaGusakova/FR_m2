//Вариант 1

/////// Задание 1
function findMaxNumber (numbers: number[]): number {
    return Math.max(...numbers);
};

const numbers = [1, 2, 3, 1];
console.log(findMaxNumber(numbers)); 

function hasNegativeNumber (matrix: number[][]): boolean {
    for (let row of matrix) {
        for (let num of row) {
            if (num < 0) {
                return true;
            }
        }
    }
    return false;
};

const matrix = [
    [1, 2, 3],
    [4, -5, 6],
    [7, 8, 9]
];
console.log(hasNegativeNumber(matrix));

/////// Задание 2
type ThreeTuple = [number, number, number];

function sumTuple (tuple: ThreeTuple): number {
    let sum: number = 0;
    for (let num of tuple){
        sum += num;
    }
    return sum;
};

const tuple: ThreeTuple = [1, 2, 3];
console.log(sumTuple(tuple));

/////// Задание 3
enum BallType {
    Football = "Football",
    Basketball = "Basketball",
    Volleyball = "Volleyball"
}

const Ball = BallType.Basketball;
console.log(Ball);

/////// Задание 4
class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
        return "No speak. I am fish!";
    }
}
    
class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
        return "Miyau!";
    }
}

function printPetInfo <T extends Pet>(pet: T): void {
    console.log(`Type of pet is: ${pet.constructor.name} Name: ${pet.name}, Age: ${pet.age}, Speak: ${pet.speak()}`);
};

const myCat = new Cat();
printPetInfo(myCat);

/////// Задание 5
type Game = {
    name: string;
    genre: string;
    developers: string;
    price: number;
};

const game: Game = {
    name: "Tabletop Simulator",
    genre: "Simulator",
    developers: "Berserk Games",
    price: 9.99,
};

console.log(JSON.stringify(game, null, 2));