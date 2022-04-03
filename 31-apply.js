/*

    apply()
    Phương thức này cho phép gọi một hàm với một this (bind)
    và truyền đối số cho hàm gốc dướng dạng mảng

    Tương tự với call(), chỉ khác nhau ở cách truyền đối số 

*/ 

const teacherThu = {
    firstName: 'Minh',
    lastName: 'Thu'
}

function greet(greeting, message) {
    return `${greeting} ${this.firstName} ${this.lastName} ${message}`
}

let resultA = greet.apply(
    teacherThu, ['Em Chao co', 'Co Day Mon gi the a']
)

console.log(resultA);


// So sánh với call() method
resultA = greet.call(
    teacherThu, 'Em Chao co', 'Co Day Mon gi the a'
)

console.log(resultA);
