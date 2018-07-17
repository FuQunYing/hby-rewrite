import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { SettingService } from './setting.service';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient,
              private router: Router,
              private _message: NzMessageService,
              private setting: SettingService) { }

  private header = new HttpHeaders({
    'x-access-token': localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : '',
    'secret': localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).secret : '',
    'Content-Type': 'application/json; charset=UTF-8'
  });

  /**
   * 登录，保存username，和user
   * @param {string} user
   * @param {string} pwd
   * @returns {Observable<any>}
   */
  login(user: string, pwd: string): Observable<any> {
    const loading = this._message.loading('正在执行中', {nzDuration: 0}).messageId;
    const uri = '/p/login';
    const body = {
      'username': user,
      'password': pwd
    };
    const header = {'Content-Type': 'application/json; charset=UTF-8'};
    return this.http.post(uri, JSON.stringify(body), {headers: header})
      .map((res: any) => {
        this._message.remove(loading);
        if (res.rcode === 0) {
          localStorage.setItem('username', user);
          localStorage.setItem('user', JSON.stringify(res.result));
          this.setting.userType = res.result.user_type;
          this.header = new HttpHeaders({
            'z-access-token': res.result.token,
            'secret': res.result.secret,
            'Content-Type': 'application/json;charset=UTF-8'
          });
          return true;
        } else {
          return false;
        }
      });
  }

  /**
   * 退出，移除localStorage内容
   */
  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('username');
    localStorage.clearr();
    this._message.create('loading', '正在退出登录');
    setTimeout( () => {
      this.router.navigate(['login']);
    }, 1000);
  }
}
