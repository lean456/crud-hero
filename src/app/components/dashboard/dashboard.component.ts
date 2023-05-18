import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);
  HEROS = [
    {
      name: 'Superman',
      age: 30,
      power: 'Fly',
      enemy: 'Lex Luthor',
      description:
        'Superman is a powerful superhero from the planet Krypton, known for his incredible strength, ability to fly, and his commitment to justice.',
    },
    {
      name: 'Spider-Man',
      age: 25,
      power: 'Wall-crawling',
      enemy: 'Green Goblin',
      description:
        'Spider-Man is a young hero with the proportionate strength and agility of a spider. He uses his web-shooters to swing through the city and fight crime.',
    },
    {
      name: 'Wonder Woman',
      age: 500,
      power: 'Superhuman strength',
      enemy: 'Ares',
      description:
        'Wonder Woman is a warrior princess from the Amazons. She possesses superhuman strength, agility, and the power of the Lasso of Truth.',
    },
    {
      name: 'Batman',
      age: 35,
      power: 'Intelligence',
      enemy: 'Joker',
      description:
        'Batman is a highly skilled detective and martial artist. He uses his intelligence, gadgets, and martial arts training to fight crime in Gotham City.',
    },
    {
      name: 'Thor',
      age: 1000,
      power: 'Control over lightning',
      enemy: 'Loki',
      description:
        'Thor is the god of thunder from Asgard. He wields the enchanted hammer Mjolnir and has the power to control lightning and command the elements.',
    },
  ];
}
