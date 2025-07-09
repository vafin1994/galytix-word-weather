import {Component, Input} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {uomSpeed, uomTemperature} from '../../../models/weather-cards.model';

@Component({
  selector: 'app-wind-card',
    imports: [
        MatCard,
        MatCardContent,
        MatCardHeader,
        MatCardTitle
    ],
  templateUrl: './wind-card.html',
  styleUrl: './wind-card.css'
})
export class WindCard {
  @Input() public direction: number = 0;
  @Input() public speed: number = 0;
  @Input() public gust: number = 0;
  @Input() public unitOfMeasure: 'metric' | 'imperial' = 'metric';

  protected readonly uomSpeed = uomSpeed;
}
