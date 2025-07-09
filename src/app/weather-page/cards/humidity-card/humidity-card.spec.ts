import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumidityCard } from './humidity-card';

describe('HumidityCard', () => {
  let component: HumidityCard;
  let fixture: ComponentFixture<HumidityCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HumidityCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumidityCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
