/**
 * @supported 57CA9AC56FD2 F585B442F879
 */

let body = $response.body 
body=JSON.parse(body)
body['sub_webs'].splice(0,1)
body['sub_webs'].splice(1,1)
body=JSON.stringify(body)
$done({body})
