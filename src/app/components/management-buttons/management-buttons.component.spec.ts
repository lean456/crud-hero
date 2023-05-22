import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementButtonsComponent } from './management-buttons.component';

describe('ManagementButtonsComponent', () => {
  let component: ManagementButtonsComponent;
  let fixture: ComponentFixture<ManagementButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagementButtonsComponent]
    });
    fixture = TestBed.createComponent(ManagementButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
