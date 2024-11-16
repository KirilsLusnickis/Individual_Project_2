import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DrinkListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Beverage-Sales-System';
}
