var mongoose = require("mongoose");
var contactSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	contact: {
		type : String,
		required : true
	}
});

var Contact = module.exports = mongoose.model("contact", contactSchema, "contacts");

module.exports.getContact = function(callback) {
	Contact.find(callback);
}

// for post request

module.exports.addContact = function(contact, callback) {
	Contact.create(contact, callback);
	// here create is the mongoose method to create
}

//for update req

module.exports.updateContact = function(id, contact, callback) {
	Contact.update({ _id : id },contact,callback);
}

module.exports.deleteContact = function(id, callback) {
	Contact.remove({ _id : id }, callback);
}