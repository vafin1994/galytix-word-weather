import {Component, Input} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {uomTemperature} from "../../../models/weather-cards.model";

@Component({
  selector: 'app-pressure-card',
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle
  ],
  templateUrl: './pressure-card.html',
  styleUrl: './pressure-card.css'
})
export class PressureCard {
  @Input() pressureValue!: number;
}
