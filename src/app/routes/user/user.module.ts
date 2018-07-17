import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { EditAccountComponent } from './account/edit-account/edit-account.component';
import { DownloadComponent } from './download/download.component';
import { RoleComponent } from './role/role.component';
import { EditRolComponent } from './role/edit-rol/edit-rol.component';
import { EditRoleComponent } from './role/edit-role/edit-role.component';
import { WxnoticeComponent } from './wxnotice/wxnotice.component';
import { WxbindComponent } from './wxnotice/wxbind/wxbind.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AccountComponent, EditAccountComponent, DownloadComponent, RoleComponent, EditRolComponent, EditRoleComponent, WxnoticeComponent, WxbindComponent]
})
export class UserModule { }
