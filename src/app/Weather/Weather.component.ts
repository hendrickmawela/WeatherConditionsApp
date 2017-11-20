import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import 'rxjs/Rx';


import { WeatherService } from '../weather.service';
import { CurrentWeather } from '../current-weather';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-current',
  templateUrl: './Weather.component.html',
  styleUrls: ['./Weather.component.css']
})
export class WeatherComponent implements OnInit {
myWeather:CurrentWeather;
  constructor(private ws:WeatherService, private route:ActivatedRoute) { }

  imgSrc: any;
  ngOnInit() {
  this.route.data.subscribe(
  (data:{myWeather:CurrentWeather}) => {
    this.myWeather = data.myWeather;
    console.log(this.myWeather);
    this.imgSrc='//openweathermap.org/img/w/'+this.myWeather.icon+'.png';
    //http://openweathermap.org/img/w/01d.png
    console.log(this.imgSrc);
  }
)}

refresh(): void {
  window.location.reload();
}
}
 