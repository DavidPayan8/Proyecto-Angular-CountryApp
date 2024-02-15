import { RouterModule, Routes } from "@angular/router";
import { ByCapitalPageComponent } from "./countries/pages/by-capital-page/by-capital-page.component";
import { ByRegionPageComponent } from "./countries/pages/by-region-page/by-region-page.component";
import { ByCountryPageComponent } from "./countries/pages/by-country-page/by-country-page.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: '',
        component: ByCapitalPageComponent,
        pathMatch: 'full'
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




@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}