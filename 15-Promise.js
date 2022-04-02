/*
    Promise

        Promise sinh ra để xử lý các thao tác bất đồng bộ, trước khi có
        promise thì chúng ta thường xử dụng callback, và callback sẽ xảy
        ra một vấn đề là callback hell. Promise sẽ xử lý tình trạng callback hell 
        giúp code dễ đọc và dễ hiểu hơn.

        Sync: Đồng bộ
            Viết trước chạy trc, viết sau chạy sau
        Async: Bất đồng bộ
        Nỗi đau
        Lý thuyết, cách hoạt động
        Thực hành
*/


/*
    Sync / Async
        setTimeout, setInterval, fetch, XMLHttpRequest, file reading, request animation frame
        Sử dụng callback để xử lý bất đồng bộ
*/ 

// Callback hell
// setTimeout(function () {
//     console.log(1)
//     setTimeout(function () {
//         console.log(2)
//         setTimeout(function () {
//             console.log(3)
//         }, 1000)
//     }, 1000)
// }, 1000)


/*
    Các trạng thái của promise
        1. Pendding:    Chờ xem thành công hay thất bại
        2. Fulfilled:   Thành công
        3. Rejected:    Thất bại
*/ 

var promise = new Promise(

    // Executor function
    function (resolve, reject) {
        // Logic
        // Thành công: resolve
        // Thất bại: reject()

        // Fake call API
        resolve()
        // reject('Failure!')
    }
)

promise
    .then(function () {
        return 1
    })
    .then(function (data) {
        // console.log(data)
        return 2
    })
    .then(function (data) {
        // console.log(data)
        return 3
    })
    .then(function (data) {
        // console.log(data)
    })
    .catch(function (data) {
        // console.log(data);
    })  
    .finally(function (params) {
        // console.log('Finally');
    })
    

function sleep(ms){
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    })
}

sleep(1000)
    .then(() => {
        // console.log(1);
        // return sleep(1000)
    })
    .then(() => {
        // console.log(2);
        // return sleep(1000)
    })
    .then(() => {
        // console.log(3);
        // return sleep(1000)
    })