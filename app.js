var http = require('http');
var _ = require('./underscore');
var port = process.env.PORT || 3000;

var FullResponse = function(req) {
  var url = req.url;
  var httpVersion = req.httpVersion;
  var method = req.method;
  var headers = req.headers;
  var data = "";
  
  var format = function(key, value) {
    return key+": "+value+"\n";
  }
  
  this.print = function() {
    var output = format("url", url);
    output += format("method", method);
    output += format("httpVersion", httpVersion);
    output += format("headers", _.reduce(_.keys(headers), function(value, it) {
                        return value + format("   "+it, headers[it]);
                      }, "\n"));
    output += format("data", data);
    return output;
  }
  
  this.addData = function(it) {
    data += it.toString("utf8");
  }
}

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var response = new FullResponse(req);  
  req.on("data", function(it) {
    response.addData(it);
  });  
  req.on("end", function() {
    res.end(response.print());  
  });  
}).listen(port);
console.log('Server running at port '+port);



