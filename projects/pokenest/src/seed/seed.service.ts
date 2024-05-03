import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
  async executeSeed() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then((response) => {
      console.log('response', response);
      return response.json();
    });
  }
}
