import { TestBed } from '@angular/core/testing';

import { FetchCountries } from './fetch-countries';

describe('FetchCountries', () => {
  let service: FetchCountries;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchCountries);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
