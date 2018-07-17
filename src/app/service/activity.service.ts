import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ActivityService {

  constructor(private http: HttpClient) { }
  private header = new HttpHeaders({
    'x-access-token': localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : '',
    'secret': localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).secret : '',
    'Content-Type': 'application/json; charset=UTF-8'
  });

  /**
   * 获取商家用户下所有充值满赠营销活动
   * @param {object} body
   * @returns {Observable<any>}
   */
  getActList(body: object): Observable<any> {
    const uri = '/api/v1/shapi/ChannelApi/getDepositList';
    return this.http.post(uri, JSON.stringify(body), {headers: this.header});
  }

  /**
   * 商家用户下编辑充值满赠金额营销活动
   * @param {object} body
   * @returns {Observable<any>}
   */
  editAct(body: object): Observable<any> {
    const uri = '/api/v1/shapi/ChannelApi/editDepositList';
    return this.http.post(uri, JSON.stringify(body), {headers: this.header});
  }

  /**
   * 商家名下获取设备列表
   * @param {object} body
   * @returns {Observable<any>}
   */
  getDeviceList(body: object): Observable<any> {
    const uri = '/api/v1/shapi/ChannelApi/getDeviceList';
    return this.http.post(uri, JSON.stringify(body), {headers: this.header});
  }

  /**
   * 商家名下修改活动状态
   * @param {object} body
   * @returns {Observable<any>}
   */
  changeActStatus(body: object): Observable<any> {
    const uri = '/api/v1/shapi/ChannelApi/setDepositStatus';
    return this.http.post(uri, JSON.stringify(body), {headers: this.header});
  }
}
