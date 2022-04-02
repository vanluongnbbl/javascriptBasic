/*
    IIFE - Immediately Invoked Function Expression
    Seft-Invoking Function

    1. IIFE trông như nào?
    2. Dùng dấu ; trước IIFE
    3. IIFE là hàm private
    4. Sử dụng IIFE khi nào?
    5. Cách tạo ra một IIFE
    6. Ví dụ sử dụng IIFE
*/ 

// Function expresstion
const callNow = function() {
    console.log('Now');
}

// callNow()

// 1. IIFE
;(function iife() {
    // console.log('IIFE');
})()