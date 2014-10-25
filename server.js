var express = require('express');
var bodyParser = require('body-parser');
var myData = require('./server-assets/myData.js');

var app = express();

console.log('server running...');

app.use(bodyParser.json());


// Ryan K Shaw's AWESOME example
// ['Me', 'FamilyMembers', 'Friends', "Activities"].forEach(function(endpoint){
// 	app.get('/' + endpoint.toLowerCase(), function (req, res) {
// 		res.send(myData['get'+ endpoint]()\);
// 	});
// });

function ensureValidAttributes(obj, requiredKeys) {
	var validatedObject = {};
	for (var i = 0; i < requiredKeys.length; i++) {
		var key = requiredKeys[i]
		if (!obj[key]) {
			throw new Error('missing required key: ' + key);
		}
		validatedObject[key] = obj[key]
	}
	// return requiredKeys.reduce(function(memo, key) {
	// 	if (!obj[key] throw new Error('missing required key: ' + key);
	// 		memo[key] = obj[key];
	// 		return memo;)
	// }, {});

	return validatedObject;
}

app.get('/', function (req, res, next) {
	console.log('GET empty request ...');
	res.status(200).json({val: "Hello World"});
})

var FAMILY_ATTRIBUTES = ['name', 'relationship'];

app.get('/family', function (req, res, next) {
	console.log('GET family request ...');
	res.status(200).json(myData.getFamily());
})

app.post('/family', function (req, res, next) {
	console.log('POST family request ...')
	console.log(req.body)
	var newFamily = ensureValidAttributes(req.body, FAMILY_ATTRIBUTES);
	myData.addFamily(newFamily)
	res.status(201).json(myData.getFamily())
})

app.get('/friends', function (req, res) {
	console.log('GET friends request ...');
	res.status(200).json(myData.getFriends());
})

app.post('/friends', function (req, res) {
	console.log('POST friends request ...')
	console.log(req.body)
	myData.addFriend(req.body)
	res.status(201).json(myData.getFriends())
})

app.get('/hobbies', function (req, res) {
	console.log('GET hobbies request ...');
	res.status(200).json(myData.getHobbies());
})

app.post('/hobbies', function(req, res) {
	console.log('POST family request ...')
	console.log(req.body)
	myData.addHobby(req.body)
	res.status(201).json(myData.getHobbies())
})

 

app.use(express.static(__dirname + '/public'));

app.listen(3000);