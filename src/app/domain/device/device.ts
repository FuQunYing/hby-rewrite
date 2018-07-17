export interface Device {
  'rcode': number;
  'msg': string;
  'result': {
    'data': [{
      'mcode': string;
      'title': string;
      'createtime': string;
      'appcode': string;
      'appidtitle': string;
      'account': string;
      'sn': string;
      'status': number
    }];
  };
}
