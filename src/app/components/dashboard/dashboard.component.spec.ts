import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { DashboardComponent } from './dashboard.component';
import { HeroService } from 'src/app/services/hero.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  const mockedHeroService = jasmine.createSpyObj('HeroService', [
    'getSuperheroById',
    'updateHero',
    'postSuperhero',
  ]);
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [
        NoopAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatMenuModule,
        HttpClientModule,
        MatSnackBarModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatInputModule,
      ],
      providers: [{ provider: HeroService, useValue: mockedHeroService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should called getImageSuperhero()', () => {
    const name = 'Batman';
    spyOn(component, 'getImageSuperhero');
    component.getImageSuperhero(name);
    expect(component.getImageSuperhero).toHaveBeenCalled();
  });
  it('should called openDialogDelete(event: boolean, id: number, name: string)', () => {
    spyOn(component, 'openDialogDelete');
    component.openDialogDelete(true, 1, 'Batman');
    expect(component.openDialogDelete).toHaveBeenCalled();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
