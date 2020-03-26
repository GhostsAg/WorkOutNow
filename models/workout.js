const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: new Date().setDate(new Date().getDate())
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter the type of this exercise."
      },
      name: {
        type: String,
        trim: true,
        required: "Enter a name for an exercise."
      },
      duration: {
        type: Number,
        required: "Enter the duration of this exercise."
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number
      }
    }
  ],
  totalDuration: {
    type: Number,
    default: 0
  }
});

// workoutSchema.methods.addDurations = function() {
//   for (let el of this.exercises) {
//     this.totalDuration += `${el.duration}`;
//   }
//   return this.totalDuration;  
// }

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
