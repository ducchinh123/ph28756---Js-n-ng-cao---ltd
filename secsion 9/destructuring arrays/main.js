

// Vd với mảng đơn giản

const array = [1, 2, 3];

let a = array[0];
let b = array[1];
let c = array[2];

// Hoặc tôi sẽ phá hủy / hủy cấu trúc mảng như này
// const [a, b, c] = array;

// console.log(a, b, c);


// vd với mảng phức tạp hơn

const restaurant = {
    name: "Nhà hàng Thanh Xuân",
    location: "Đường Trịnh Văn Bô",
    starterMenu: ["Cà phê", "Phở", "Cơm"],
    mainMenu: ["Mì", "Giò", "Bánh"],

    getFood: function(startIndex, mainIndex) {
        return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
    }

};

// Để lấy 2 phần tử đầu tiên của mảng
const [first, second] = restaurant.starterMenu; 

// console.log('first: '+ first, 'second: '+second);

// Để lấy 2 phần tử (pt 1 và pt 3) của mảng và bỏ qua phần thứ 2

let [pt1, pt2, pt3] = restaurant.starterMenu;

// console.log('pt1: '+ pt1, 'pt2: '+pt2);

const temp = pt1;
pt1 = pt2;
pt2 = temp;

// console.log([pt1, pt2]);

[a, b] = [pt2, pt1];

// console.log([a, b]);



console.log(restaurant.getFood(1, 2));




