
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

    }
};


const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Để lấy ra các phần tử, trước đó tôi sử dụng vòng for

// for(let i = 0; i < menu.length; i++) {

//     console.log(menu[i]);
// }



// Bây giờ tôi có thể sử dụng for of

// for (const item of menu) {
//     console.log(item);
// }


// Để lấy ra cả chỉ mục và mỗi phần tử lại là 1 mảng mới  tôi sẽ gọi đến phương thức entries();



// for (const item of menu.entries()) {
//     console.log(`${item[0] + 1}: ${item[1]}` );
// }
