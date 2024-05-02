import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';
import { CARS_SEED } from './data/cars.data';
import { BRAND_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService
  ) {}

  // Populate the database with seed data from the cars and brands services (inyectable ) <--
  populateDB() {
    this.carsService.fillCarsWithSeed(CARS_SEED);
    this.brandsService.fillBrandsWithSeed(BRAND_SEED);

    return "DB populated successfully!"
  }
}
