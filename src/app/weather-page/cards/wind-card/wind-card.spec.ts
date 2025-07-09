import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindCard } from './wind-card';

describe('WindCard', () => {
  let component: WindCard;
  let fixture: ComponentFixture<WindCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
