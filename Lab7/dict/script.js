"use strict";
///Bar 1
/////// Перечисления и интерфейсы
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
/////// Классы
class COvner {
    constructor(lastName, firstName, middleName, birthDate, docType, docSeries, docNumber) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.middleName = middleName;
        this.birthDate = birthDate;
        this.docType = docType;
        this.docSeries = docSeries;
        this.docNumber = docNumber;
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
}
class CVehicle {
    constructor(brand, model, year, vin, registrationNumber, owner) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.vin = vin;
        this.registrationNumber = registrationNumber;
        this.owner = owner;
    }
    print() {
        console.log(`Марка: ${this.brand}`);
        console.log(`Модель: ${this.model}`);
        console.log(`Год выпуска: ${this.year}`);
        console.log(`VIN-номер: ${this.vin}`);
        console.log(`Регистрационный номер: ${this.registrationNumber}`);
    }
    // Метод алгоритма модификации
    getVehicleInfo() {
        const info = {
            vin: this.vin,
            owner: `${this.owner.lastName} ${this.owner.firstName} ${this.owner.middleName}`,
            registrationNumber: this.registrationNumber
        };
        return JSON.stringify(info);
    }
}
class CCar extends CVehicle {
    constructor(brand, model, year, vin, registrationNumber, owner, bodyType, carClass) {
        super(brand, model, year, vin, registrationNumber, owner);
        this.bodyType = bodyType;
        this.carClass = carClass;
    }
    print() {
        super.print();
        console.log(`Тип кузова: ${this.bodyType}`);
        console.log(`Класс автомобиля: ${this.carClass}`);
    }
}
class СMotobike extends CVehicle {
    constructor(brand, model, year, vin, registrationNumber, owner, frameType, forSport) {
        super(brand, model, year, vin, registrationNumber, owner);
        this.frameType = frameType;
        this.forSport = forSport;
    }
    print() {
        super.print();
        console.log(`Тип рамы: ${this.frameType}`);
        console.log(`Для спорта: ${this.forSport}`);
    }
}
class StorageClass {
    constructor() {
        this.created = new Date();
        this.vehicles = [];
    }
    getAllVehicles() {
        return this.vehicles;
    }
    addVehicle(vehicle) {
        this.vehicles.push(vehicle);
    }
    // Сортировка
    sortByBrand() {
        return this.vehicles.slice().sort((a, b) => a.brand.localeCompare(b.brand));
    }
    // Фильтрация
    filterByOwnerLastName(lastName) {
        return this.vehicles.filter(vehicle => vehicle.owner.lastName.toLowerCase() === lastName.toLowerCase());
    }
}
const owner1 = new COvner("Иванов", "Иван", "Иванович", new Date("1990-01-01"), Documents.Passport, "1234", "123456");
const owner2 = new COvner("Петров", "Пётр", "Петрович", new Date("1985-05-05"), Documents.Passport, "5678", "654321");
const car1 = new CCar("Toyota", "Camry", 2020, "ABC123", "A123BC", owner1, CarType.Sedan, CarClass.Comfort);
const car2 = new CCar("BMW", "X5", 2019, "XYZ987", "B456XY", owner2, CarType.SUV, CarClass.Luxury);
const storage = new StorageClass();
storage.addVehicle(car1);
storage.addVehicle(car2);
const sortedVehicles = storage.sortByBrand();
console.log("Отсортированные транспортные средства:");
sortedVehicles.forEach(vehicle => console.log(vehicle.brand));
const filteredVehicles = storage.filterByOwnerLastName("Иванов");
console.log("Отфильтрованные транспортные средства:");
filteredVehicles.forEach(vehicle => console.log(vehicle.brand));
console.log("Информация о транспортном средстве в формате JSON:");
console.log(car1.getVehicleInfo());
