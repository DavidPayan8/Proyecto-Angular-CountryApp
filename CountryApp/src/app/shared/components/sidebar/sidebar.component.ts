import { Component, OnInit } from '@angular/core';
import { RouterLink,  } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class SidebarComponent implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}
