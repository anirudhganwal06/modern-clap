const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const typeSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	icon: String,
	categories: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Category'
		}
	]
});

module.exports = mongoose.model('Type', typeSchema);