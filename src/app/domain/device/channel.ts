export interface Channel {
  'userid': string;
  'username': string;
  'sailuserid': string;
  'sailusername': string;
  'mcode': string;
  'sn': string;
  'channel': string;
  'channel_sn': number;
  'title': string;
  'price': number;
  'goods_id': string;
  'maxcap': number;
  'quantity': number;
  'channel_status': number;
  'isonline': number;
  'channel_update_time': string;
  'goods_type': number;
  'goods_name': string;
  'duration': number;
  'description': string;
  'img': string;
  'spec': string;
  'goods_status': number;
  'channelArr'?: Array<string>;
  'inputFlag'?: boolean;
}
