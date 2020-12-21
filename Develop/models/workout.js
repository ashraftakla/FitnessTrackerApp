const mongoose = require("mongoose")
const Schema = mongoose.Schema
const workoutSchema = new Schema(

    {
        day: {
            type: Date,
            default: () => new Date()
        },
        excersices: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "please enter an excersice type"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "please enter a name for the excersice"
                },
                duration: {
                    type: Number,
                    required: "please enter how long this excersice took"
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                },

            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
)
workoutSchema.virtual("totalDuration").get(function () {
    return this.excersices.reduce((total, excersice) => {
        return total + excersice.duration
    }, 0)
})
const Workout = mongoose.model("Workout", workoutSchema)
module.exports = Workout