// mt 所有日期查询

// console.clear();
let body = $response.body
console.log(body)
body = body .replaceAll('"canSelect":false', '"canSelect":true');
body = body .replaceAll('"stock":0', '"stock":10');
body = body .replaceAll(',"status":0', ',"status":1');
body = body .replaceAll('"canNotBook":1', '"canNotBook":0');

var obj = JSON.parse(body);
delete obj.data.optionDetails.timeBasedBuyInfo
delete obj.data.optionDetails.subscribeStatus
obj.data.optionDetails.marketPriceByCent=0
obj.data.optionDetails.campaignTag=""

// console.log(JSON.stringify(obj))
$done(JSON.stringify(obj))