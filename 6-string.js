/*
    Làm việc với chuỗi
    Keyword: Javacscript string methods
        1. Length
        2. Find index
        3. Cut string
        4. Replace
        5. Convert to uper case
        6. Convert to lower case
        7. Trim
        8. Split
        9. Get a character by index
*/ 

// /value/g     --> biểu thức chính quy

var myString = 'Ban Luong hoc JS JS'
// 2. Find index    -> tìm vị trí của phần tử
// console.log(myString.indexOf('Luong'));

// 3. Cut string
// console.log(myString.slice(4, 7));  -> lấy giá trị từ index 4 đến 7

// 4. Replace -> ghi đè phần tử
// console.log(myString.replace('Luong', 'Phuong'));
// console.log(myString.replace(/JS/g, 'Phuong'));

// 7. Trim  --> cắt hết khoảng trống ở đầu và cuối chuỗi
// console.log(myString.trim());

// 8. Split -> Tách thành array bằng điểm chung
var languages = 'Javascript, PHP, Ruby'
// console.log(languages.split(', '));

// 9. Get a character by index
// console.log(myString.charAt(0));



