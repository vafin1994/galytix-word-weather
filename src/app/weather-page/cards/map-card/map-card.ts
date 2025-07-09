import {Component, Input, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {GoogleMapsModule} from '@angular/google-maps';

@Component({
  selector: 'app-map-card',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    GoogleMapsModule
  ],
  templateUrl: './map-card.html',
  styleUrl: './map-card.css'
})
export class MapCard implements OnInit {
  @Input() coord: {lat: number, lng: number} | undefined;
  zoom = 6;
  center: google.maps.LatLngLiteral = {lat: 0, lng: 0};

  ngOnInit() {
    if(this.coord){
      this.initializeMap(this.coord);
    }
  }

  initializeMap(coord: {lat: number, lng: number}) {
    this.center = {
      lat: coord.lat,
      lng: coord.lng
    };
  }
}
