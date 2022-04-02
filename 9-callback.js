/*
    Callback?
        Là hàm(function) được truyền qua đối số
        khi gọi hàm khác

        1. Là hàm
        2. Được truyền qua đối số
        3. Được gọi lại (trong hàm nhận đối số)
*/ 

function myFunction(param) {
    if(typeof param === 'function'){
        param('Học lập trình')
    }
} 

function myCallback(value) {
    //  console.log('Value: ', value);
}

myFunction(myCallback)

//  -------------------------
// callback phần 2

// map()
Array.prototype.map2 = function(callback) {
    var output = []
    var arrayLength = this.length

    for ( var i = 0; i < arrayLength; ++i) {
        var result = callback(this[i], i)
        output.push(result)
    }
    return output
}

var courses = [
    'Javascript',
    'PHP',
    'Ruby'
]

var htmls = courses.map2(function(course) {
    return `<h2>${course}</h2>`
})

// console.log(htmls.join(''));

// forEach