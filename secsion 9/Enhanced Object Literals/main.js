

// Tôi có một object openingHours

// openingHours = {

//     thu: {
//         open: 7,
//         close: 8
//     },

//     frid: {
//         open: 7,
//         close: 9
//     },

//     sat: {
//         open: 7,
//         close: 10
//     }

// };



// Và ví dụ trong obj restaurant cũng có một key là openingHours

// Điều đó thật tuyệt khi tôi sau key này value của nó là obj openingHours trên


// const restaurant = {
//     name: "Nhà hàng Thanh Xuân",
//     location: "Đường Trịnh Văn Bô",
//     starterMenu: ["Cà phê", "Phở", "Cơm"],
//     mainMenu: ["Mì", "Giò", "Bánh"],

//     getFood: function(startIndex, mainIndex) {
//         return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
//     },

//     openingHours: openingHours

 
// };

// console.log(restaurant.openingHours);

// và tôi còn có thể viết ngắn gọn hơn

// const restaurant = {
//     name: "Nhà hàng Thanh Xuân",
//     location: "Đường Trịnh Văn Bô",
//     starterMenu: ["Cà phê", "Phở", "Cơm"],
//     mainMenu: ["Mì", "Giò", "Bánh"],

//     getFood: function(startIndex, mainIndex) {
//         return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
//     },


//     // ES6 Enhanced object literal

//     openingHours

 
// };
// console.log(restaurant.openingHours);


// Và cả với hàm nữa, tôi có thể viết ngắn gọn

// const restaurant = {
//     name: "Nhà hàng Thanh Xuân",
//     location: "Đường Trịnh Văn Bô",
//     starterMenu: ["Cà phê", "Phở", "Cơm"],
//     mainMenu: ["Mì", "Giò", "Bánh"],

//     // ES6 Enhanced object literal

//     getFood(startIndex, mainIndex) {
//         return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
//     },


//     // ES6 Enhanced object literal

//     openingHours

 
// };


// console.log(restaurant.getFood(1, 2));

// VD khác



const weekdays = ['mon', 'tue', 'web', 'thu', 'fri', 'sat', 'sun'];
const restaurant = {
    name: "Nhà hàng Thanh Xuân",
    location: "Đường Trịnh Văn Bô",
    starterMenu: ["Cà phê", "Phở", "Cơm"],
    mainMenu: ["Mì", "Giò", "Bánh"],

    // ES6 Enhanced object literal

    getFood(startIndex, mainIndex) {
        return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
    },


    // ES6 Enhanced object literal

    openingHours: {

        [weekdays[3]]: {
            open: 7,
            close: 8
        },
    
        [weekdays[4]]: {
            open: 7,
            close: 9
        },
    
        [weekdays[4]]: {
            open: 7,
            close: 10
        }
    
    }

 
};