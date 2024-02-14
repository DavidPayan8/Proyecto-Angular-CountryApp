import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  @Output() search = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(event: any) {
    this.search.emit(event.target.value);
  }
}
