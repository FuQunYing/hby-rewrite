import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DeviceService {
  private header = new HttpHeaders({
    'x-access-token': localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : '',
    'secret': localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).secret : '',
    'Content-type': 'application/json; charset=UTF-8'
  });
  constructor(private http: HttpClient) { }

  /**
   * 获取设备信息
   * @param {number} pageNum
   * @param {number} pageSize
   * @param condition
   * @returns {Observable<any>}
   */
  getDevice(pageNum: number, pageSize: number, condition?: any): Observable<any> {
    const uri = '/api/v1/m/device';
    const body = {
      'pageNum': pageNum,
      'pageSize': pageSize,
      'step': pageNum === 1 ? 'start' : '',
      'condition': condition
    };
    return this.http.post(uri, JSON.stringify(body), {headers: this.header});
  }

  /**
   * 获取设备货道信息
   * @param {string} mcode
   * @param {string} sn
   * @param {number} pageNum
   * @param {number} pageSize
   * @returns {Observable<any>}
   */
  getChannel(mcode: string, sn: string, pageNum: number, pageSize: number): Observable<any> {
    const uri = '/api/v1/m/devChannel';
    const body = {
      'mcode': mcode,
      'sn': sn,
      'pageNum': pageNum,
      'pageSize': pageSize
    };
    return this.http.post(uri, JSON.stringify(body), {headers: this.header});
  }

  /**
   * 编辑货道信息
   * @param body
   * @returns {Observable<any>}
   */
  editChannel(body: any): Observable<any> {
    const uri = '/api/v1/m/setChannelInfo';
    return this.http.post(uri, JSON.stringify(body), {headers: this.header});
  }

  /**
   * 设置货道离线
   * @param body
   * @returns {Observable<any>}
   */
  offChannel(body: any): Observable<any> {
    const uri = '/api/v1/m/channelLine';
    return this.http.post(uri, JSON.stringify(body), {headers: this.header});
  }

  /**
   * 一键上线/停售
   * @param {string} mcode
   * @param {string} sn
   * @param {string} type
   * @returns {Observable<any>}
   */
  allOnline(mcode: string, sn: string, type: string): Observable<any> {
    const uri = '/api/v1/m/setMoreOnline';
    const body = {
      'mcode': mcode,
      'sn': sn,
      'type': type
    };
    return this.http.post(uri, JSON.stringify(body), {headers: this.header});
  }

  /**
   * 一键估清/补货
   * @param {string} mcode
   * @param {string} sn
   * @param {number} type
   * @returns {Observable<any>}
   */
  allGoods(mcode: string, sn: string, type: number): Observable<any> {
    const uri = '/api/v1/m/setMoreGoodsStock';
    const body = {
      'mcode': mcode,
      'sn': sn,
      'type': type,
    };
    return this.http.post(uri, JSON.stringify(body), {headers: this.header});
  }

  /**
   * 批量编辑货道信息
   * @param body
   * @returns {Observable<any>}
   */
  editAllChannel(body: any): Observable<any> {
    const uri = '/api/v1/m/setMoreChannel';
    return this.http.post(uri, JSON.stringify(body), {headers: this.header});
  }

  /**
   * 移除货道商品
   * @param {string} mcode
   * @param {string} channel
   * @returns {Observable<any>}
   */
  pullOffGoods(mcode: string, channel: string): Observable<any> {
    const uri = '/api/v1/m/pull/Off';
    const body = {
      'mcode': mcode,
      'channel': channel
    };
    return this.http.post(uri, JSON.stringify(body), {headers: this.header});
  }

  /**
   * 批量移除货道商品
   * @param {string} mcode
   * @param {string} sn
   * @returns {Observable<any>}
   */
  pullOffAllGoods(mcode: string, sn: string): Observable<any> {
    const uri = '/api/v1/m/takeDownMoreGoods';
    const body = {
      'mcode': mcode,
      'sn': sn
    };
    return this.http.post(uri, JSON.stringify(body), {headers: this.header});
  }

  /**
   * 修改设备信息
   * @param body
   * @returns {Observable<any>}
   */
  editDeviceInfo(body: any): Observable<any> {
    const uri = '/api/v1/shapi/ChannelApi/editDeviceInfo';
    return this.http.post(uri, JSON.stringify(body), {headers: this.header});
  }

  /**
   * 刷新设备状态
   * @returns {Observable<any>}
   */
  getDeviceStatus(): Observable<any> {
    const uri = '/api/v1/m/updateDevStatus';
    return this.http.post(uri, JSON.stringify({}), {headers: this.header});
  }

  /**
   * 编辑设备配置信息
   * @param body
   * @returns {Observable<any>}
   */
  setMcDeviceCfg(body: any): Observable<any> {
    const uri = '/api/v1/shapi/ChannelApi/setMcDeviceCfg';
    return this.http.post(uri, JSON.stringify(body), {headers: this.header});
  }

  /**
   * 获取设备配置信息
   * @param body
   * @returns {Observable<any>}
   */
  getDeviceInfo(body: any): Observable<any> {
    const uri = '/api/v1/shapi/ChannelApi/getMcDeviceCfg';
    return this.http.post(uri, JSON.stringify(body), {headers: this.header});
  }
}
