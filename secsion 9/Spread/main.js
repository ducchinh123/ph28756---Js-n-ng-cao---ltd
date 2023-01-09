

// Bây giờ tôi sẽ giải nén mỗi mảng

 var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//  console.log('Trước khi giải nén: ');
// console.log(arr);
// console.log('Sau khi giải nén: ');
// console.log(...arr);


const restaurant = {
    name: "Nhà hàng Thanh Xuân",
    location: "Đường Trịnh Văn Bô",
    starterMenu: ["Cà phê", "Phở", "Cơm"],
    mainMenu: ["Mì", "Giò", "Bánh"],

    getFood: function(startIndex, mainIndex) {
        return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
    },


    openingHours: {

        thu: {
            open: 7,
            close: 8
        },

        frid: {
            open: 7,
            close: 9
        },

        sat: {
            open: 7,
            close: 10
        }

    },


    orderPasta: function(v1, v2, v3) {
        console.log(`Đây là các giá trị bạn đã truyền vào với  ${v1}, ${v2}, ${v3}`);
    }
};

// Bây giờ tôi sẽ mở rộng mảng / thêm phần tử "mainMenu" bằng toán tử giải. Và đương nhiên kết quả sau đó
// hoàn toàn toàn là một mảng mới. NHƯNG nó không hề ảnh hưởng tới mảng gốc


// Tôi khở tạo một biến để lưu trữ giá trị

const newMenu = [...restaurant.mainMenu, "Bánh chưng"];

// console.log(newMenu);



// GỘP 2 MẢNG VỚI NHAU BẰNG CÁCH SỬ DỤNG TOÁN TỬ SPREAD

var  arrNumber = [1, 2, 3, 4];
var  arrString = ["Một", "Hai", "Ba", "Bốn"];


// var totalArr = arrNumber.concat(arrString);

// console.log(totalArr);

// Một cách khác

var totalArr = [...arrNumber, ...arrString];

// console.log(totalArr);



///



const str = "Chinh";

const letter = [...str, '', 'S.'];

// console.log(letter);


// VD hay


const eles = [prompt('hãy nhập giá trị đầu tiên?'), prompt('hãy nhập giá trị thứ 2?'),  prompt('hãy nhập giá trị thứ 3?')];

restaurant.orderPasta(eles[0], eles[1], eles[2]);
