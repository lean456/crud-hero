import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from 'src/app/hero-model';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  createForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      power: ['', Validators.required],
      enemy: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.heroService.getAllSuperheroImage();
    this.idParam = this.route.snapshot.paramMap.get('id');
    if (this.idParam !== null) {
      this.heroService.getSuperheroById(+this.idParam).subscribe((hero) => {
        this.hero = hero;
        this.pushHeroToForm();
      });
    }
    this.form = this.createForm();
  }
  pushHeroToForm() {
    this.form.patchValue({
      name: this.hero.name,
      description: this.hero.description,
      power: this.hero.power,
      enemy: this.hero.enemy,
    });
  }

  saveHero() {
    this.hero = this.form.value;
    this.hero.id = +this.idParam!;
    if (this.idParam !== null) {
      this.heroService.updateHero(this.hero).subscribe();
    } else {
      this.heroService.postSuperhero(this.hero).subscribe();
    }
    this._snackBar.open('Hero saved', undefined, {
      duration: 2000,
    });
    this.gotoDashboard();
  }
  gotoDashboard() {
    window.location.href = '/dashboard';
  }

  getImageSuperhero(name: string) {
    return this.heroService.getSuperheroImage(name);
  }
}
