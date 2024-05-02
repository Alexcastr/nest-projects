import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import {v4 as uuid}  from 'uuid';

@Injectable()
export class BrandsService {


// we are inyecting the brand service in the seed service fillBrandsWithSeed method
  private brands: Brand[] = [
    // {
    //   id: uuid(),
    //   name: 'Toyota',
    //   createAt: new Date().getTime(),
     
    // }
    
  ]


  create(createBrandDto: CreateBrandDto) {
   const brand: Brand = {
      id: uuid(),
      name: createBrandDto.name,
      createAt: new Date().getTime(),
    }

    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id);
    if (!brand) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const brand = this.findOne(id);
    const index = this.brands.indexOf(brand);
    this.brands[index] = {
      ...brand,
      ...updateBrandDto
    }
    return this.brands[index];
  }

  remove(id: string) {
    
    const brand = this.findOne(id);
    this.brands = this.brands.filter(brand => brand.id !== id);
    return brand;
  }

  fillBrandsWithSeed(brands: Brand[]){
    this.brands = brands;
  }
}
