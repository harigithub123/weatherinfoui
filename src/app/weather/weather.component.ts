import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Hour } from './Hour.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-weathers',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  forecastHours: Hour[] = [];
  days: number;
  zipCode: string;
  
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  getWeatherInfo() {
    this.http.get<Hour>('/weather/info/get?zip='+this.zipCode+'&days='+this.days)
    .pipe(
      map(responseData => {
        const hours: Hour[] = [];
        for(const key in responseData) {
          if(responseData.hasOwnProperty(key)) {
            hours.push({...responseData[key]});
          }
        }
        return hours;
      })
    )
    .subscribe(hours => {
      console.log(hours);
      this.forecastHours = hours;
    });
  }


}
