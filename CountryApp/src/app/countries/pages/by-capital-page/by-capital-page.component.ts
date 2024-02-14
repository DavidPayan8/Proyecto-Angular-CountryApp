import { Component, Input } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [SearchBoxComponent],
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  @Input() placeholder!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(text: string) {
    console.log(text);
  }
}
