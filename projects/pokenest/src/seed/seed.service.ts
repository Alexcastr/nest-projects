import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-interface';
@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  async executeSeed() {
    const { data } = await this.axios.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=2',
    );

    data.results.forEach((pokemon) => {
      const { name, url } = pokemon;

      const segments = url.split('/');
      const no = segments[segments.length - 2];

      console.log(`Pokemon: ${name} - No: ${no}`);
    });

    return data;
  }
}
