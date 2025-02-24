import { Transport } from "./transport";
const owner = new Transport.COvner(
    "Каркарыч", 
    "Григорий", 
    "Аркадьевич", 
    new Date("2000-01-01"), 
    Transport.Documents.Passport, 
    "1234", 
    "123456"
);

const car = new Transport.CCar(
    "Toyota",
    "Camry",
    2020,
    "ABC123456789",
    "A123BC",
    owner,
    Transport.CarType.Sedan,
    Transport.CarClass.Comfort
);

const bike = new Transport.СMotobike(
    "Harley-Davidson",
    "Sportster",
    2019,
    "XYZ987654321",
    "M456XY",
    owner,
    "Стальная",
    true
);

const storageClass = new Transport.StorageClass<Transport.Vehicle>();
storageClass.addVehicle(car);
storageClass.addVehicle(bike);

car.print();
bike.print();
owner.print();
console.log("Все транспортные средства:", storageClass.getAllVehicles());
