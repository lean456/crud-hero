import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from 'src/app/hero-model';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  hero: Hero = new Hero();
  form: any;
  public warn = 'warn';
  idParam: string | null = '';
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  createForm(): FormGroup {
    return this.fb.group({
      name: [this.hero.name, Validators.required],
      description: [this.hero.description, Validators.required],
      power: [this.hero.power, Validators.required],
      enemy: [this.hero.enemy, Validators.required],
    });
  }

  ngOnInit(): void {
    this.heroService.getAllSuperheroImage();
    this.idParam = this.route.snapshot.paramMap.get('id');
    if (this.idParam !== null) {
      this.heroService.getSuperheroById(+this.idParam).subscribe((hero) => {
        this.hero = hero;
      });
    }
    this.form = this.createForm();
  }

  getImageSuperhero(name: string) {
    return this.heroService.getSuperheroImage(name);
  }
}
