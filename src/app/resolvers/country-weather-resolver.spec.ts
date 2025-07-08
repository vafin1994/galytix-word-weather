import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { countryWeatherResolver } from './country-weather-resolver';

describe('countryWeatherResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => countryWeatherResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
