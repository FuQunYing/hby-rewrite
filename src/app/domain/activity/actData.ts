export interface  ActData {
  id: string; // ID
  title: string; // 活动名称
  paymoney: string; // 满足条件的充值金额
  vrmoney: string; // 需要赠送的虚拟金额
  percent: string; // 每人最多参与次数
  total: string; // 活动总次数
  area: string; // 活动显示的区域ID
  store: string; // 活动限制的门店ID
  mcode: string; // 活动限制的mcode
  act_time: string; // 已经参与活动的次数
  act_money: string; // 已经参与活动充值的金额
  act_vrmoney: string; // 已经参与活动赠送的金额
  stotal: string; // 活动总次数
  vrtotal: string; // 活动累计需要充值的金额
  st: string; // 活动开始时间
  et: string; // 活动结束时间
  status: string; // 活动状态 2 4 6 是活动下线，1是活动结束 3是活动未开始 0是活动进行中 只有2 3两个状态的才能编辑
  status_info: string; // 当前活动状态
  range: string; // 活动范围说明
}
