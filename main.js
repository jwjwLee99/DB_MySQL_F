//main.js

var http = require('http');
var url = require('url');
//var db = require('./lib/db'); // 코드 정리
var topic = require('./lib/topic'); // 코드 정리
var author = require('./lib/author');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var myURL = new URL('http://localhost:3000' + _url);
    var queryData = myURL.searchParams.get('id');
    if(queryData){
    }else{
      queryData = undefined;
    }
    var pathname = url.parse(_url, true).pathname;// URL경로와 그 앞의 '/'로 이루어진 경로는 불러오기
    
    if(pathname === '/'){
      if(queryData === undefined){
        topic.home(request, response);
      } else {
        topic.page(request, response);
      }
    } else if(pathname === '/create'){
      topic.create(request, response);
    } else if(pathname === '/create_process'){
      topic.create_process(request, response);
    } else if(pathname === '/update'){
      topic.update(request, response);
    } else if(pathname === '/update_process'){
      topic.update_process(request, response);
    } else if(pathname === '/delete_process'){
      topic.delete_process(request, response);
    } else if(pathname === '/author'){
      author.home(request, response);
    } else if(pathname === '/author/create_process'){
      author.create_process(request, response);
    } else if(pathname === '/author/update'){
      author.update(request, response);
    } else if(pathname === '/author/update_process'){
      author.update_process(request, response);
    } else if(pathname === '/author/delete_process'){
      author.delete_process(request, response);
    } else {
      response.writeHead(404);
      response.end('Not found');
    }
});
app.listen(3000);
