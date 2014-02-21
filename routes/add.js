var data = require("../data.json");

exports.addFriend = function(req, res) { 
	// Your code goes here
	var json1 = { 'name': req.query.name,
				  'description': req.query.description,
				  'imageURL': "sdasds.jpg" };
	console.log(json1);
	data["friends"].push(json1);
	
	res.render('index',data);
}