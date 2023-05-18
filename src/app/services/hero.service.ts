import { Injectable } from '@angular/core';
import { Hero } from '../hero-model';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  HEROS: Hero[] = [
    {
      id: 1,
      name: 'Superman',
      power: 'Fly',
      enemy: 'Lex Luthor',
      description:
        'Superman is a powerful superhero from the planet Krypton, known for his incredible strength, ability to fly, and his commitment to justice.',
    },
    {
      id: 2,
      name: 'Spider-Man',
      power: 'Wall-crawling',
      enemy: 'Green Goblin',
      description:
        'Spider-Man is a young hero with the proportionate strength and agility of a spider. He uses his web-shooters to swing through the city and fight crime.',
    },
    {
      id: 3,
      name: 'Wonder Woman',
      power: 'Superhuman strength',
      enemy: 'Ares',
      description:
        'Wonder Woman is a warrior princess from the Amazons. She possesses superhuman strength, agility, and the power of the Lasso of Truth.',
    },
    {
      id: 4,
      name: 'Batman',
      power: 'Intelligence',
      enemy: 'Joker',
      description:
        'Batman is a highly skilled detective and martial artist. He uses his intelligence, gadgets, and martial arts training to fight crime in Gotham City.',
    },
    {
      id: 5,
      name: 'Thor',
      power: 'Control over lightning',
      enemy: 'Loki',
      description:
        'Thor is the god of thunder from Asgard. He wields the enchanted hammer Mjolnir and has the power to control lightning and command the elements.',
    },
  ];
  constructor() {}

  getHeros() {
    return this.HEROS;
  }

  getHero(id: number): Hero {
    const hero = this.HEROS.find((hero) => hero.id === id);
    return hero !== undefined ? hero : new Hero();
  }

  addHero(hero: Hero) {
    this.HEROS.push(hero);
  }

  updateHero(hero: Hero) {
    const index = this.HEROS.findIndex((h) => h.id === hero.id);
    this.HEROS[index] = hero;
  }

  deleteHero(id: number) {
    this.HEROS = this.HEROS.filter((hero) => hero.id !== id);
  }
}
