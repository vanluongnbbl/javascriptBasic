/*
    Scope - Phạm vi

    - Các loại phạm vi:
        1. Global
        2. Code Block: {} let, const
        3. Local scope: Hàm, var, function
    
    - Khi gọi mỗi hàm luôn có một phạm vi mới được tạo

    - Các hàm có thể truy cập các biến được khai báo trong
    phạm vi của nó và bên ngoài nó
    - Cách thức một biến được truy cập
    - Khi nào biến được xóa khỏi bộ nhớ
        1. Biến toàn cầu
            Giá trị của biến sẽ chỉ bị xóa khi chương trình
            bị thoát, ví dụ như ở web là F5 hoặc tắt tab
        2. Biến trong code block & trong hàm
            Khi hàm thực thi xong thì biến sẽ được xóa khỏi
            bộ nhớ
        3. Biến trong hàm được tham chiếu bởi một hàm
*/ 

/*
    Code block

    Nếu var được khai báo trong code block, nó sẽ ko chỉ
    thuộc phạm vi của code block mà nó sẽ nhảy ra bên ngoài
    phạm vi của code block
*/  
{
    let codeBlock = "code block"
}

// console.log(codeBlock);

