import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { WeatherComponent } from './Weather/Weather.component';

import { ResolveLocationService } from './resolve-location.service';


const WEATHER_ROUTING:Routes = [
    {path: '', component: WeatherComponent, resolve:{myWeather:ResolveLocationService}},
  
]


export const weatherRouting:ModuleWithProviders = RouterModule.forRoot(WEATHER_ROUTING)