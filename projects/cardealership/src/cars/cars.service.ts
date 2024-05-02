import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';


@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   model: 'Corolla',
    //   brand: 'Toyota',
    // },
    // {
    //   id: uuid(),
    //   model: 'Camry',
    //   brand: 'Toyota',
    // },
    // {
    //   id: uuid(),
    //   model: 'Prius',
    //   brand: 'Toyota',
    // },
  ];

  findAll() {
    return this.cars;
  }

  findById(id: string) {
    const found = this.cars.find((car) => car.id === id);

    if (!found) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }
    return this.cars.find((car) => car.id === id);
  }

  create(createCarDto: CreateCarDto){
    const newCar = {
      id: uuid(),
      ...createCarDto
    }
    this.cars.push(newCar);
    return newCar;
  }

  update(id: string, updateCarDto: UpdateCarDto){
    const car = this.findById(id);
    const index = this.cars.indexOf(car);
    this.cars[index] = {
      ...car,
      ...updateCarDto
    }
    return this.cars[index];
  }

  delete(id: string){
    const car = this.findById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return car;
  }

  fillCarsWithSeed(cars: Car[]){
    this.cars = cars;
  }
}
