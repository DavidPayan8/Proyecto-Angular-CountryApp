import { Component} from '@angular/core';
import { CountryTablaComponent } from '../../component/country-tabla/country-tabla.component';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/country';
import { CommonModule } from '@angular/common';
import { CountryInputComponent } from '../../component/country-input/country-input.component';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [ CountryTablaComponent,CommonModule,CountryInputComponent],
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  cod : string = '';
  countries : Country[] = [];

  constructor( private paisService: PaisService ) { }

  buscar( cod: string ) {
    console.log(cod)
    this.cod  = cod;

    this.paisService.buscarCapital( cod )
      .subscribe( (countries) => {
        this.countries = countries;
      }, (err) => {
        this.countries   = [];
      });
      console.log(this.countries)

  }

}
