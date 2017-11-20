import { Injectable } from '@angular/core';
import 'rxjs/Rx';

import { CurrentWeather } from './current-weather';
import { Http,Response } from '@angular/http';

@Injectable()
export class WeatherService {
 myWeather:CurrentWeather;
 location
  constructor(private http:Http) { }

  localWeather(){

    return new Promise ((resolve, reject) =>{
     navigator.geolocation.getCurrentPosition((pos) =>{
       this.location = pos.coords;
       const lat = this.location.latitude;
       const lon = this.location.longitude;

       return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=53f9d8e4213222cf517d86dc406d67fc`)
       .map((response:Response) => response.json()).toPromise().then(
         (data) => {
            this.myWeather = new CurrentWeather(data.name,
                     data.main.temp,
                     data.weather[0].icon,
                     data.weather[0].description,
                     data.main.temp_max,
                     data.main.temp_min);
                     resolve(this.myWeather);
         }
    );
     })
    })
  }
}
