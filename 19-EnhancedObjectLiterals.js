/*
    1. Định nghĩa key: value cho object
    2. Định nghĩa method cho object
    3. Định nghĩa key cho object dưới dạng biến
*/ 

var name2 = 'Javascript'
var price = 1000

var course = {
    // name: name,
    // price: price,
    // getName: function () {
    //     return name
    // },

    name2,
    price,
    getName() {
        return name2
    },
}

// console.log(course.getName());


var fieldName = 'name'
var fieldPrice = 'price'

const courseTest = {
    [fieldName]: 'Javascript',
    [fieldPrice]: 1000
}
// console.log(courseTest);