import { RouterModule, Routes } from '@angular/router';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { PaymentComponent } from './payment/payment.component';
import { ReturnComponent } from './return/return.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: DrinkListComponent },
    { path: 'payment', component: PaymentComponent },
    { path: 'return', component: ReturnComponent }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}