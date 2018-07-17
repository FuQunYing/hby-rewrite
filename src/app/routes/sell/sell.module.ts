import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckRefundComponent } from './check-refund/check-refund.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { RefundComponent } from './refund/refund.component';
import { SellComponent } from './sell/sell.component';
import { SellgoodComponent } from './sellgood/sellgood.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CheckRefundComponent, OrderComponent, PaymentComponent, RefundComponent, SellComponent, SellgoodComponent]
})
export class SellModule { }
