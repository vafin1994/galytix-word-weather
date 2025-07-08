import { ResolveFn } from '@angular/router';
import {FetchWeather} from '../api-services/fetch-weather';
import {inject} from '@angular/core';
import {WeatherData} from '../models/weather.model';

export const countryWeatherResolver: ResolveFn<WeatherData> = (route, state) => {
  return inject(FetchWeather).fetchWeatherForCountry(route.params['country']);
};
