/////// Задание 1
var Documents;
(function (Documents) {
    Documents["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
    Documents["Medical\u0420olicy"] = "\u041C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u0439 \u043F\u043E\u043B\u0438\u0441";
    Documents["Snils"] = "\u0421\u043D\u0438\u043B\u0441";
})(Documents || (Documents = {}));
class COvner {
    constructor(lastName, firstName, middleName, birthDate, docType, docSeries, docNumber) {
        this._lastName = lastName;
        this._firstName = firstName;
        this._middleName = middleName;
        this._birthDate = birthDate;
        this._docType = docType;
        this._docSeries = docSeries;
        this._docNumber = docNumber;
    }
    get lastName() { return this._lastName; }
    get firstName() { return this._firstName; }
    get middleName() { return this._middleName; }
    get birthDate() { return this._birthDate; }
    get docType() { return this._docType; }
    get docSeries() { return this._docSeries; }
    get docNumber() { return this._docNumber; }
    set lastName(value) { this._lastName = value; }
    set firstName(value) { this._firstName = value; }
    set middleName(value) { this._middleName = value; }
    set birthDate(value) { this._birthDate = value; }
    set docType(value) { this._docType = value; }
    set docSeries(value) { this._docSeries = value; }
    set docNumber(value) { this._docNumber = value; }
    print() {
        console.log(`Фамилия: ${this._lastName}`);
        console.log(`Имя: ${this._firstName}`);
        console.log(`Отчество: ${this._middleName}`);
        console.log(`Дата рождения: ${this._birthDate.toLocaleDateString()}`);
        console.log(`Тип документа: ${this._docType}`);
        console.log(`Серия документа: ${this._docSeries}`);
        console.log(`Номер документа: ${this._docNumber}`);
    }
}
class CVehicle {
    constructor(brand, model, year, vin, registrationNumber, owner) {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
    }
    get brand() { return this._brand; }
    get model() { return this._model; }
    get year() { return this._year; }
    get vin() { return this._vin; }
    get registrationNumber() { return this._registrationNumber; }
    get owner() { return this._owner; }
    set brand(value) { this._brand = value; }
    set model(value) { this._model = value; }
    set year(value) { this._year = value; }
    set vin(value) { this._vin = value; }
    set registrationNumber(value) { this._registrationNumber = value; }
    set owner(value) { this._owner = value; }
    print() {
        console.log(`Марка: ${this._brand}`);
        console.log(`Модель: ${this._model}`);
        console.log(`Год выпуска: ${this._year}`);
        console.log(`VIN-номер: ${this._vin}`);
        console.log(`Регистрационный номер: ${this._registrationNumber}`);
    }
}
/////// Задание 2
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
class CCar extends CVehicle {
    constructor(brand, model, year, vin, registrationNumber, owner, bodyType, carClass) {
        super(brand, model, year, vin, registrationNumber, owner);
        this._bodyType = bodyType;
        this._carClass = carClass;
    }
    get bodyType() { return this._bodyType; }
    set bodyType(value) { this._bodyType = value; }
    get carClass() { return this._carClass; }
    set carClass(value) { this._carClass = value; }
    print() {
        super.print();
        console.log(`Тип кузова: ${this._bodyType}`);
        console.log(`Класс автомобиля: ${this._carClass}`);
    }
}
class СMotobike extends CVehicle {
    constructor(brand, model, year, vin, registrationNumber, owner, frameType, forSport) {
        super(brand, model, year, vin, registrationNumber, owner);
        this._frameType = frameType;
        this._forSport = forSport;
    }
    get frameType() { return this._frameType; }
    set frameType(value) { this._frameType = value; }
    get forSport() { return this._forSport; }
    set forSport(value) { this._forSport = value; }
    print() {
        super.print();
        console.log(`Тип рамы: ${this.frameType}`);
        console.log(`Для спорта: ${this._forSport}`);
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
}
const owner = new COvner("Каркарыч", "Григорий", "Аркадьевич", new Date("2000-01-01"), Documents.Passport, "1234", "123456");
const car = new CCar("Toyota", "Camry", 2020, "ABC123456789", "A123BC", owner, CarType.Sedan, CarClass.Comfort);
const bike = new СMotobike("Harley-Davidson", "Sportster", 2019, "XYZ987654321", "M456XY", owner, "Стальная", true);
const storageClass = new StorageClass();
storageClass.addVehicle(car);
storageClass.addVehicle(bike);
car.print();
bike.print();
owner.print();
console.log("Все транспортные средства:", storageClass.getAllVehicles());
