import { Component, NgModule, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  loadedFeature: string;
  constructor() { 
  }

  onNavigate = function(selectedFeature: string) {
    this.loadedFeature = selectedFeature;
  }
}
