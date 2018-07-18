import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';

@Injectable()
export class GoodsService {

  private header = new HttpHeaders({
    'x-access-token': localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : '',
    'secret': localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).secret : '',
    'Content-type': 'application/json; charset=UTF-8'
  });
  constructor(private http: HttpClient) { }

  /**
   * 获取互帮云库
   * @param {number} pageNum
   * @param {number} pageSize
   * @param condition
   * @returns {Observable<any>}
   */
  getGoods(pageNum: number, pageSize: number, condition?: any): Observable<any> {
    const uri = '/api/v1/g/getPublicGoods';
    const body = {
      'pageNum': pageNum,
      'pageSize': pageSize,
      'step': pageNum === 1 ? 'start' : '',
      'condition': condition
    };
    return this.http.post(uri, JSON.stringify(body), {headers: this.header});
  }

  /**
   * 获取个人库
   * @param {number} pageNum
   * @param {number} pageSize
   * @param condition
   * @returns {Observable<any>}
   */
  getPrivateGoods(pageNum: number, pageSize: number, condition?: any): Observable<any> {
    const uri = '/api/v1/g/getPrivateGoods';
    const body = {
      'pageNum': pageNum,
      'pageSize': pageSize,
      'step': pageNum === 1 ? 'start' : '',
      'condition': condition
    };
    return this.http.post(uri, JSON.stringify(body), {headers: this.header});
  }

  searchGoods(hubType, data) {
    const uri = `/api/v1/g/search${hubType}Goods`;
    return this.http.post(uri, JSON.stringify(data), {headers: this.header});
  }

  /**
   * 添加个人库
   * @param obj
   * @returns {Observable<any>}
   */
  addPrivateGoods(obj: any): Observable<any> {
    const uri = `/api/v1/g/privateGoods`;
    const body = {
      'goods_type': obj.goods_type,
      'goods_name': obj.goods_name,
      'goods_price': (obj.goods_price * 100),
      'duration': obj.duration ? Number(obj.duration) : 0,
      'description': obj.description,
      'img': obj.img,
      'spec': obj.spec
    };
    return this.http.post(uri, JSON.stringify(body), {headers: this.header});
  }

  /**
   * 编辑个人商品
   * @param obj
   * @returns {Observable<any>}
   */
  editPrivateGoods(obj: any): Observable<any> {
    const uri = `/api/v1/g/privateGoods/${obj.goods_id}`;
    const body = {
      'goods_type': obj.goods_type,
      'goods_name': obj.goods_name,
      'goods_price': (obj.goods_price * 100),
      'duration': obj.duration ? Number(obj.duration) : 0,
      'description': obj.description,
      'img': obj.img,
      'spec': obj.spec
    };
    return this.http.put(uri, JSON.stringify(body), { headers: this.header });
  }

  /**
   * 删除个人商品
   * @param {string} id
   * @returns {Observable<any>}
   */
  deleteGoods(id: string): Observable<any> {
    const uri = `/api/v1/g/privateGoods/${id}`;
    const body = {
      'goods_id': id
    };
    return this.http.post(uri, JSON.stringify(body), {headers: this.header});
  }

  /**
   * 提交审核
   * @param {string} id
   * @returns {Observable<any>}
   */
  review(id: string): Observable<any> {
    const uri = 'api/v1/g/goods/commit';
    const body = {
      'goods_id': id
    };
    return this.http.post(uri, JSON.stringify(body), {headers: this.header});
  }

  /**
   * 同步商品到个人库
   * @param {string} id
   * @param {number} goods_price
   * @returns {Observable<any>}
   */
  putGoods(id: string, goods_price: number): Observable<any> {
    const uri = `/api/v1/g/publicGoods/${id}`;
    const body = {
      'goods_price': goods_price
    };
    return this.http.post(uri, JSON.stringify(body), {headers: this.header});
  }

  /**
   * 获取个人图片库，get方法，利用httpparams设置后面的拼接参数
   * @param {number} pageNum
   * @param {number} pageSize
   * @returns {Observable<any>}
   */
  getImg(pageNum: number, pageSize: number): Observable<any> {
    const uri = '/api/v1/g/media';
    const params = new HttpParams()
      .set('pageSize', `${pageSize}`)
      .set('pageNum', `${pageNum}`)
      .set('step', 'start');
    return this.http.get(uri, {params, headers: this.header});
  }

  /**
   * 检测个人照片
   * @param {string} imgName
   * @returns {Observable<any>}
   */
  checkImg(imgName: string): Observable<any> {
    const uri = '/api/v1/g/imgIsUsed';
    const body = {
      'imgName': imgName
    };
    return this.http.post(uri, JSON.stringify(body), {headers: this.header});
  }

  /**
   * 删除个人照片
   * @param {string} img_name
   * @returns {Observable<any>}
   */
  deleteImg(img_name: string): Observable<any> {
    const uri = `/api/v1/g/media/${img_name}`;
    return this.http.delete(uri, {headers: this.header});
  }
}
