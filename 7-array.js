/*
    Làm việc với array
        1. To string    --> biến array thành 1 chuỗi
        2. Join         --> biến array thành 1 chuỗi và ngăn cách 
                            các phần tử theo cách của mình
        3. Pop          --> Xóa phần tử cuối mảng và trả lại phần tử đã xóa
        4. Push         --> Thêm phần tử và cuối mảng và trả về độ dài mới của mảng
        5. Shift        --> Xóa phần tử ở đầu mảng và trả về phần tử đã xóa
        6. Unshift      --> Thêm phần tử vào đầu mảng và trả về độ dài mới của mảng
        7. Splice       --> Xóa phần tử ở vị trí bất kỳ trong mảng
        8. Concat       --> Nối 2 array vào nhau
        9. Slicing
*/ 

var languages = [
    'Javascript',
    'PHP',
    'Ruby'
]
// 7. Splice
// Tham số đầu tiên là vị trí bắt đầu xóa
// Tham số thứ 2 là số lượng phần tử muốn xóa
// Tham số thứ ba là chèn phần tử mới vào vị trí phần tử bị xóa
// languages.splice(1, 2, 'Dart')
// console.log(languages);


// 9. Slice
// Tham số đầu tiên là vị trí bắt đầu xóa
// Tham số thứ 2 là vị trí kết thúc xóa
// trả về phần tử đã xóa
// console.log(languages.slice(1, 2));


/*
    Array methods:
        forEach() 
        every() 
        some()
        find()
        filter()
        map()
        reduce()
*/

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 270
    },
    {
        id: 2,
        name: 'PHP',
        coin: 30
    },
    {
        id: 3,
        name: 'Python',
        coin: 0
    },
    {
        id: 4,
        name: 'Html/css',
        coin: 0
    },
    {
        id: 5,
        name: 'Reactjs',
        coin: 100
    }
]

// forEach() -> duyệt qua từng phần tử của mảng
courses.forEach(function(course, index){
    // console.log(course, index);
})

//============================================//
// every()
/*
    Kiểm tra tất cả các phần tử 
    phải thỏa mãi một điều kiện nào đó.

    Nếu kiểm tra thấy điều kiện sai sẽ break luôn vòng lặp
*/ 
var isFree = courses.every(function(course, index){
    // console.log(index);
    return course.coin === 0
})

// console.log(isFree);

//============================================//
// some()
/*
    Chỉ cần 1 phần tử trong mảng thỏa mãn 
    điều kiện thì sẽ break vòng lặp và trả vể True
*/ 
var isFreeSome = courses.some(function(course){
    return course.coin === 0
})

// console.log(isFreeSome);

//============================================//
// find()
/*
    Kiểm trả xem phần tử nào thỏa mãn thì sẽ 
    trả về phần tử đó và break. -> chỉ trả về 1 phần tử
    Không thỏa mãn -> undefined
      
*/ 

var courseFind = courses.find(function(course){
    return course.name === 'Python'
})
// console.log(courseFind);


//============================================//
// filter()
/*
    Kiểm trả xem phần tử nào thỏa mãn thì sẽ 
    trả về phần tử đó. -> trả về tất cả các phần 
    tử thỏa mãn điều kiện.
*/ 

var listCourse = courses.filter(function(course){
    return course.coin === 0
})

// console.log(listCourse);

//============================================//
// map()
/*
    thay đổi mảng thành một mảng mới.
*/ 
function courseHandler(course, index) {
    return {
        id: course.id,
        name: `Course: ${course.name}`,
        coin: course.coin
    }
}

var newCourses = courses.map(courseHandler)

// console.log(newCourses);

//============================================//
// reduce()
/*
    sử dụng khi muốn nhận về một kết quả duy nhất 
    sau khi tính toán xong các phần tử trong 1 array
*/ 

function coinHandler(accumulator, currentValue, currentIndex, originArray) {
    // accumulator -> biến lưu trữ

    i = 0
    i++
    // console.table({
    //     'Lượt chạy: ':i,
    //     'Biến lưu trữ: ': accumulator,
    //     'Coins: ': currentValue.coin
    // })

    return accumulator + currentValue.coin
}

var totalCoin = courses.reduce(coinHandler, 0) 

// console.log(totalCoin);

// Flat - Làm phẳng mảng từ Depth Array(Mảng Sâu)
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]]

function flatFunction(flatOutput, flatItem) {
    return flatOutput.concat(flatItem)
}

var flatArray = depthArray.reduce(flatFunction, [])

// console.log(flatArray);

// Lấy ra các khóa học đưa vào 1 mảng mới
var topics = [
    {
        topic: 'Front-end',
        courses: [
            {
                id: 1,
                title: 'Html/Css'
            },
            {
                id: 2,
                title: 'Javascript'
            }
        ]
    },
    {
        topic: 'Back-end',
        courses: [
            {
                id: 1,
                title: 'PHP'
            },
            {
                id: 2,
                title: 'Nodejs'
            }
        ]
    }
]



var newCourses = topics.reduce(function(courses, topic) {
    return courses.concat(topic.courses)
}, [] )

// console.log(newCourses);