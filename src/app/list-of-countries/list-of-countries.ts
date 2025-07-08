import {Component, OnInit} from '@angular/core';
import {FetchCountries} from '../api-services/fetch-countries';
import {CommonModule} from '@angular/common';
import {Country} from '../models/countries.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list-of-countries',
  imports: [CommonModule],
  templateUrl: './list-of-countries.html',
  styleUrl: './list-of-countries.css'
})
export class ListOfCountries implements OnInit {
  listOfCountries$: Observable<Country[]> | undefined;

  constructor(public fetchCountries: FetchCountries) {
  }

  ngOnInit() {
    this.getListOfCountries();
  }

  getListOfCountries(){
    this.listOfCountries$ = this.fetchCountries.getListOfCountries();
  }

  countryName(index: number, country: Country){
    return country.country
  }

}
