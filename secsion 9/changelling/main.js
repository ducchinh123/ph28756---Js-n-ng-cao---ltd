

const gameEvents = new Map( [
    [17, "🤞 GOAL"],
    [36, "👍 substitution"]

]
);

// console.log(gameEvents);

// lấy ra value mảng các sự kiện
const newGameEvent = [...gameEvents.values()];

console.log(newGameEvent);

// Xóa đi 1 mảng

gameEvents.delete(36);

// console.log(gameEvents);

// lấy ra các key

const time = [...gameEvents.keys()];

console.log(time);