import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Country } from '../interfaces/country';
import { catchError, map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams () {
    return new HttpParams().set( 'fields', 'name.common,capital,cca3,flags.png,flags.svg,population' );
  }

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

  buscarCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(error => of([])) // Si hay un error se vacía el array de resultados
    );
  }

  getPaisPorAlpha( id: string ):Observable<Country | null>{

    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country[]>( url )
    .pipe(
      map( countries => countries.length > 0 ? countries[0]: null ),
      catchError( () => of(null) ) // cuidado con la importación de map en `rxjs`
    );
  }

  buscarRegion( region: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/region/${ region }`;

    return this.http.get<Country[]>( url, { params: this.httpParams } )
            .pipe(
              tap( console.log )
            )
  }

}