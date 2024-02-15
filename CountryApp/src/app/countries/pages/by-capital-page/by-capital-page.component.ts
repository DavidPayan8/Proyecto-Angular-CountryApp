import { Component} from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountryTablaComponent } from '../../component/country-tabla/country-tabla.component';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/country';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [SearchBoxComponent , CountryTablaComponent,CommonModule],
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  cod : string = '';
  countries : Country[] = [];

  constructor( private paisService: PaisService ) { }

  buscar( cod: string ) {
    this.cod  = cod;

    this.paisService.buscarCapital( cod )
      .subscribe( (countries) => {
        this.countries = countries;
      }, (err) => {
        this.countries   = [];
      });

  }

}
