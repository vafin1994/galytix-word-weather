import {Routes} from '@angular/router';
import {ListOfCountries} from "./list-of-countries/list-of-countries";
import {WeatherPage} from "./weather-page/weather-page";
import {NotFound} from "./not-found/not-found";
import {countryWeatherResolver} from "./resolvers/country-weather-resolver";

export const routes: Routes = [
    {path: 'listOfCountries', component: ListOfCountries},
    {path: 'weather/:country', component: WeatherPage, resolve: {weather: countryWeatherResolver}},
    {path: '', redirectTo: 'listOfCountries', pathMatch: 'full'},
    {path: '**', component: NotFound}
];
