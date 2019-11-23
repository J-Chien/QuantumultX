/**
 * @supported 57CA9AC56FD2 F585B442F879
 */

let body = $response.body
body=JSON.parse(body)
delete body['ad_info']
body=JSON.stringify(body)
$done({body})
