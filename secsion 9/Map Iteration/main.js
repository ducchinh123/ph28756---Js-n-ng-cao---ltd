
const question = new Map([['question', 'what is the best programing language in the world?'], 

    [1,"C"], [2, 'Java'], [3, "JavaScript"], ["correct", 3], [true, "correct 🎉"], [false, "try again!"] ]);


// console.log(question);


    // for (const [key, value] of question) {

    //     if(typeof key == "number") {

    //         console.log(`Answer ${key}: ${value}`);
    //     }
        
    // }


    // convert map to array

    console.log([...question]);


    //


    // console.log(question.entries());


    console.log([...question.keys()]);

    console.log([...question.values()]);