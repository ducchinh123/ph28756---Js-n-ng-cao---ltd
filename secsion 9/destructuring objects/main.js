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


    orderLivery: function({starterIndex, mainIndex, time, address}) {
        console.log(`Đơn hàng nhận ${this.starterMenu[starterIndex]} và ${this.mainMenu[mainIndex]} sẽ giao tới ${address} lúc ${time}`);

    }
};


restaurant.orderLivery({
    time: "8h sáng",
    address: "Giao Long - Giao Thủy",
    mainIndex: 2,
    starterIndex: 2
});

const {name, getFood,openingHours} = restaurant;
// console.log(name, getFood, openingHours);


// Tôi có thể setup tên của key tùy ý và in ra nó.

const {name: nameR, getFood: layDoan, openingHours: hours} = restaurant;

// console.log(nameR, layDoan, hours);

const {starterMenu: starters = []} = restaurant;

// console.log(starters);


// Lấy ra giờ mở và đóng cửa của thứ mà không cần phải ghi nhớ

const {frid: {
    open, close
}} = restaurant.openingHours;

// console.log(open, close);


