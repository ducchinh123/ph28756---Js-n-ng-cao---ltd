
    const rest = new Map();

    // console.log(rest);



    // SET cho đối tượng map
    rest
        .set("name", "Bao kẹo A")
        .set("weight", "50 kg")
        .set("code", "K1230");


        // console.log(rest);

    

    // GET 


    // console.log(rest.get("name"));
    // console.log(rest.get("weight"));
    // console.log(rest.get("code"));



    // Kiểu tra nó có tồn tại hay không


    // console.log(rest.has("name"));
    // console.log(rest.has("weight"));


    // Xóa đi

    rest.delete(2);

    // console.log(rest);



    // clear đi
    // rest.clear();
    // console.log(rest);

    // size

    console.log(rest.size);
