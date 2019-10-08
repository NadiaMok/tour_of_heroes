import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Captain America' },
      { id: 12, name: 'Iron Man' },
      { id: 13, name: 'Wasp' },
      { id: 14, name: 'Hulk' },
      { id: 15, name: 'Hawkeye' },
      { id: 16, name: 'Nebula' },
      { id: 17, name: 'Thor' },
      { id: 18, name: 'Captain Marvel' },
      { id: 19, name: 'Antman' },
      { id: 20, name: 'Spiderman' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
