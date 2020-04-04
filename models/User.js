const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: {
		type: String
	},
	phone: {
		type: String
	},
	address: {
		type: String
	},
	image: {
		type: String
	}
});


const User = mongoose.model('User', UserSchema);

module.exports = User;