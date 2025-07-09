import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {WeatherData} from '../models/weather.model';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {FetchWeather} from '../api-services/fetch-weather';
import {take} from 'rxjs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {TemperatureCard} from './cards/temperature-card/temperature-card';
import {PressureCard} from './cards/pressure-card/pressure-card';
import {HumidityCard} from './cards/humidity-card/humidity-card';
import {MapCard} from './cards/map-card/map-card';

@Component({
  selector: 'app-weather-page',
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatButtonToggleModule, TemperatureCard, PressureCard, HumidityCard, MapCard],
  templateUrl: './weather-page.html',
  styleUrl: './weather-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherPage implements OnInit {

  uomValue: 'metric' | 'imperial' = 'metric'
  weatherData: WeatherData | undefined;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private fetchWeather: FetchWeather,
              private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: Data) => {
      const weatherDate = data['weather'];
      this.weatherData = weatherDate ? weatherDate : undefined;
    })
  }

  onReturnButtonClicked() {
    this.router.navigate(['/']);
  }

  changeUnitsOfMeasure(unitsOfMeasure: 'metric' | 'imperial') {
    this.uomValue = unitsOfMeasure;
    const country = this.activatedRoute.snapshot.params['country'];
    this.fetchWeather.fetchWeatherForCountry(country, unitsOfMeasure).pipe(
      take(1),
    ).subscribe(
      (response: WeatherData) => {
        this.weatherData = response;
        this.cd.markForCheck();
      }
    );
  }

}
