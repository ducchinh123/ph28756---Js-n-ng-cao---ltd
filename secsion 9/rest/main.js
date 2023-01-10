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


// Rest: để tôi lấy phần còn lại


//vd nhỏ hơn

const array_number = [1, 2, 3, 4, 5];

const [a, b, c, ...rest] = array_number;

// console.log(a, b, c);
// console.log(rest);



const [Coffee, ...otherstarterMenu] = [...restaurant.starterMenu];

// console.log(Coffee, otherstarterMenu);


const {thu, ...other} = restaurant.openingHours;
// console.log(thu);
// console.log(other);

const add = function(...numbers) {

    console.log(numbers);

}

add(2,3,4);