import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {Country, CountryResponse} from '../models/countries.model';
import {HttpClient} from '@angular/common/http';
import {FETCH_COUNTRIES_API} from './api-constants';

@Injectable({
  providedIn: 'root'
})
export class FetchCountries {
  constructor(private httpClient: HttpClient) {
  }

  public getListOfCountries(): Observable<Country[]> {
    return this.httpClient.get<CountryResponse>(FETCH_COUNTRIES_API).pipe(
      map((response: CountryResponse) => {
        return response.data;
      })
    )
  }
}
