

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



restaurant.numGuest = 0;

const guest = restaurant.numGuest  || 10;
console.log(guest);
const guestCorrect = restaurant.numGuest ?? 10;

console.log(guestCorrect);
