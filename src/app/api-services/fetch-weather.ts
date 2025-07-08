import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {FETCH_WEATHER_FOR_COUNTRY} from './api-constants';
import {WeatherData} from '../models/weather.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchWeather {

  constructor(private httpClient: HttpClient) {
  }

  public fetchWeatherForCountry(countyName: string): Observable<WeatherData> {
    const httpParams = new HttpParams()
      .set('q', countyName)
      .set('APPID', FETCH_WEATHER_FOR_COUNTRY.APPID);
    return this.httpClient.get<WeatherData>(FETCH_WEATHER_FOR_COUNTRY.API, {params: httpParams});
  }
}
