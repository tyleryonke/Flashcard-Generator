var fs = require("fs");

var typeSelector = process.argv[2];
var firstInput = process.argv[3];
var secondInput = process.argv[4];

function BasicFlashcard (front, back) {
	this.type = "basic";
	this.front = front;
	this.back = back;

	this.appendString = "Type: " + this.type + "\r\n Front: " + this.front + "\r\n Back: " + this.back;
	this.appendString += "\r\n";

	fs.appendFile("log.txt", this.appendString, function(error) {
		if (error) {
	    	console.log(error);
	  	}

	  	else {
	    	console.log("Content Added!");
	  	}
	});

}

function ClozeFlashcard (text, cloze) {
	this.type = "cloze";
	this.text = text;
	this.cloze = cloze;

	this.appendString = "Type: " + this.type + "\r\n Front: " + this.front + "\r\n Back: " + this.back;
	this.appendString += "\r\n";

	this.showClozeDeleted = function() {
		var deleteString = "\\s*\\b" + cloze + "\\b\\s*";
		this.text = this.text.replaceAll(deleteString, "");
		console.log(text);
	};

	fs.appendFile("log.txt", this.appendString, function(error) {
		if (error) {
	    	console.log(error);
	  	}

	  	else {
	    	console.log("Content Added!");
	  	}
	});
}

switch (typeSelector) {
    case "basic":
        var card = new BasicFlashcard(firstInput, secondInput);
        break;
    case "cloze":
        var card = new ClozeFlashcard(firstInput, secondInput);
        break;
    default: console.log("Error: Incorrect type selector.");
};