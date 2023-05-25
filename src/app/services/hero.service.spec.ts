import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroService } from 'src/app/services/hero.service';
import { HttpClientModule } from '@angular/common/http';

describe('HeroService', () => {
  let service: HeroService;
  let fixture: ComponentFixture<HeroService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HeroService],
    });
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should called getSuperhero', () => {
    spyOn(service, 'getSuperhero');
    service.getSuperhero();
    expect(service.getSuperhero).toHaveBeenCalled();
  });
});
