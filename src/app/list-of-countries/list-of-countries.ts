import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FetchCountries} from '../api-services/fetch-countries';
import {CommonModule} from '@angular/common';
import {Country} from '../models/countries.model';
import {BehaviorSubject, combineLatest, map, Observable, Subject, takeUntil} from 'rxjs';
import {Router} from '@angular/router';
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule} from '@angular/forms';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {MatRow} from '@angular/material/table';

@Component({
  selector: 'app-list-of-countries',
  imports: [CommonModule, FormsModule, MatButton, MatLabel, MatToolbarModule],
  templateUrl: './list-of-countries.html',
  styleUrl: './list-of-countries.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListOfCountries implements OnInit, OnDestroy {
  viewMode: 'grid' | 'list' = 'list';
  searchTerm: string = '';
  destroy$: Subject<void> = new Subject<void>();

  private countries$ = new BehaviorSubject<Country[]>([]);
  private searchTerm$ = new BehaviorSubject<string>('');

  filteredCountries$: Observable<Country[]> = combineLatest([
    this.countries$,
    this.searchTerm$
  ]).pipe(
    map(([countries, term]) =>
      countries.filter((country: Country) =>
        country.country.toLowerCase().includes(term.toLowerCase())
      )
    )
  );

  constructor(public fetchCountries: FetchCountries,
              private router: Router,) {
  }

  ngOnInit() {
    this.getListOfCountries();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public onSearchChange() {
    this.searchTerm$.next(this.searchTerm);
  }

  private getListOfCountries() {
    this.fetchCountries.getListOfCountries().pipe(
      takeUntil(this.destroy$),
    ).subscribe(countries => {
      this.countries$.next(countries);
    });
  }

  onCountrySelected(country: Country) {
    const countryName = country.country
    this.router.navigate(['/weather/', countryName]);
  }

  onToggleView() {
    this.viewMode = this.viewMode === 'list' ? 'grid' : 'list';
  }

  countryName(index: number, country: Country) {
    return country.country
  }

}
