
// includes method  -> tìm xem 1 phần tử có tồn tại trong 1 chuỗi hoặc 1 mảng hay không
var stringInclude = 'Responsive web design'
// console.log(stringInclude.includes('Responsive'));

var arrayInclude = ['Javascript', 'PHP', 'Reactjs']
// console.log(arrayInclude.includes('PHP'));

// --------------------------------------
// Object constructor

function User(firstName, lastName, avatar) {
    this.firstName = firstName
    this.lastName = lastName
    this.avatar = avatar

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

var author = new User('Pham', 'Phuong', 'Avatar')
var user = new User('Nguyen', 'Luong', 'Avatar')

author.title = 'share somethings'
user.comment = 'comment etc...'

// console.log(author.getName())

// --------------------------------------
// Câu lệnh rẽ nhánh - Switch

var date = 6

switch(date) {
    case 2:
    case 3:
    case 4:
        // console.log('Today is monday!');
        break;
    case 6:
        // console.log('Today is friday');
        break;
    default: 
        // console.log('khong biet');
}

// --------------------------------------
// Toán tử 3 ngôi - Ternary operator

var course = {
    name: 'Javascript',
    coin: 0
}

var result = course.coin > 0 ? `${course.coin} Coins` : 'Free'
// console.log(result);

// --------------------------------------


 