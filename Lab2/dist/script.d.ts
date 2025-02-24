declare function findMaxNumber(numbers: number[]): number;
declare const numbers: number[];
declare function hasNegativeNumber(matrix: number[][]): boolean;
declare const matrix: number[][];
type ThreeTuple = [number, number, number];
declare function sumTuple(tuple: ThreeTuple): number;
declare const tuple: ThreeTuple;
declare enum BallType {
    Football = "Football",
    Basketball = "Basketball",
    Volleyball = "Volleyball"
}
declare const Ball = BallType.Basketball;
declare class Pet {
    name: string;
    age: number;
    speak(): string;
}
declare class Dog extends Pet {
    label: string;
    age: number;
    speak(): string;
}
declare class Cat extends Pet {
    name: string;
    age: number;
    speak(): string;
}
declare function printPetInfo<T extends Pet>(pet: T): void;
declare const myCat: Cat;
type Game = {
    name: string;
    genre: string;
    developers: string;
    price: number;
};
declare const game: Game;
