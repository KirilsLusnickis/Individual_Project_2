import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DrinkListComponent } from './drink-list/drink-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DrinkListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Beverage-Sales-System';
}
