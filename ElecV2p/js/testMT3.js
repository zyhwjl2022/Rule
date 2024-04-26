//  mt pre_order 不返回上一页

// console.clear();
let body = $response.body
if (body.includes("30003")) {
    //场次不可定
    var obj = JSON.parse(body);
    delete obj.code
    obj.status = 0
    body = JSON.stringify(obj)
}
console.log(body);
$done(body)