// Đệ quy - Recursive
// 1. Xác định điểm dừng
// 2. Logic handle => Tạo ra điểm dừng

var array = [1, 2, 3, 1, 2, 3]

// console.log([...(new Set(array))]);
// Set -> luôn luôn chỉ tồn tại 1 giá trị duy nhất (unique)
// ... -> toán tử giải, lấy tất cả các phần tử

function giaiThua(number) {
    if(number > 0) {
        return number *giaiThua(number - 1)
    }
    return 1
}
// 3 * 2 * 1 = 6
// console.log(giaiThua(3))