/////// Декораторы
function freezeClass(constructor: Function) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}

function uppercaseMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const result = originalMethod.apply(this, args);
        if (typeof result === 'string') {
            return result.toUpperCase();
        }
        return result;
    };

    return descriptor;
}
///////


enum Documents {
    Passport = "Паспорт",
    MedicalРolicy = "Медицинский полис",
    Snils = "Снилс"
}

enum CarType {
    Sedan = "Седан",
    Hatchback = "Хэтчбек",
    SUV = "Внедорожник",
    Coupe = "Купе",
    Minivan = "Минивен"
}

enum CarClass {
    Economy = "Эконом",
    Comfort = "Комфорт",
    Business = "Бизнес",
    Luxury = "Люкс"
}

interface Owner {
    lastName: string;
    firstName: string;
    middleName: string;
    birthDate: Date;
    docType: Documents;
    docSeries: string;
    docNumber: string;
    print(): void;
}

interface Vehicle {
    brand: string;
    model: string;
    year: number;
    vin: string;
    registrationNumber: string;
    owner: Owner;
    print(): void;
}

interface Car extends Vehicle {
    bodyType: CarType;
    carClass: CarClass;
}

/////// Класс автомобиля с декораторами
@freezeClass
class CCar implements Car {
    private _brand: string;
    private _model: string;
    private _year: number;
    private _vin: string;
    private _registrationNumber: string;
    private _owner: Owner;
    private _bodyType: CarType;
    private _carClass: CarClass;

    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: Owner,
        bodyType: CarType,
        carClass: CarClass
    ) {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
        this._bodyType = bodyType;
        this._carClass = carClass;
    }

    get brand(): string { return this._brand; }
    get model(): string { return this._model; }
    get year(): number { return this._year; }
    get vin(): string { return this._vin; }
    get registrationNumber(): string { return this._registrationNumber; }
    get owner(): Owner { return this._owner; }
    get bodyType(): CarType { return this._bodyType; }
    get carClass(): CarClass { return this._carClass; }

    set brand(value: string) { this._brand = value; }
    set model(value: string) { this._model = value; }
    set year(value: number) { this._year = value; }
    set vin(value: string) { this._vin = value; }
    set registrationNumber(value: string) { this._registrationNumber = value; }
    set owner(value: Owner) { this._owner = value; }
    set bodyType(value: CarType) { this._bodyType = value; }
    set carClass(value: CarClass) { this._carClass = value; }

    @uppercaseMethod
    print(): void {
        console.log(`Марка: ${this._brand}`);
        console.log(`Модель: ${this._model}`);
        console.log(`Год выпуска: ${this._year}`);
        console.log(`VIN-номер: ${this._vin}`);
        console.log(`Регистрационный номер: ${this._registrationNumber}`);
        console.log(`Тип кузова: ${this._bodyType}`);
        console.log(`Класс автомобиля: ${this._carClass}`);
    }
}


const owner = new class implements Owner {
    lastName: string = "Каркарыч";
    firstName: string = "Григорий";
    middleName: string = "Аркадьевич";
    birthDate: Date = new Date("2000-01-01");
    docType: Documents = Documents.Passport;
    docSeries: string = "1234";
    docNumber: string = "123456";

    print(): void {
        console.log(`Фамилия: ${this.lastName}`);
        console.log(`Имя: ${this.firstName}`);
        console.log(`Отчество: ${this.middleName}`);
        console.log(`Дата рождения: ${this.birthDate.toLocaleDateString()}`);
        console.log(`Тип документа: ${this.docType}`);
        console.log(`Серия документа: ${this.docSeries}`);
        console.log(`Номер документа: ${this.docNumber}`);
    }
};

const car = new CCar(
    "Toyota",
    "Camry",
    2020,
    "ABC123456789",
    "A123BC",
    owner,
    CarType.Sedan,
    CarClass.Comfort
);

car.print();
///////


// Проверка заморозки прототипа
try {
    // @ts-ignore
    CCar.prototype.newProperty = "Новое свойство";
    console.log("Новое свойство успешно добавлено в прототип.");
} catch (e) {
    if (e instanceof Error) {
        console.log("Ошибка: невозможно добавить свойство в замороженный прототип.");
    }
}
