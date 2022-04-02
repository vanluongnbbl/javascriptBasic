// Object Constructor --> như là  bản thiết kể 1 ngôi nhà

// Constructor function
function User(firstName, lastName, avatar) {
    this.firstName = firstName
    this.lastName = lastName
    this.avatar = avatar

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

var user = new User('Nguyen', 'Luong', 'avatar')
var author = new User('Pham', 'Phuong', 'avatar')

author.title = 'Qua dep troai'
user.comment = 'Dep troai vl anh ei'

/*
    Object prototype - Basic --> Nguyên liệu để tạo nên ngôi nhà
        1. Prototype là gì  
            --> Những thứ cấu thành nên hàm tạo của 
                một đối tượng. Giúp thêm hàm tạo bên ngoài constructor
        2. Sử dụng khi nào?
            --> 
*/ 

User.prototype.className = 'Ha'
User.prototype.getClassName = function() {
    return this.className
}

// console.log(user)
// console.log(author)

