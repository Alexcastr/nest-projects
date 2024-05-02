import { Body, Controller, Delete, Get, Param,  ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {

  constructor (
    private readonly carsService: CarsService
  ){}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarByID(@Param('id', ParseUUIDPipe) id: string) {
   
    return this.carsService.findById(id);
  }

  @Post()
  // @UsePipes(ValidationPipe)  aqui se puede agregar la validacion de los datos, pero lo haremos a nivel global(main)
  createCar(@Body() createCarDto: CreateCarDto){
    return this.carsService.create(createCarDto);
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto){
    return this.carsService.update(id, updateCarDto);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string){
    return this.carsService.delete(id);
  }
}
