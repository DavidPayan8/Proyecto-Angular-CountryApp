# PR5. Países del mundo
Se trata de desarrollar una SPA (Single Page Application) que muestre información sobre países del mundo. Usaremos enrutamiento para mostrar sólo las partes de la aplicación que estén usándose por parte del usuario y lazy loading para cargar sólo aquellos componentes activos.

## Indicaciones:

### Inicio del proyecto
- Iniciamos un nuevo proyecto Angular de la manera habitual. Llamaremos al proyecto `countryApp`.
- Añadimos Bootstrap a través de su CDN para tener estilos globales en toda la aplicación.
- Creamos dos carpetas: `countries` y `shared`. Dentro de `shared`, creamos dos carpetas más: `component` y `pages`.
- Generamos tres componentes dentro de `pages`: `home-page`, `about-page` y `contact-page`.

### Enrutamiento
- Configuramos el enrutamiento para que las direcciones URL principales apunten a los componentes correspondientes, se puede poner a gusto de cada uno.
- Usamos `routerLink` para los enlaces de la barra lateral.

### Barra lateral
- Creamos el componente `sidebar` con enlaces a las páginas de inicio y acerca de.
- Configuramos los enlaces para que apunten a los componentes correspondientes.
```html
<div class="sidebar">
    <h2>Menú</h2>
    <ul class="list-unlistayed">
        <li class="list-group-item"><a href="" [routerLink]="['/home']">Inicio</a></li>
        <li class="list-group-item"><a href="" [routerLink]="['/about']">Acerca de</a></li>
        <li class="list-group-item"><a href="" [routerLink]="['/contact']">Contacto</a></li>
        <li class="list-group-item"><a href="" [routerLink]="['/pais']">Por Pais</a></li>
        <li class="list-group-item"><a href="" [routerLink]="['/capital']"> Por Capital</a></li>
        <li class="list-group-item"><a href="" [routerLink]="['/region/']">Por Region</a></li>
    </ul>
  </div>
```

### Nuevos componentes en `countries`
- Creamos nuevas subcarpetas dentro de `countries`: `components`, `interfaces`, `pages` y `services`.
- Generamos nuevos componentes dentro de `pages`: `byCapitalPage`, `byCountryPage`, `byRegionPage` y `countryPage`.
- Creamos un componente para recibir la búsqueda de países.

### Backend y servicio de conexión
- Conectamos con una API-Rest para obtener información sobre países.
- Configuramos un servicio para la conexión con la API, este estara importado en los lugares donde necesitemos de él.
```typescript
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

/*   get httpParams () {
    return new HttpParams().set( 'fields', 'name.common,capital,cca3,flags.png,flags.svg,population' );
  } */

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    
    return this.http.get<Country[]>( url );
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

    return this.http.get<Country[]>( url )
            .pipe(
              tap( console.log )
            )
  }

}
```

### Resultados por pantalla. Componente `country-table`
- Mostramos los resultados de búsqueda en una tabla.
- Creamos el componente `country-table` para presentar la lista de resultados.
- Conectamos el componente `country-table` con el componente `byCapitalPage` y `byRegionPage`.

### Vista detallada de la información. Paso de parámetros por URL
- Implementamos el paso de parámetros por URL para mostrar detalles de cada país.
- Diseñamos la plantilla del componente de detalle.
```typescript
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-country-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './country-input.component.html',
  styleUrl: './country-input.component.css'
})
export class CountryInputComponent implements OnInit{
  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  termino: any = '';

  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe( valor => {
        this.onDebounce.emit( valor );
      });
  }

  buscar() {
    this.onEnter.emit( this.termino );
  }
```
