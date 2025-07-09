import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureCard } from './temperature-card';

describe('TemperatureCard', () => {
  let component: TemperatureCard;
  let fixture: ComponentFixture<TemperatureCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemperatureCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemperatureCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
