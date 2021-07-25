var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
	firstName: {type: String, required: true},
	lastName: {type: String, required: true},
	email: {type: String, required: true},
	password: {type: String, required: true},
	status: {type: Boolean, required: true, default: 1},
	date: {type: Date, default:Date.now}
}, {timestamps: true});


module.exports = mongoose.model("User", UserSchema);