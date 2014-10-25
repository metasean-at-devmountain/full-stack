var family = [
	{
		relationship: "Mother",
		name: "Cathee"
	},
	{
		relationship: "Father",
		name: "Ernie"
	},
	{
		relationship: "Brother",
		name: "Brat"
	}
];

module.exports.getFamily = function() {
	return family;
};

module.exports.addFamily = function(newFamily) {
	family.push(newFamily);
};


var friends = [
	{
		name: "Blaire",
		met: 2007
	},
	{
		name: "Thomas",
		met: 2006
	},
	{
		name: "Lu",
		met: 2008
	},
	{
		name: "Bobbe",
		met: 2004
	}
];

module.exports.getFriends = function() {
	return friends;
};

module.exports.addFriend = function(newFriend) {
	friends.push(newFriend);
};

var hobbies = [
	{
		name: "programming",
		level: "proficient"
	},
	{
		name: "robotics hardware",
		level: "novice"
	},
	{
		name: "dachshund daddy",
		level: "awesome"
	}
];

module.exports.getHobbies = function() {
	return hobbies;
};

module.exports.addHobby = function(hobby) {
	hobbies.push(newHobby);
};

var stats = {
	name: "MetaSean",
	height: "shorter than most",
	age: "older than he looks",
	favoriteArtist: "Toby Beard"
};

module.exports.getStats = function() {
	return states;
};