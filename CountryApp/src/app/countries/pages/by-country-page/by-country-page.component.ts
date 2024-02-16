import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { PaisService } from '../../services/pais.service';
import { CountryTablaComponent } from '../../component/country-tabla/country-tabla.component';
import { CommonModule } from '@angular/common';
import { CountryInputComponent } from '../../component/country-input/country-input.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [CountryTablaComponent,CommonModule,CountryInputComponent,RouterLink],
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
    
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.cod  = cod;

    this.paisService.buscarPais( cod )
      .subscribe( (paises) => {
        console.log(paises);
        this.countries = paises;
        
      }, (err) => {
        this.hayError = true;
        this.countries   = [];
      });

  }

  sugerencias( termino: string ) {
    this.hayError = false;
    this.cod = termino;
    this.mostrarSugerencias = true;
    
    this.paisService.buscarPais( termino )
      .subscribe( 
        paises => this.paisesSugeridos = paises.splice(0,5),
        (err) => this.paisesSugeridos = []
      );

  }

  buscarSugerido( termino: string ) {
    this.buscar( termino );
  }
}
