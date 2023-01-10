
const rest1 = {
    name: "Bún đậu",
    numGuest: 20

};

const rest2 = {
    name: "Pizzaa",
    owner: "Thiên nhiên"

};

// rest1.numGuest = rest1.numGuest || 10;

// rest2.numGuest = rest2.numGuest || 10;

// Hoặc viết kiểu này
// rest1.numGuest ||=10;

// rest2.numGuest ||= 10;

// nullish assignment operator

// rest1.numGuest ??=10;

// rest2.numGuest ??= 10;

rest1.numGuest &&=10;

rest2.numGuest &&= 10;


console.log(rest1);
console.log(rest2);