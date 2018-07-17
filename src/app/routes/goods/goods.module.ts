import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsComponent } from './goods/goods.component';
import { GoodsInsaleComponent } from './goods-insale/goods-insale.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GoodsComponent, GoodsInsaleComponent]
})
export class GoodsModule { }
