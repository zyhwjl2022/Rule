// mt 首页按钮控制

// console.clear();
let body = $response.body
// console.log("============原始数据===========")
// console.log(body)

// body.replaceAll('"clickShowType":0','"clickShowType":1')
var jsonData = JSON.parse(body);
var btn = jsonData.data.shelfProducts[0].shelfUnitVOs[0].dealResults[0].hotButton
delete btn.cannotClickTip
//btn.clickShowType=0
//if(btn.content=='已约满'){
//  btn.content='提前进'
//}

body = JSON.stringify(jsonData)

// console.log("============替换数据===========")
// console.log(body)
$done(body)