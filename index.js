const request = require("request");

request.get("https://canihazip.com/s", function(error, response, body) {
    console.log(body);
});
