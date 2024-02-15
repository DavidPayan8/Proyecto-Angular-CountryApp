import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/country';
import { CountryTablaComponent } from '../../component/country-tabla/country-tabla.component';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [CountryTablaComponent,CommonModule,SearchBoxComponent],
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
