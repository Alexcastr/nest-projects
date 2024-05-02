import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from 'uuid';


export const CARS_SEED: Car[] = [

    {
        id: uuid(),
        model: 'Corolla',
        brand: 'Toyota',
    },
    {
        id: uuid(),
        model: 'Camry',
        brand: 'Toyota',
    },
    {
        id: uuid(),
        model: 'Prius',
        brand: 'Toyota',
    }, 
    {
        id: uuid(),
        model: 'Civic',
        brand: 'Honda',
    },
    {
        id: uuid(),
        model: 'Accord',
        brand: 'Honda',
    },
]
