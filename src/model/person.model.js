const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const profile = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
      },
    age: Number,
    favouriteFood: [String]
});

const Person = model('person', profile)

module.exports = Person