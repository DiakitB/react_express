const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A tour must have a name"],
      unique: true,
      trim: true,
      maxlength: [40, "the max length a tour can have is 40 caracters"],
      minlength: [10, "the min length a tour can have is 10 caracters"],
    },
    slug: String,
    duration: {
      type: Number,
      required: [true, "A tour must have a duration"],
    },
    maxGroupSize: {
      type: Number,
      required: [true, "A tour must have a maxgroup size"],
    },
    difficulty: {
      type: String,
      trim: true,
      required: [true, "A tour must have a difficulty"],
      enum: {
        values: ["easy", "medium", "difficult"],
        message: "the options for difficulty is easy, edium and difficult",
      },
    },

    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, "Rating must be above 1.0"],
      max: [5, "Rating must be below 5.0"],
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "A tour must have a price"],
    },
    priceDiscount: {
      type: Number,
      validate: {
        validator: function (val) {
          // this only points to current doc on NEW document creation
          return val < this.price;
        },
        message: "Discount price ({VALUE}) should be below regular price",
      },
    },
    summary: {
      type: String,
      trim: true,
      required: [true, "A tour must have a summary"],
    },
    description: {
      type: String,
      trim: true,
    },
    imageCover: {
      type: String,
      required: [true, "A tour must have a cover image"],
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    startDates: [Date],
    // secretTour: {
    //   type: Boolean,
    //   default: false
    // }
    // startLocation: {
    //   type: {
    //     type: String,
    //     default: "Point",
    //     enum: ["Point"],
    //   },
    //   coordinates: [Number],
    //   address: String,
    //   description: String,
    // },
    // locations: [
    //   {
    //     type: {
    //       type: String,
    //       default: "Point",
    //       enum: ["Point"],
    //     },
    //     coordinates: [Number],
    //     address: String,
    //     description: String,
    //     day: Number,
    //   },
    // ],
    guides: [],
  },

  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
const Tour = mongoose.model("Tour", tourSchema);

/// CREATING OUR MODEL OUT OF OUR SCHEMA
module.exports = Tour;
