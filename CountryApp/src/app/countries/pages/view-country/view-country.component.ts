import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/country';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-country',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-country.component.html',
  styleUrl: './view-country.component.css'
})
export class ViewCountryComponent {
  country!: Country;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.paisService.getPaisPorAlpha( id )  ),
        tap( console.log )
      )
      .subscribe( country => this.country = country );

  }
}
