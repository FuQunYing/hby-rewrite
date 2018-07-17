import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { AtivityComponent } from './ativity/ativity/ativity.component';
import { ActModalComponent } from './ativity/ativity/act-modal/act-modal.component';
import { LoadingComponent } from './ativity/loading/loading.component';
import { BankcardComponent } from './bankcard/bankcard/bankcard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Err403Component } from './page/err403/err403.component';
import { LoginComponent } from './page/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RoutesRoutingModule
  ],
  declarations: [AtivityComponent, ActModalComponent, LoadingComponent, BankcardComponent, DashboardComponent, Err403Component, LoginComponent]
})
export class RoutesModule { }
