import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent {
  router!: Router;
  country!: Country;
  constructor( 
    private activatedRoute: ActivatedRoute,
    private countryService: PaisService
    ) { }
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
    switchMap( ({ id }) => this.countryService.getPaisPorAlpha( id )),
      )
        .subscribe( country => {
          if ( !country ) return this.router.navigateByUrl('');
          return this.country = country;
        });
  }
}
