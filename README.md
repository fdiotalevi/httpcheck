Http Check

Simple web application (written in node.js) to check all the details about incoming HTTP request.

To use it, clone the repository and just type

> node app.js

It will start a server on port 3000. Just open the browser at http://localhost:3000 and you will see all your HTTP request details.

Example

    url: /
    method: GET
    httpVersion: 1.1
    headers: 
        host: localhost:3000
        connection: keep-alive
        user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_0) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.215 Safari/535.1
        accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
        accept-encoding: gzip,deflate,sdch
        accept-language: en-US,en;q=0.8
        accept-charset: ISO-8859-1,utf-8;q=0.7,*;q=0.3

    data: