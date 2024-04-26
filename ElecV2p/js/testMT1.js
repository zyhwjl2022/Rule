// mt 具体日期查询

// console.clear();
let body = $response.body
console.log(body)
body = body .replaceAll('"canSelect":false', '"canSelect":true');
body = body .replaceAll('"stock":0,"status":0', '"stock":10,"status":1');
body = body .replaceAll('"stock":-1,"status":-1', '"stock":10,"status":1');
body = body .replaceAll('"dealStatus":3', '"dealStatus":0');
body = body .replaceAll('"isAvailable":false', '"isAvailable":true');
body = body .replaceAll('"noCanBook":true', '"noCanBook":false');

var jsonData = JSON.parse(body);
if($request.url.includes("quantity")){
  console.log("========数量查询请求========")
  delete jsonData.data.timeBasedBuyInfo;
  jsonData.data.priceStocks.forEach(function(obj) {
    delete obj.timeBasedBuyInfo;
  });
}

console.log(JSON.stringify(jsonData))
$done(JSON.stringify(jsonData))