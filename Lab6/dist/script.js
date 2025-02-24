"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/////// Декораторы
function freezeClass(constructor) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}
function uppercaseMethod(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const result = originalMethod.apply(this, args);
        if (typeof result === 'string') {
            return result.toUpperCase();
        }
        return result;
    };
    return descriptor;
}
///////
var Documents;
(function (Documents) {
    Documents["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
    Documents["Medical\u0420olicy"] = "\u041C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u0439 \u043F\u043E\u043B\u0438\u0441";
    Documents["Snils"] = "\u0421\u043D\u0438\u043B\u0441";
})(Documents || (Documents = {}));
var CarType;
(function (CarType) {
    CarType["Sedan"] = "\u0421\u0435\u0434\u0430\u043D";
    CarType["Hatchback"] = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A";
    CarType["SUV"] = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A";
    CarType["Coupe"] = "\u041A\u0443\u043F\u0435";
    CarType["Minivan"] = "\u041C\u0438\u043D\u0438\u0432\u0435\u043D";
})(CarType || (CarType = {}));
var CarClass;
(function (CarClass) {
    CarClass["Economy"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
    CarClass["Comfort"] = "\u041A\u043E\u043C\u0444\u043E\u0440\u0442";
    CarClass["Business"] = "\u0411\u0438\u0437\u043D\u0435\u0441";
    CarClass["Luxury"] = "\u041B\u044E\u043A\u0441";
})(CarClass || (CarClass = {}));
/////// Класс автомобиля с декораторами
let CCar = class CCar {
    constructor(brand, model, year, vin, registrationNumber, owner, bodyType, carClass) {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
        this._bodyType = bodyType;
        this._carClass = carClass;
    }
    get brand() { return this._brand; }
    get model() { return this._model; }
    get year() { return this._year; }
    get vin() { return this._vin; }
    get registrationNumber() { return this._registrationNumber; }
    get owner() { return this._owner; }
    get bodyType() { return this._bodyType; }
    get carClass() { return this._carClass; }
    set brand(value) { this._brand = value; }
    set model(value) { this._model = value; }
    set year(value) { this._year = value; }
    set vin(value) { this._vin = value; }
    set registrationNumber(value) { this._registrationNumber = value; }
    set owner(value) { this._owner = value; }
    set bodyType(value) { this._bodyType = value; }
    set carClass(value) { this._carClass = value; }
    print() {
        console.log(`Марка: ${this._brand}`);
        console.log(`Модель: ${this._model}`);
        console.log(`Год выпуска: ${this._year}`);
        console.log(`VIN-номер: ${this._vin}`);
        console.log(`Регистрационный номер: ${this._registrationNumber}`);
        console.log(`Тип кузова: ${this._bodyType}`);
        console.log(`Класс автомобиля: ${this._carClass}`);
    }
};
__decorate([
    uppercaseMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CCar.prototype, "print", null);
CCar = __decorate([
    freezeClass,
    __metadata("design:paramtypes", [String, String, Number, String, String, Object, String, String])
], CCar);
const owner = new class {
    constructor() {
        this.lastName = "Каркарыч";
        this.firstName = "Григорий";
        this.middleName = "Аркадьевич";
        this.birthDate = new Date("2000-01-01");
        this.docType = Documents.Passport;
        this.docSeries = "1234";
        this.docNumber = "123456";
    }
    print() {
        console.log(`Фамилия: ${this.lastName}`);
        console.log(`Имя: ${this.firstName}`);
        console.log(`Отчество: ${this.middleName}`);
        console.log(`Дата рождения: ${this.birthDate.toLocaleDateString()}`);
        console.log(`Тип документа: ${this.docType}`);
        console.log(`Серия документа: ${this.docSeries}`);
        console.log(`Номер документа: ${this.docNumber}`);
    }
};
const car = new CCar("Toyota", "Camry", 2020, "ABC123456789", "A123BC", owner, CarType.Sedan, CarClass.Comfort);
car.print();
// Проверка заморозки прототипа
try {
    // @ts-ignore
    CCar.prototype.newProperty = "Новое свойство";
    console.log("Новое свойство успешно добавлено в прототип.");
}
catch (e) {
    if (e instanceof Error) { // Проверяем, что ошибка является экземпляром Error
        console.log("Ошибка: невозможно добавить свойство в замороженный прототип.");
    }
}
