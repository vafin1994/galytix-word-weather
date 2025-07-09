import {Component, Input} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';

@Component({
  selector: 'app-humidity-card',
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle
  ],
  templateUrl: './humidity-card.html',
  styleUrl: './humidity-card.css'
})
export class HumidityCard {
  @Input() public humidityValue!: number;
}
