import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GoodsService {

  private header = new HttpHeaders({
    'x-access-token': localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : '',
    'secret': localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).secret : '',
    'Content-type': 'application/json; charset=UTF-8'
  });
  constructor(private http: HttpClient) { }

  /**
   * 商家用户获取所有loading页配置
   * @returns {Observable<any>}
   */
  getLoadingCfg(): Observable<any> {
    const uri = 'api/v1/shapi/ChannelApi/getLoadingCfg';
    return this.http.post(uri, null, {headers: this.header});
  }

  /**
   * 商家用户下修改loading页配置
   * @param loading
   * @returns {Observable<any>}
   */
  setLoadingCfg(loading): Observable<any> {
    const uri = '/api/v1/shapi/ChannelApi/setLoadingCfg';
    const body = { loading };
    return this.http.post(uri, JSON.stringify(body), {headers: this.header});
  }
}

