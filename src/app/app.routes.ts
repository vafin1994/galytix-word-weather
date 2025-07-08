import {Routes} from '@angular/router';
import {ListOfCountries} from "./list-of-countries/list-of-countries";
import {WeatherPage} from "./weather-page/weather-page";
import {NotFound} from "./not-found/not-found";

export const routes: Routes = [
    {path: 'listOfCountries', component: ListOfCountries},
    {path: 'weather/:id', component: WeatherPage},
    {path: '', redirectTo: 'listOfCountries', pathMatch: 'full'},
    {path: '**', component: NotFound}
];
