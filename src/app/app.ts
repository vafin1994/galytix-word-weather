import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {MatCard} from '@angular/material/card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbar, MatCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Galytix World Weather';
}
