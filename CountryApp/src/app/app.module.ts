import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CountryModule } from './countries/country.module';
import { SharedModule } from './shared/shared.module';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routes,
    HttpClientModule,
    CountryModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }