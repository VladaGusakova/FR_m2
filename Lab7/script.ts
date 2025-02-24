///Bar 1


/////// Перечисления и интерфейсы
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

/////// Классы
class COvner implements Owner {
    constructor(
        public lastName: string,
        public firstName: string,
        public middleName: string,
        public birthDate: Date,
        public docType: Documents,
        public docSeries: string,
        public docNumber: string
    ) {}

    print(): void {
        console.log(`Фамилия: ${this.lastName}`);
        console.log(`Имя: ${this.firstName}`);
        console.log(`Отчество: ${this.middleName}`);
        console.log(`Дата рождения: ${this.birthDate.toLocaleDateString()}`);
        console.log(`Тип документа: ${this.docType}`);
        console.log(`Серия документа: ${this.docSeries}`);
        console.log(`Номер документа: ${this.docNumber}`);
    }
}

class CVehicle implements Vehicle {
    constructor(
        public brand: string,
        public model: string,
        public year: number,
        public vin: string,
        public registrationNumber: string,
        public owner: Owner
    ) {}

    print(): void {
        console.log(`Марка: ${this.brand}`);
        console.log(`Модель: ${this.model}`);
        console.log(`Год выпуска: ${this.year}`);
        console.log(`VIN-номер: ${this.vin}`);
        console.log(`Регистрационный номер: ${this.registrationNumber}`);
    }


    // Метод алгоритма модификации
    getVehicleInfo(): string {
        const info = {
            vin: this.vin,
            owner: `${this.owner.lastName} ${this.owner.firstName} ${this.owner.middleName}`,
            registrationNumber: this.registrationNumber
        };
        return JSON.stringify(info);
    }
}

class CCar extends CVehicle implements Car {
    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: Owner,
        public bodyType: CarType,
        public carClass: CarClass
    ) {
        super(brand, model, year, vin, registrationNumber, owner);
    }

    print(): void {
        super.print();
        console.log(`Тип кузова: ${this.bodyType}`);
        console.log(`Класс автомобиля: ${this.carClass}`);
    }
}

class СMotobike extends CVehicle implements Motobike {
    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: Owner,
        public frameType: string,
        public forSport: boolean
    ) {
        super(brand, model, year, vin, registrationNumber, owner);
    }

    print(): void {
        super.print();
        console.log(`Тип рамы: ${this.frameType}`);
        console.log(`Для спорта: ${this.forSport}`);
    }
}

class StorageClass<T extends Vehicle> implements VehicleStorage<T> {
    created: Date;
    vehicles: T[];

    constructor() {
        this.created = new Date();
        this.vehicles = [];
    }

    getAllVehicles(): T[] {
        return this.vehicles;
    }

    addVehicle(vehicle: T): void {
        this.vehicles.push(vehicle);
    }

    // Сортировка
    sortByBrand(): T[] {
        return this.vehicles.slice().sort((a, b) => a.brand.localeCompare(b.brand));
    }

    // Фильтрация
    filterByOwnerLastName(lastName: string): T[] {
        return this.vehicles.filter(vehicle => 
            vehicle.owner.lastName.toLowerCase() === lastName.toLowerCase()
        );
    }
}


const owner1 = new COvner("Иванов", "Иван", "Иванович", new Date("1990-01-01"), Documents.Passport, "1234", "123456");
const owner2 = new COvner("Петров", "Пётр", "Петрович", new Date("1985-05-05"), Documents.Passport, "5678", "654321");

const car1 = new CCar("Toyota", "Camry", 2020, "ABC123", "A123BC", owner1, CarType.Sedan, CarClass.Comfort);
const car2 = new CCar("BMW", "X5", 2019, "XYZ987", "B456XY", owner2, CarType.SUV, CarClass.Luxury);

const storage = new StorageClass<Vehicle>();
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