import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent {
  constructor(private apiService: ApiService) {}

  returnMoney() {
    this.apiService.returnMoney().subscribe((response: any) => {
      alert(`Money returned: $${response.amountReturned}`);
    });
  }
}