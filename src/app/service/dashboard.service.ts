import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DashboardService {

  private header = new HttpHeaders({
    'x-access-token': localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : '',
    'secret': localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).secret : '',
    'Content-Type': 'application/json; charset = UTF-8'
  });
  constructor(private http: HttpClient) { }

  /**
   * 获取收益分析
   * @param {string} type
   * @returns {Observable<any>}
   */
  getDaily(type: string): Observable<any> {
    const uri = `/api/v1/s/${type}/total`;
    const body = {};
    return this.http.post(uri, JSON.stringify(body), {headers: this.header});
  }

  getDailyAll(): Observable<any> {
    const uri = '/api/v1/s/sale/index';
    const body = {};
    return this.http.post(uri, JSON.stringify(body), {headers: this.header});
  }

  // 日销售汇总
  getDailyReport(): Observable<any> {
    const uri = '/api/v1/s/hours';
    const body = {};
    return this.http.post(uri, JSON.stringify(body), {headers: this.header});
  }

  // 月销售汇总 - 机器
  getMonDevice(): Observable<any> {
    const uri = '/api/v1/s/device';
    const body = {};
    return this.http.post(uri, JSON.stringify(body), {headers: this.header});
  }

  // 月销售汇总 - 商品
  getMonGoods(): Observable<any> {
    const uri = '/api/v1/s/goods';
    const body = {};
    return this.http.post(uri, JSON.stringify(body), {headers: this.header});
  }

  // 月销售汇总
  getMonReport(): Observable<any> {
    const uri = '/api/v1/s/month';
    const body = {};
    return this.http.post(uri, JSON.stringify(body), {headers: this.header});
  }
}
