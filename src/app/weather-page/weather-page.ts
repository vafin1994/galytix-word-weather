import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {WeatherData} from '../models/weather.model';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-weather-page',
  imports: [CommonModule],
  templateUrl: './weather-page.html',
  styleUrl: './weather-page.css'
})
export class WeatherPage implements OnInit{

  weatherData: WeatherData | undefined;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: Data) => {
      const weatherDate = data['weather'];
      this.weatherData = weatherDate ? weatherDate : undefined;
    })
  }

}
