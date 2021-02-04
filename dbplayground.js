// we are going to play around with our db in here
//require

const db = require('./models')

// db.user.create({
//     firstName: 'Rome',
//     lastName: 'Bell',
//     age: 33
// }).then((user) => {
//     console.log(user)
// })

// db.user.create({
//     firstName: 'Brian',
//     lastName: 'Krabec',
//     age: 27
// }).then((user) => {
//     console.log(user)
// })

// db.user.create({
//     firstName: 'Nick',
//     lastName: 'Schmitt',
//     age: 28
// }).then((user) => {
//     console.log(user)
// })

db.user.findOne({
    where: { firstName: 'Nick' }
}).then(function (user) {
    console.log(user.get())
})
    .catch(err => {
        console.log(err)
    })
db.user.findAll()
    .then((users) => {
        //print each name
        users.forEach(user => {
            console.log(user.firstName + ' ' + user.lastName)
        })
    })