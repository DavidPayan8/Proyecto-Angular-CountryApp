import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { PaisService } from '../../services/pais.service';
import { CountryTablaComponent } from '../../component/country-tabla/country-tabla.component';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [SearchBoxComponent,CountryTablaComponent,CommonModule],
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  cod : string = '';
  hayError: boolean = false;
  countries  : Country[] = [];
  
  paisesSugeridos   : Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor( private paisService: PaisService ) { }

  buscar( cod: string ) {

    this.cod  = cod;

    this.paisService.buscarPais( cod )
      .subscribe( (paises) => {
        console.log(paises);
        this.countries = paises;
        
      }, (err) => {
        this.hayError = true;
        this.countries  = [];
      });

  }
}
