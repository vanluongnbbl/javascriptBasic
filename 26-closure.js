/*
    Closure
        Là một hàm có thể ghi nhớ được nơi mà nó được tạo ra
        và truy cập được biến ở bên ngoài phạm vi của nó

        Ứng dụng
            1. Viết code ngắn gọn hơn
            2. Biểu diễn, ứng dụng tính Private trong OOP
        

        Lưu ý
            1. Biến được tham chiếu trong closure sẽ không
            được xóa khỏi bộ nhớ khi hàm cha thực thi xong
            2. Các khái niệm Javascript nâng cao rất dễ gây
            nhầm lẫn
*/ 

function closure() {
    let count = 0

    const increase = () => {
        return ++count 
    }

    return increase
}

const counter = closure()
// console.log(counter());
// console.log(counter());
// console.log(counter());

const counter2 = closure()
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());


// Ứng dụng logger

function createLogger(namespace) {

    function logger(message) {
        // console.log(`[${namespace}] ${message}`);
    }

    return logger
}

const infoMessage = createLogger('Info')
infoMessage('Email info 1')
infoMessage('Email info 2')
infoMessage('Email info 3')

const errorMessage = createLogger('Error')
errorMessage('Email Error 1')
errorMessage('Email Error 2')
errorMessage('Email Error 3')


// Cars

function createApp() {
    let cars = []

    return {
        add(car){
            cars.push(car)
        },
        show(){
            console.log(cars);
        }
    }
}


const app = createApp()

app.add('Feature')
// app.show()