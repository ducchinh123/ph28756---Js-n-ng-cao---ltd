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


// Properties NAMES
const properties = Object.keys(restaurant.openingHours);

// console.log(properties);

for (const day of properties) {

    console.log(day);
    
}

// console.log(`We open on ${properties.length} day`);

let str = `We open on ${properties.length} day: `;

for (const day of properties) {
    str = str + `${day}, `;

    
}

// console.log(str);


// Properties VALUES

const values = Object.values(restaurant.openingHours);

console.log(values);

// entire object

const entire = Object.entries(restaurant.openingHours);
console.log(entire);

// Sau đó lấy ra từng mảng
for (const x of entire) {

    console.log(x);
    
}


// Cao cấp hơn

for (const [key, {open, close}] of entire) {

    console.log(`On ${key} we open at ${open} and close at ${close}`);
    
}






// Tôi lấy ra được tất cả keys/mảng keys của object
// Tôi lấy ra được mảng values của object
// Tôi lấy được key, value của obj và đưa chúng vào mảng: mỗi key là 1 pt, và mỗi value là một pt