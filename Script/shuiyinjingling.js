let obj = JSON.parse($response.body);

  obj.data［"is_vip"］= 1,
  obj.data［"vip_end_time"］= "2099-05-05"

$done({body: JSON.stringify(obj)});
