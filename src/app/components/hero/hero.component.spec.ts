import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroComponent } from './hero.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroService } from 'src/app/services/hero.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  const mockedHeroService = jasmine.createSpyObj('HeroService', [
    'getSuperheroById',
    'updateHero',
    'postSuperhero',
  ]);
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        HttpClientModule,
        MatSnackBarModule,
        MatCardModule,
        MatGridListModule,
        MatInputModule,
        ReactiveFormsModule,
      ],
      providers: [{ provider: HeroService, useValue: mockedHeroService }],
    });
    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('createForm should create a form with 4 controls', () => {
    component.createForm();
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('description')).toBeTruthy();
    expect(component.form.contains('power')).toBeTruthy();
    expect(component.form.contains('enemy')).toBeTruthy();
  });

  it('should idParam be null', () => {
    expect(component.idParam).toBeNull();
  });
});
