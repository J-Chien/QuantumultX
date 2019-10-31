/**
 * @supported 57CA9AC5 F585B442
 */

let body = $response.body
body=JSON.parse(body)
delete body['ad_info']
body=JSON.stringify(body)
$done({body})