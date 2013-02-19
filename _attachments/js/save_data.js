//Save to bookmark: javascript:void((function(d){var%20e=d.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('charset','UTF-8');e.setAttribute('src','//faust45.cloudant.com/data/_design/data/js/save_data.js?r='+Math.floor(Math.random()*99999999));d.body.appendChild(e)})(document));
sendData();

function sendData() {
    var url = "http://faust45.cloudant.com/data";

    var quote = document.getSelection().toString();
    console.log(quote);

    yqlQuery = encodeURIComponent('use "http://faust45.cloudant.com/data/_design/data/tables/demo.xml"; select * from demo where url="' + url + '" and postdata="' + quote + '"');
    yqlURL = 'http://query.yahooapis.com/v1/public/yql?q=' + yqlQuery + '&format=json'

    var request = new XMLHttpRequest();
    request.open("GET", yqlURL);
    request.send();
}
