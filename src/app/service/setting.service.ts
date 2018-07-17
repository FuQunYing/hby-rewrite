import { Injectable } from '@angular/core';

export interface Layout {
  fixed: boolean; // 是否固定顶部菜单
  collapsed: boolean; // 是否折叠左侧菜单
}
@Injectable()
export class SettingService {
  public layout: Layout = {
    collapsed: false,
    fixed: true
  };

  public language;

  public userType: string = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).user_type : '';

  setLayout(name: string, value: any) {
    if (typeof this.layout[name] !== 'undefined') {
      this.layout[name] = value;
    }
  }
}
