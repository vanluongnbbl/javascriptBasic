/*
    Spread ...
        Sử dụng ...Array để bỏ đi dấu [] và lấy giá trị bên trong array 
        Tương tự với object
*/ 

var array1 = [1,2,3]
var array2= [4,5,6]
var array3 = [...array1, ...array2]

// console.log(array3);

var object1 = {
    name: 'Javascript'
}

var object2 = {
    price: 10000
}

var object3 = {
    ...object1, 
    ...object2, 
    tutor: 'Luong'
}
// console.log(object3);

function logger(...rest) {
    for (let i = 0; i < rest.length; i++) {
        // console.log(rest[i]);
    }
}

logger(...array3)