const { mongoose, db } = require('../database');

Post = db.model('Post', {
	username: String,
	content: String
})

module.exports = Post;

