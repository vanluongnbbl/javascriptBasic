/*
Vòng lặp - Loop

1.for - Lặp với điều kiện đúng
2. for/in - lặp qua key của mỗi đối tượng
3. for/of - Lặp qua value của đối tượng
4. while - Lặp khi điều kiện đúng
5. do/while - Lặp ít nhất một lần sau đó lặp khi điều kiện đúng

*/

// For loop
for (let i = 1; i <= 1000; i++) {
    // console.log(i)
}

// For/in loop
var myArrayLanguage = [
    'Javascritp',
    'PHP',
    'Python'
]

for (var key in myArrayLanguage) {
    // console.log(myArrayLanguage[key]);
}

// For/of loop
for (var key of myArrayLanguage) {
    // console.log(key);
}

// While loop
let i = 0
while (i < myArrayLanguage.length) {
    // console.log(myArrayLanguage[i]);
    i++
}

// do/while loop
i = 0
do {
    i++
    // console.log(i);
} while (i < 10) 

// ==========================================
// Break & continue in loop

for (let j = 0; j < 10; j++){
    if(j > 5) {
        break
    }

    if (j%2 !== 0) {
        continue
    }
    // console.log(j);
}

// Vòng lặp lồng nhau - Nested Loop
var myArrayNestedLoop = [
    [1,2],
    [3,4],
    [5,6]
]

for (i = 0; i < myArrayNestedLoop.length; i++){
    for (let j = 0; j < myArrayNestedLoop[i].length; j++){
    //   console.log(myArrayNestedLoop[i][j]);
    }
}

// Baài tập loop
for(i = 100; i > 0; i--){
    // console.log(i);
}

for(i = 100; i > 0; i-= 5){
    // console.log(i);
}
