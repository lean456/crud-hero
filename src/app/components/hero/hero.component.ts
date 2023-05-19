import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from 'src/app/hero-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  hero: Hero = new Hero();
  public warn = 'warn';
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.heroService.getAllSuperheroImage();
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.heroService.getSuperheroById(+idParam).subscribe(
        (hero) => {
          this.hero = hero;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  getImageSuperhero(name: string) {
    console.log(this.heroService.getSuperheroImage(name));
    return this.heroService.getSuperheroImage(name);
  }
}
