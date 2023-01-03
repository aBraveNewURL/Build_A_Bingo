const mongoose = require('mongoose');
const User = mongoose.model('Users');
module.exports.profileRead = function (req, res) {
	// if user id does not exist returrn error
	if (!req.payload._id) {
		res.status(401).json({
			"message": "UnauthorizedError: private profile"
		});
	} else {
		// else continue
		User
			.findById(req.payload._id)
			.exec(function (err, user) {
				res.status(200).json(user);
			});
	}
};
