declare const concatNumbersToString: (num1: number, num2: number) => string;
declare const result: string;
declare let numberValue: number;
declare const stringValue: string;
declare let booleanValue: boolean;
declare const arrayValue: number[];
declare const objectValue: {
    key: string;
    value: number;
};
declare let anyValue: any;
interface Entity {
    id: number;
}
interface ToJsonStringify extends Entity {
    name: string;
    surname?: string;
}
declare const data: ToJsonStringify;
declare const jsonString: string;
