const http = require('http');
const url = require('url');

http.createServer(function (req, res){

    res.writeHead(200,{'Content-Type':'text/html'});

    // aceesing query string
    // const query = url.parse(req.url,true).query;
    const query = url.parse("http://localhost:4000/default.html?name='Entri'&Category='Mern",true).query;
    console.log(query);
    console.log(query.host);
    console.log(query.pathname);
    console.log(query.search);
    //qurystring
    // console.log(query.id);
    res.end("Welcome ")

}).listen(4000);
//                     after / are ?id=20 is called query string
//http://localhost:4000/?id=20
//output = {id :20}