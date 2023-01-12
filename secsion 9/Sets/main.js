
const orderSets = new Set(
    [   "Mì",
        "Kẹo",
        "Bún",
        "Mì",
        "Bún",
        "Kẹo"]
);

// console.log(orderSets);

/*
console.log(orderSets.has("Kẹo lạc")); // => False
console.log(orderSets.has("Kẹo")); // => True

*/


// Thêm một phần tử

// orderSets.add("Bia");

// Xóa đi một phần tử

// orderSets.delete("Kẹo");


// Clear hết đi

// orderSets.clear();


// console.log(orderSets);


// for (const order of orderSets) {

//     console.log(order);
    
// }


// GIẢI OBJECT set và đưa các phần tử đã lọc vào mảng


const newOrderSets = [...orderSets];

console.log(newOrderSets);