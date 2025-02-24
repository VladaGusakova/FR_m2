declare enum Documents {
    Passport = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442",
    MedicalРolicy = "\u041C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u0439 \u043F\u043E\u043B\u0438\u0441",
    Snils = "\u0421\u043D\u0438\u043B\u0441"
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
declare class COvner implements Owner {
    private _lastName;
    private _firstName;
    private _middleName;
    private _birthDate;
    private _docType;
    private _docSeries;
    private _docNumber;
    constructor(lastName: string, firstName: string, middleName: string, birthDate: Date, docType: Documents, docSeries: string, docNumber: string);
    get lastName(): string;
    get firstName(): string;
    get middleName(): string;
    get birthDate(): Date;
    get docType(): Documents;
    get docSeries(): string;
    get docNumber(): string;
    set lastName(value: string);
    set firstName(value: string);
    set middleName(value: string);
    set birthDate(value: Date);
    set docType(value: Documents);
    set docSeries(value: string);
    set docNumber(value: string);
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
declare class CVehicle implements Vehicle {
    private _brand;
    private _model;
    private _year;
    private _vin;
    private _registrationNumber;
    private _owner;
    constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner);
    get brand(): string;
    get model(): string;
    get year(): number;
    get vin(): string;
    get registrationNumber(): string;
    get owner(): Owner;
    set brand(value: string);
    set model(value: string);
    set year(value: number);
    set vin(value: string);
    set registrationNumber(value: string);
    set owner(value: Owner);
    print(): void;
}
declare enum CarType {
    Sedan = "\u0421\u0435\u0434\u0430\u043D",
    Hatchback = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A",
    SUV = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A",
    Coupe = "\u041A\u0443\u043F\u0435",
    Minivan = "\u041C\u0438\u043D\u0438\u0432\u0435\u043D"
}
declare enum CarClass {
    Economy = "\u042D\u043A\u043E\u043D\u043E\u043C",
    Comfort = "\u041A\u043E\u043C\u0444\u043E\u0440\u0442",
    Business = "\u0411\u0438\u0437\u043D\u0435\u0441",
    Luxury = "\u041B\u044E\u043A\u0441"
}
interface Car extends Vehicle {
    bodyType: CarType;
    carClass: CarClass;
}
declare class CCar extends CVehicle implements Car {
    private _bodyType;
    private _carClass;
    constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner, bodyType: CarType, carClass: CarClass);
    get bodyType(): CarType;
    set bodyType(value: CarType);
    get carClass(): CarClass;
    set carClass(value: CarClass);
    print(): void;
}
interface Motobike extends Vehicle {
    frameType: string;
    forSport: boolean;
}
declare class СMotobike extends CVehicle implements Motobike {
    private _frameType;
    private _forSport;
    constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner, frameType: string, forSport: boolean);
    get frameType(): string;
    set frameType(value: string);
    get forSport(): boolean;
    set forSport(value: boolean);
    print(): void;
}
interface VehicleStorage<T extends Vehicle> {
    created: Date;
    vehicles: T[];
    getAllVehicles(): T[];
}
declare class StorageClass<T extends Vehicle> implements VehicleStorage<T> {
    created: Date;
    vehicles: T[];
    constructor();
    getAllVehicles(): T[];
    addVehicle(vehicle: T): void;
}
declare const owner: COvner;
declare const car: CCar;
declare const bike: СMotobike;
declare const storageClass: StorageClass<Vehicle>;
