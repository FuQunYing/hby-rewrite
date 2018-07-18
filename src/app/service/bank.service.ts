import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class LoadingService {
  private header = new HttpHeaders({
    'x-access-token': localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : '',
    'secret': localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).secret : '',
    'Content-Type': 'application/json; charset=UTF-8'
  });
  constructor(private http: HttpClient) { }

  /**
   * 商家用户下获取收款列表
   * @param {number} pageNum
   * @param {number} pageSize
   * @returns {Observable<any>}
   */
  getUserAccount(pageNum: number, pageSize: number): Observable<any> {
    const uri = '/api/v1/shapi/ChannelApi/getAccountList';
    const body = {
      'curpage': pageNum,
      'pagesize': pageSize,
      'step': pageNum === 1 ? 'start' : ''
    };
    return this.http.post(uri, JSON.stringify(body), {headers: this.header});
  }

  /**
   * 获取退款账户列表
   * @param {number} pageNum
   * @param {number} pageSize
   * @returns {Observable<any>}
   */
  getReAccountList(pageNum: number, pageSize: number): Observable<any> {
    const uri = '/api/v1/shapi/ChannelApi/getReAccountList';
    const body = {
      /*'pageNum': pageNum,
      'pageSize': pageSize,
      'step': 'start'*/
    };
    return this.http.post(uri, JSON.stringify(body), {headers: this.header});
  }

  getBankCard(pageNum: number, pageSize: number): Observable<any> {
    const uri = '/api/v1/b/userBank';
    const body = {
      'pageNum': pageNum,
      'pageSize': pageSize,
      'step': 'start'
    };
    return this.http.post(uri, JSON.stringify(body), {headers: this.header});
  }

  getWXcard(pageNum: number, pageSize: number): Observable<any> {
    const uri = '/api/v1/b/userOpenid';
    const body = {
      'pageNum': pageNum,
      'pageSize': pageSize,
      'step': 'start'
    };
    return this.http.post(uri, JSON.stringify(body), {headers: this.header});
  }
}
