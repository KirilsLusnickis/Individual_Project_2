import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  standalone: true,
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  amount: number = 0;
  currentAmount: number = 0;

  constructor() {
    this.getCurrentAmount();
  }

  insert() {
    
  }

  getCurrentAmount() {
  }   
}