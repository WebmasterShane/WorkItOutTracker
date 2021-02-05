const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
	// creates type attribute
	type: String,

	// creates name attribute
	name: String,

	// creates duration attribute
	duration: Number,

	// creates distance attribute
	distance: Number,

	// creates weight attribute
	weight: Number,

	// creates reps attribute
	reps: Number,

	// creates sets attribute
	sets: Number,
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;