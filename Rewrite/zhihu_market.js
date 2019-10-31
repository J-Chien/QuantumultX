/**
 * @supported 57CA9AC5 F585B442
 */

let body = $response.body 
body=JSON.parse(body)
body['sub_webs'].splice(0,1)
body['sub_webs'].splice(1,1)
body=JSON.stringify(body)
$done({body})