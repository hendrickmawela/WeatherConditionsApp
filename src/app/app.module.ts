import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WeatherComponent } from './Weather/Weather.component';

import { weatherRouting } from './weatherConditions.routing';
import { WeatherService } from './weather.service';
import { ResolveLocationService } from './resolve-location.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherComponent,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    weatherRouting,
    
  ],
  providers: [WeatherService,ResolveLocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
