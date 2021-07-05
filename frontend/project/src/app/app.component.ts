import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  lat = 42.3262055;
  long = -82.9808741;
  zoom = 4;
  
  markers = [
        {
            lat: 42.2961451,
            lng: -83.05095539999999,
            label: '1302 Bridge Avenue, Windsor ON N9B 2N3 Windsor Ontario Canada'
        },
        {
          lat: 42.3186393,
          lng: -82.9890633,
          label: 'Franklin Street, Windsor ON N8Y Windsor Ontario Canada'
        },
        {
          lat: 42.3262055,
          lng: -82.9808741,
          label: '4567 Wyandotte Street East, Windsor ON N8Y 1H4 Windsor Ontario Canada'
      }
    ];
 }
