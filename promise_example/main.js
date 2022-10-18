const getSomething = () => {
    return new Promise((resolve, reject) => {
        // do something asynchronously, perhaps? or just print something
        console.log("hello to the animals")
        resolve('elephant');
        reject('giraffe');
    });

};

// getSomething().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// }); // There's a better way!

getSomething().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});