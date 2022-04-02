// HTML DOM

/*
    DOM có 3 thành phần 
    Sử dụng javascript để có thể thay đổi các thành phần HTML
    
    1. Element: ID, class, css Selector, HTML collection
    2. Attribute
    3. Text
*/ 

// document.write('Hello Luong')
// document.getElementById()
// document.getElementsByClassName()
// document.querySelector()
// document.querySelectorAll()

// -------------------------------------
// DOM Atrribures
var headingElement = document.querySelector('h1')

// cach 1
headingElement.title = "Title test"

// cach 2
headingElement.setAttribute('class', 'heading')

// console.log(headingElement.getAttribute('class'))

// ----------------------------------------
/*
    DOM Text
    1. textcontent      --> Trả về mọi thứ
    2. innerText        --> chỉ trả về những thứ nhìn thấy

    3. innerHTML        --> có thể ghi đè các element vào element node
    4. outerHTML
*/
// console.log(headingElement.textContent);
// console.log(headingElement.innerText);

headingElement.innerText = 'New Heading'

var boxElement = document.querySelector('.box')
boxElement.innerHTML = '<h1 title="box">New box</h1>'

//  -----------------------------------------
// DOM CSS
// boxElement.style.width = '300px'
// boxElement.style.height = '100px'
// boxElement.style.backgroundColor = 'red'

Object.assign(boxElement.style, {
    width: '200px',
    height: '100px',
    backgroundColor: 'green'
})

//  -----------------------------------------
/*
    Classlist property
    
        1. add          --> thêm class
        2. contains     --> kiểm tra xem element có class đó hay ko
        3. remove       --> xóa class
        4. toggle       --> kiểm tra xem có class đó hay ko, nếu có thì xóa còn ko thì thêm class đó
*/ 

boxElement.classList.add('red', 'blue')
// console.log(boxElement.classList.contains('red'));

setTimeout(() => {
    boxElement.classList.remove('red')
}, 3000)

setInterval(() => {
    // boxElement.classList.toggle('red')
}, 1000)


//  -----------------------------------------
/*
    DOM events
    Các sự kiện từ chuột vào phím
        1. Atrribute events
        2. Assign event using the element node
*/

var h2Elements = document.querySelectorAll('h2')

for(let i = 0; i < h2Elements.length; ++i) {
    h2Elements[i].onclick = function(e) {
        // console.log(e.target);
    }
}

// Input / select
var inputElement = document.querySelector('input[type=text]')
var selectElement = document.querySelector('select')


inputElement.onchange = function (e) {
    console.log(e.target.value);
}

selectElement.onchange = function (e) {
    console.log(e.target.value);
}

// key up/down
// inputElement.onkeydown = function (e) {
//     console.log(e.target.value);
// }
// inputElement.onkeyup = function (e) {
//     console.log(e.target.value);
// }

document.onkeydown = function(e) {
    switch(e.which) {
        case 27: 
            console.log('Exit');
            break;
        default:
            break;
    }
}

// preventdefault   --> loại bỏ hành vi mặc định của html
// e.preventDefault

// stopPropagation  --> ngăn chặn sự kiện nổi bọt
document.querySelector('span').onclick = function(e) {
    // console.log('Span');
}
document.querySelector('button').onclick = function(e) {
    e.stopPropagation()
    // console.log('Click me');
}


// -----------------------------------------------
/*
    Events Listener
        1. Xử lý nhiều việc khi 1 event xảy ra
        2. Lắng nghe / Hủy bỏ lắng nghe
*/ 

var btn = document.getElementById('btn')

function viec1() {
    console.log('viec 1');
}

function viec2() {
    console.log('viec 2');
}

btn.addEventListener('click', viec1)
btn.addEventListener('click', viec2)

setTimeout(() => {
    btn.removeEventListener('click', viec1)
}, 2000)