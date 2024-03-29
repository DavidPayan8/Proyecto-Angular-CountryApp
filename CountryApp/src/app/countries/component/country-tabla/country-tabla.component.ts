import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-tabla',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './country-tabla.component.html',
  styleUrl: './country-tabla.component.css'
})
export class CountryTablaComponent implements OnInit{
  @Input() countries: Country[] =[];

  constructor() { }

  ngOnInit(): void {
  }
}
