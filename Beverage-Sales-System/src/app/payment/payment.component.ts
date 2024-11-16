import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  amount: number = 0;
  currentAmount: number = 0;

  constructor(private apiService: ApiService) {
    this.getCurrentAmount();
  }

  insert() {
    this.apiService.insertAmount(this.amount).subscribe((response: any) => {
      this.currentAmount = response.currentAmount;
      this.amount = 0;
    });
  }

  getCurrentAmount() {
    this.apiService.getCurrentAmount().subscribe((response: any) => {
      this.currentAmount = response.currentAmount;
    });
  }
}