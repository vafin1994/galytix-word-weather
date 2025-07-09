import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressureCard } from './pressure-card';

describe('PressureCard', () => {
  let component: PressureCard;
  let fixture: ComponentFixture<PressureCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PressureCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PressureCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
