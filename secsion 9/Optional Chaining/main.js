
// Qua video, tôi có một ví dụ như này để tôi hiểu được OPTINAL CHANNING (?.)

// Tôi có một mảng sau

var obj =  {
    characters: ["A", "B", "C"],

    getcharacters() {
        console.log(this.characters);
    }

}
// Khi mà chưa có OPTINAL CHANNING, thì để kiểm ra 1 index/chỉ mục của phần tử  mảng có tồn tại hay không
// Sau đó mới in ra phần tử mảng đó



if(obj.characters[5]) {
    console.log(obj.characters[5]);
}

// Nhưng khi có OPTINAL CHAINING (?.) thì dòng code lại vô cùng ngắn gọn mà vẫn đảm bảo được bài toán


if(obj.characters?.[2]) {
console.log(obj.characters[2]);

}


// VD khác

obj.getcharacters?.();
