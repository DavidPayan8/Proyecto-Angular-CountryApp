import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [],
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  regiones: string[] = ['europe', 'americas', 'asia', 'africa', 'oceania'];
  regionActiva: string = '';
  countries: Country[] = [];

  
  constructor( private paisService: PaisService ) { }

  activarRegion( region: string ) {

    if ( region === this.regionActiva ) { return; }

    this.regionActiva = region;
    this.countries = [];

    this.paisService.buscarRegion( region )
      .subscribe( countries => this.countries = countries );
  }
}
