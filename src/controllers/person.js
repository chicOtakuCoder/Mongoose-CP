const Person = require('../model/person.model');

run()
async function run() {
        const newPerson = new Person({
            name: 'Yvonne',
            age: 50,
            favouriteFood: ['yam', 'rice']
        });
        await newPerson.save();

        const people = [
            {name: 'Agbon', age: 24, favouriteFood: ['garri', 'groundnut']},
            {name: 'Jacinta', age: 32, favouriteFood: ['Jollof rice', 'fried chicken']},
            {name: 'Wunmi', age: 12, favouriteFood: ['Fufu', 'Ogbono']},
            {name: 'Lanre', age: 5, favouriteFood: ['cerelac', 'french fries']}
        ]

        Person.create(people, (err, array) => {
            if(err) {
                console.error(err)
            }
            console.log(array)
        })

        Person.find({
            name: 'Jacinta'
        }, (err, person) => {
            if(err){
                console.log(err)
            }
            console.log(person)
        })

        Person.findOne({
            favouriteFood: 'garri'
        }, (err, person) => {
            if (err) {
                console.error(err)
            }
            console.log(person)
        })

        Person.findById('621a07ed999cee08f8c2fe8c', 
        (err, person) => {
            if (err) {
                console.error(err)
            }
            console.log(person)
        })

        Person.findById('621a07ed999cee08f8c2fe8c', 
        (err, person) => {
            if (err) {
                console.error(err)
            }
            person.favouriteFood.push('hamburger')
            person.save()
            console.log(person)
        })

        Person.findOneAndUpdate(
            {name: 'Yvonne'},
            { $set: {age: 75} },
            (err, person) => {
                if (err) {
                    console.error(err)
                }
                console.log(person)
            })

        
        Person.findByIdAndRemove('621a07ed999cee08f8c2fe8c',
            (err, person) => {
                if (err) {
                    console.error(err)
                }
                console.log(person)
            })

        Person.remove({
            name: 'Agbon'
        }, (err, person) => {
            if (err) {
                console.error(err)
            }
            console.log(person)
        })

        Person.find({
            favoriteFood: 'cerelac'
        }).sort({
            name: 'asc'
        }).limit(2).select('-age').exec( function done(err, data) {
            if (err) {
                console.error(err)
            }
            console.log(data)
        })
}

module.exports = run
