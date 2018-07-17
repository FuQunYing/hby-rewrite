import { NgModule, ModuleWithProviders } from '@angular/core';
import {CookieService} from './cookie.service';
import {AuthService} from './auth.service';
import {AuthGuardService} from './auth-guard.service';
import {MemberService} from './member.service';
import {DeviceService} from './device.service';
import {BankService} from './bank.service';
import {SettingService} from './setting.service';
import {GoodsService} from './goods.service';
import {DashboardService} from './dashboard.service';
import {SellService} from './sell.service';
import {UserService} from './user.service';
import {LoadingService} from './loading.service';
import {LocationService} from './location.service';
import {LocateDataService} from './locate-data.service';
import {ActivityService} from './activity.service';

export {
  CookieService,
  AuthService,
  AuthGuardService,
  MemberService,
  DeviceService,
  BankService,
  SettingService,
  GoodsService,
  DashboardService,
  SellService,
  UserService,
  LoadingService,
  LocationService,
  LocateDataService,
  ActivityService
};

@NgModule()
export class ServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServiceModule,
      providers: [
        CookieService,
        AuthService,
        AuthGuardService,
        MemberService,
        DeviceService,
        BankService,
        SettingService,
        GoodsService,
        DashboardService,
        SellService,
        UserService,
        LoadingService,
        LocationService,
        LocateDataService,
        ActivityService
      ]
    };
  }
}
