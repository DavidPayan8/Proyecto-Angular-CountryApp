import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/country';
import { CountryTablaComponent } from '../../component/country-tabla/country-tabla.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [CountryTablaComponent,CommonModule],
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  regiones: string[] = ['Europe', 'Americas', 'Asia', 'Africa', 'Oceania'];
  regionActiva: string = '';
  countries: Country[] = [];
  
  constructor( private paisService: PaisService ) { }

  activarRegion( region: string ) {

    if ( region === this.regionActiva ) { return; }

    this.regionActiva = region;
    this.countries = [];

    this.paisService.buscarRegion( region )
      .subscribe( paises => this.countries = paises );
  }
}
