/*

    Call() = bind + call (gọi hàm )

    Là phương thức trong prototype của Function constructor,
    phương thức này được dùng để gọi hàm và cũng có thiể
    bind this cho hàm

    Gọi hàm và bind this
    Trong strict mode vẫn có this nếu được bind
    Thể hiện tính kế thừa trong OOP
*/ 

const other = {
    firstNameCall: 'Van',
    lastNameCall: 'A'
}

const me = {
    firstNameCall: 'Van',
    lastNameCall: 'Luong',
    getFullName() { 
        return `${this.firstNameCall} ${this.lastNameCall}`
    }
}

// console.log(me.getFullName.call(other));


// Thể hiện tính kế thừa
function Animal(name, weight) {
    this.name = name
    this.weight = weight
}

function Chicken(name, weight, legs) {
    Animal.call(this, name, weight)
    this.legs = legs
}

const vanLuong = new Chicken('Van Luong', 60, 2) 

// console.log('vanLuong: ', vanLuong);