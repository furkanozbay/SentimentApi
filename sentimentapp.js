var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var sentiment = require('sentiment-turkish');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(1923, function(){
	console.log('Started to listening port 1923...');
});

app.post('/api/analyze', function(request, response){
	var sentence = request.body.sentence;
	console.log('Sentence: ', sentence);
	var sentimentResult = sentiment(sentence);
	console.log('SentimentResult: ', sentimentResult);
	response.send(sentimentResult);
});
