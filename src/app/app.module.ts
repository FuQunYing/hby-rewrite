import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { ChannelComponent } from './routes/device/device/channel.component';
import { EditChannelComponent } from './routes/device/device/edit-channel.component';
import { QrcodeComponent } from './routes/device/device/qrcode.component';
import { EditGoodsComponent } from './routes/goods/goods/edit-goods.component';
import { EditImgComponent } from './routes/goods/goods/edit-img.component';
import { CheckRefundComponent } from './sell/check-refund/check-refund.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ChannelComponent,
    EditChannelComponent,
    QrcodeComponent,
    EditGoodsComponent,
    EditImgComponent,
    CheckRefundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
