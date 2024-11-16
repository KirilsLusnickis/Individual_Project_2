import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

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

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getDrinks().subscribe((data: any) => {
      this.drinks = data;
    });
  }

  purchase(drinkId: number) {
    this.apiService.purchaseDrink(drinkId).subscribe(
      (response: any) => {
        alert(response.message);
        this.ngOnInit();
      },
      (error) => {
        alert(error.error.error);
      }
    );
  }
}