import { TestBed } from '@angular/core/testing';

import { FetchWeather } from './fetch-weather';

describe('FetchWeather', () => {
  let service: FetchWeather;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchWeather);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
