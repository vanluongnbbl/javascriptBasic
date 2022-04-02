/*
    Từ khóa this trong javascript đề cập đến đối
    tượng mà nó thuộc về

    1. Trong một phương thức, this tham chiếu tới
    đối tượng truy cập phương thức (đối tượng trước dấu .)
    2. Đứng ngoài phương thức, this tham chiếu tới
    đối tượng global

    Lưu ý:
        1. this trong hàm tạo là đại diện cho đối tượng
        sẽ được tạo
        2. this trong hàm là undefined khi ở strict mode
        3. các phương thức bind(), call(), apply() có thể
        tham chiếu this tới đối tượng khác
*/ 

// Hàm tạo
function Car(name, color, weight) {
    this.name = name 
    this.color = color
    this.weight = weight
}

const mercedesS450 = new Car('Mercedes S450', 'black', 450)

console.log(mercedesS450);