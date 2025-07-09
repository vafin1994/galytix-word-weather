import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {uomTemperature} from '../../../models/weather-cards.model';

@Component({
  selector: 'app-temperature-card',
  imports: [
    MatCardModule,
  ],
  templateUrl: './temperature-card.html',
  styleUrl: './temperature-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemperatureCard {
  @Input() public temp: number | undefined;
  @Input() public feels_like: number | undefined;
  @Input() public temp_min: number | undefined;
  @Input() public temp_max: number | undefined;
  @Input() public unitOfMeasure: 'metric' | 'imperial' = 'metric';

  protected readonly uomTemperature = uomTemperature;
}
