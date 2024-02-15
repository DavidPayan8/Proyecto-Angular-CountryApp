import { Routes } from "@angular/router";
import { ByCapitalPageComponent } from "./countries/pages/by-capital-page/by-capital-page.component";
import { ByRegionPageComponent } from "./countries/pages/by-region-page/by-region-page.component";
import { ByCountryPageComponent } from "./countries/pages/by-country-page/by-country-page.component";
import { HomePageComponent } from "./shared/pages/home-page/home-page.component";
import { AboutPageComponent } from "./shared/pages/about-page/about-page.component";
import { ContactPageComponent } from "./shared/pages/contact-page/contact-page.component";

 export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutPageComponent
    },
    {
        path: 'contact',
        component: ContactPageComponent
    },
    {
        path: 'region',
        component: ByRegionPageComponent
    },
    {
        path: 'capital',
        component: ByCapitalPageComponent
    },
    {
        path: 'pais/:id',
        component: ByCountryPageComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];