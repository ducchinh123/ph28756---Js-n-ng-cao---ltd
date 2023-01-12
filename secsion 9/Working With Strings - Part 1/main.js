
const Str1 = "I love Vietnames";

// Lấy ra tự bất kì trong chuỗi dựa vào index của nó (tính cả khoảng trắng của là 1 index)

// Vd:

console.log(Str1[3]); // => o


// Lấy ra độ dài của chuỗi

console.log(Str1.length);


// Lấy ra chỉ mục của 1 kí tự bất kì

console.log(Str1.indexOf('o')); // => 3

// thử
console.log(Str1.lastIndexOf('s')); 


// cắt chuỗi từ 1 index xác định cho đến hết

console.log(Str1.slice(2)); // love Vietnames


// cắt chuỗi từ 1 index xác định cho đến index xác định

console.log(Str1.slice(2, 6)); // => love

console.log(Str1.slice(0, -5)); // => love




//======================================================
// Working With Strings - Part 2
//======================================================


// Viết hoa các chữ lên

console.log(Str1.toUpperCase());

// Viết thường các chữ xuống
//

console.log(Str1.toLowerCase());


// Loại bỏ những khoảng trắng không mong muốn

const Str2 = "  I love Vietnames";

console.log(Str2.trim());


// Thay thế phần tử trong 1 chuỗi

// Vd

const Str = "Tôi yêu mọi miền tổ quốc";


// Vd tôi muốn thay thế chữ "mọi" bằng "tất cả"

console.log(Str.replace("mọi", "tất cả"));

// Booleans

// Kiểm tra 1 chuỗi bất kì có tồn tại trong một chuỗi hay không


const message1 = "Mọi miền tổ quốc";

console.log(message1.includes("tổ")); // => TRUE

// Kiểm tra 1 chuỗi có bắt đầu từ cụm cho trước hay không

const message2 = "Miền tổ quốc";

console.log(message2.startsWith("Miền"));



// Tìm ra điểm chung trong chuỗi và biến các chuỗi đó thành mảng với split()


const message3 = "Tôi đang là sinh viên";

// Điểm chung ở đây là trong chuỗi mỗi chữ cách nhau bởi khoảng trắng 

// Vậy nên tôi sẽ sử dung split() để biến các chữ thành mảng

console.log(message3.split(' '));


// Thêm padding vào trong chuỗi

// Tôi sử dụng message3 ở trên

// Bây giờ tôi sẽ thêm padding vào trước chuỗi này, tất nhiên điều đó cũng sẽ làm tăng độ dài chuỗi

// padStart(), padEnd()

console.log(message3.padStart(30, ' ').padEnd(100, ' '));











