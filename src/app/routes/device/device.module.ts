import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceComponent } from './device/device.component';
import { EditSettingComponent } from './device/edit-setting/edit-setting.component';
import { SetDeviceModalComponent } from './device/set-device-modal/set-device-modal.component';
import { LocationComponent } from './location/location.component';
import { GroupCardComponent } from './location/card/group-card/group-card.component';
import { GroupModalComponent } from './location/card/modal/group-modal/group-modal.component';
import { PositionModalComponent } from './location/card/modal/position-modal/position-modal.component';
import { StoreModalComponent } from './location/card/modal/store-modal/store-modal.component';
import { PositionCardComponent } from './location/card/position-card/position-card.component';
import { StoreCardComponent } from './location/card/store-card/store-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DeviceComponent, EditSettingComponent, SetDeviceModalComponent, LocationComponent, GroupCardComponent, GroupModalComponent, PositionModalComponent, StoreModalComponent, PositionCardComponent, StoreCardComponent]
})
export class DeviceModule { }
