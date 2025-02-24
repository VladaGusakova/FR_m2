declare enum Documents {
    Passport = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442",
    MedicalРolicy = "\u041C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u0439 \u043F\u043E\u043B\u0438\u0441",
    Snils = "\u0421\u043D\u0438\u043B\u0441"
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
interface Motobike extends Vehicle {
    frameType: string;
    forSport: boolean;
}
interface VehicleStorage<T extends Vehicle> {
    created: Date;
    vehicles: T[];
    getAllVehicles(): T[];
    addVehicle(vehicle: T): void;
    sortByBrand(): T[];
    filterByOwnerLastName(lastName: string): T[];
}
declare class COvner implements Owner {
    lastName: string;
    firstName: string;
    middleName: string;
    birthDate: Date;
    docType: Documents;
    docSeries: string;
    docNumber: string;
    constructor(lastName: string, firstName: string, middleName: string, birthDate: Date, docType: Documents, docSeries: string, docNumber: string);
    print(): void;
}
declare class CVehicle implements Vehicle {
    brand: string;
    model: string;
    year: number;
    vin: string;
    registrationNumber: string;
    owner: Owner;
    constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner);
    print(): void;
    getVehicleInfo(): string;
}
declare class CCar extends CVehicle implements Car {
    bodyType: CarType;
    carClass: CarClass;
    constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner, bodyType: CarType, carClass: CarClass);
    print(): void;
}
declare class СMotobike extends CVehicle implements Motobike {
    frameType: string;
    forSport: boolean;
    constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner, frameType: string, forSport: boolean);
    print(): void;
}
declare class StorageClass<T extends Vehicle> implements VehicleStorage<T> {
    created: Date;
    vehicles: T[];
    constructor();
    getAllVehicles(): T[];
    addVehicle(vehicle: T): void;
    sortByBrand(): T[];
    filterByOwnerLastName(lastName: string): T[];
}
declare const owner1: COvner;
declare const owner2: COvner;
declare const car1: CCar;
declare const car2: CCar;
declare const storage: StorageClass<Vehicle>;
declare const sortedVehicles: Vehicle[];
declare const filteredVehicles: Vehicle[];
