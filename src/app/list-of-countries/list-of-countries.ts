import {Component, OnInit} from '@angular/core';
import {FetchCountries} from '../api-services/fetch-countries';
import {CommonModule} from '@angular/common';
import {Country} from '../models/countries.model';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-of-countries',
  imports: [CommonModule],
  templateUrl: './list-of-countries.html',
  styleUrl: './list-of-countries.css'
})
export class ListOfCountries implements OnInit {
  listOfCountries$: Observable<Country[]> | undefined;

  constructor(public fetchCountries: FetchCountries,
              private router: Router,) {
  }

  ngOnInit() {
    this.getListOfCountries();
  }

  private getListOfCountries() {
    this.listOfCountries$ = this.fetchCountries.getListOfCountries();
  }

  onCountrySelected(country: Country) {
    const countryName = country.country
    this.router.navigate(['/weather/', countryName]);
  }

  countryName(index: number, country: Country) {
    return country.country
  }

}
