import { Routes } from '@angular/router';

import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

export const countryRoutes: Routes = [
  { path: 'countries/:capital/by-capital', component: ByCapitalPageComponent },
  { path: 'countries/:name/by-country', component: ByCountryPageComponent },
  { path: 'countries:region/by-region/', component: ByRegionPageComponent },
  { path: 'countries/:id', component: CountryPageComponent },
];

