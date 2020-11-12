const base64url = require('base64url');
const crypto = require('crypto')

const header = {
    "alg" : "HS256" ,
    "typ" : "JWT"
}

const payload = { foo : 'bar'}

let headerEnc = base64url(JSON.stringify(header))
let payloadEnc = base64url(JSON.stringify(payload))

let content = `${headerEnc}.${payloadEnc}`
const SECRET = 'It is a key'

let signature = crypto.createHmac('sha256' , SECRET).update(content).digest('hex')
let token = `${content}.${signature}`

console.log(token);

