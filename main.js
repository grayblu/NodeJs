var http = require('http');
var fs = require('fs');
var url = require('url');

// 동적 웹 페이지 구성
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;

    /*  만약 url이 root라면 title값을 변경하고
        브라우저의 타이틀, 본문의 제목을 title값으로 출력되게 함.
        이렇게 함으로써 어떤 요청에 맞도록 값을 변경할 수 있으며
        동적 페이지 구축 가능.
        또한 <a> 태그의 링크 클릭 시 해당 url요청을 받고
        query string의 각 id를 타이틀로 지정함으로써
        타이틀, 본문의 제목이 변경됨.
    */
    if(_url == '/'){
      title = 'Welcome'; 
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    var template = `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <ul>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
      </ul>
      <h2>${title}</h2>
      <p><a href="https://www.w3.org/TR/html5/" target="_blank" title="html5 speicification">Hypertext Markup Language (HTML)</a> is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications.Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
      <img src="coding.jpg" width="100%">
      </p><p style="margin-top:45px;">HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.
      </p>
    </body>
    </html>
    `;
    response.end(template);
 
});
app.listen(3000);


// var url = require('url');
// url 모듈을 가져옴 즉, node에 포함된 많은 모듈 중 url에 대한 모듈 선택
// 사용자에게 전송할 데이터를 생성 nodeJS의 특징
// response.end('hyunho:' + url)

// response.writeHead(404);    // 요청페이지가 정상적이지 않을 경우
// response.end('Not found');  // 해당 문구를 페이지에 출력
