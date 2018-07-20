import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LocateDataService {

  public provinces: Array<any>;
  public citys: Array<any>;
  public areas: Array<any>;
  public cityObj: object;
  public areaObj: object;
  public dataTypeArr = ['provinces', 'citys', 'areas', 'cityObj', 'areaObj'];
  public areaList: Array<any>;
  public data: Array<any>;

  constructor(private http: HttpClient) {
    this.dataTypeArr.forEach( (type, index) => {
      this.getLocateData(type).subscribe( res => {
        this[type] = res;
        if (this.areaObj && this.areas && this.provinces && this.cityObj && this.citys) {
          this.locateData();
        }
      });
    });
  }

  public getLocateData(type: string): Observable<any> {
    return this.http.get(`assets/location/${type}.json`)
      .map((res: any) => res);
  }

  public getAreaArr(arr) {
    if (!arr[0]) {
      return [];
    }
    let res = [];
    if (arr[0] === arr[1]) {
      res = [this.getProvinces(arr[0]), this.getArea(arr[2])];
      return res;
    } else {
      res = [this.getProvinces(arr[0]), this.getCity(arr[1]), this.getArea(arr[2])];
      return res;
    }
  }

  public locateData(): any {
    const areaList = [];
    for (const key in this.provinces) {
      if (1) {
        const pcc = this.provinces[key];
        const cityList = this.citys[key];
        if (cityList.length) {
          cityList.forEach( city => {
            const areaArr = this.areas[city.value];
            if (areaArr.length) {
              areaArr.forEach( area => {
                area.isLeaf = true;
              });
              city.children = areaArr;
            } else {
              city.isLeaf = true;
            }
          });
          pcc.children = cityList;
        } else {
          if (this.areas[key]) {
            const areaArr = this.areas[key];
            areaArr.forEach( area => {
              area.isLeaf = true;
            });
            pcc.children = areaArr;
          } else {
            pcc.isLeaf = true;
          }
        }
        areaList.push(pcc);
      }
    }
    this.areaList = areaList;
  }

  public getProvinces(num: string): any {
    return this.provinces[num];
  }

  public getCity(num: string): any {
    return this.areaObj[num];
  }

  public getArea(num: string): any {
    return this.areaObj[num];
  }
}
