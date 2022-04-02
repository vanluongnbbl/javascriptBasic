/*
    JSON
        1. Là một định dạng dữ liệu (chuỗi)
        2. JavaScript Object Notation
        3. JSON: Number, String, Boolean, Null, Array, Object


        Encode: Mã hóa
        Decode: Giải mã
        Stringify       --> Từ Javascripts types -> JSON
        Parse           --> Từ JSON -> Javascripts types
*/

var json = '["Javascript", "PHP"]'
var testObject = {
    name: "Luong",
    age: '23',
    skill: ['Javascript', 'HTML/CSS', 'ReactJS']
}

// console.log(JSON.stringify(testObject));
// console.log(JSON.parse(json));