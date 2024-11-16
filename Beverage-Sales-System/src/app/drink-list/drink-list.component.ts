import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drink-list',
  standalone: true,
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.css']
})
export class DrinkListComponent implements OnInit {
  drinks: any[] = [
    {
      id: 1,
      name: 'Coca Cola',
      price: 1.5,
      quantity: 10
    },
    {
      id: 2,
      name: 'Pepsi',
      price: 1.5,
      quantity: 10
    },
    {
      id: 3,
      name: 'Fanta',
      price: 1.5,
      quantity: 10
    }
  ];

  constructor() {}

  ngOnInit(): void {
    console.log('DrinkListComponent initialized');
    //  this.apiService.getDrinks().subscribe((data: any) => {
    //   this.drinks = data;
    // });
  }

  purchase(drinkId?: number) {
    
  }
}