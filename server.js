var express = require("express");
var mongoose = require("mongoose");
var Contact = require("./model/contact")
var app = express();

var router = express.Router();

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost/mydata", function(){
	console.log("Successfully connected to Database : mydata !!!");
})

router.get("/", function(req, res){
	res.send("Hello HYD !!")
});

router.get("/person", function(req, res){
	var person = {
		firstName : "Kathy"
	}
	var addr = {
		city : "hyd"
	}

	res.json({

		person : person,
		address : addr
	}
	);
})

router.get("/contact", function(req, res) {
	Contact.getContact(function(err, contact) {
		if(err) {
			throw err;
		}
		console.log(contact);
		res.json(contact);
	})
});


router.post("/contact", function(req,res){
	var data = req.body;
	console.log("DATA: "+data);
	Contact.addContact(data, function(err, contact) {
		if(err) {
			console.log(err);
			throw err;
		}
		res.json(contact);
	})
})

router.put("/contact/:id", function(req, res){
	var id = req.params.id;
	var data = req.body;
	Contact.updateContact(id, data, function(err, contact){
		if(err){
			throw err;
		}
		res.json(contact);
	})
})

router.delete("/contact/:id", function(req, res) {
	var id = req.params.id;
	Contact.deleteContact(id, function(err, resData) {
		if(err){
			throw err;
		}
		res.json(resData);
	})
})

app.use("/", router);

var PORT = process.env.PORT || 3001;

app.listen(PORT, function(){
	console.log("Server is listening at the port : " + PORT);
})