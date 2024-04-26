// mt commit 不返回上一页

// console.clear();
let body = $response.body
console.log("============原始数据===========")
console.log(body)

if (body.includes("30003")) {
  //场次不可定
  var obj = JSON.parse(body);
  delete obj.data.errorCode
  obj.message='该场次不可订，请选择其他场次 zyhwjl'
  body = JSON.stringify(obj)
}

console.log("============替换数据===========")
console.log(body)
$done(body)