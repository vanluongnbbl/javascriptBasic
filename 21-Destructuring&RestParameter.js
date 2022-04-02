/*
    Destructuring []: Có thể sử dụng với array và object
    Rest parameter ...
        Khi sử dụng ... với destructuring và để làm tham số thì nó là toán tử rest
        còn với các trường hợp khác thì nó là spread
*/ 


let arrayDes = ['Javascript', 'PHP', 'Ruby']

var [a,b,c] = arrayDes
var [a, ...rest] = arrayDes

// console.log(rest);

var courseDes = {
    name: 'Javascript',
    price: 1000,
    image: 'Address image'
}

var {name, price} = courseDes
var {name, ...rest} = courseDes

// console.log(rest);

function logger(...parameters) {
    // có thể nhận vô số tham số khi dùng toán tử rest để làm tham số
    // console.log(parameters);
}

logger(1,2,3,4,5,6,7,8)

function desCourse({name, price}) {
    // console.log(name);
}

desCourse({
    name: 'Javascript',
    price: 1000
})