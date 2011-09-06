var http = require('http');
var _ = require('./underscore');
var port = process.env.PORT || 3000;

var FullResponse = function(req) {

  var blanks = "                                   ";
  var fields = {"url": req.url, "method": req.method, "httpVersion": req.httpVersion, "headers": req.headers, "data": ""};  
    
  var format = function(key, value, indent) {
    if (_.isString(value))
      return blanks.substring(0, indent++ * 2) + key+": "+value+"\n"; 
    
    return blanks.substring(0, indent++ * 2) + key+": \n" + _.reduce(_.keys(value), function(sum, it) {
                          return sum + format(it, value[it], indent);
                        }, "");
  }        
  
  this.printOut = function() {        
    return format("response", fields, 0);
  }
  
}

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var response = new FullResponse(req);  
  req.on("data", function(it) {
    fields["data"] += it.toString("utf8");
  });  
  req.on("end", function() {
    res.end(response.printOut());  
  });  
}).listen(port);
console.log('Server running at port '+port);



