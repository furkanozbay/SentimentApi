
var sentiment = require('sentiment-turkish');
 
var r1 = sentiment('beyler bence güzel telefon alınabilir');
console.dir(r1);
 
var r2 = sentiment('arkadaşlar iyi ki almışım diyorum');
console.dir(r2); 
