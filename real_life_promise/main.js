const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest(); // This doesn't work because it's for grandpas

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                resolve(data);
            } else if (request.readyState === 4){
                reject('error')
            }
        });
    
        request.open('GET', resource); 
        request.send();
    });


};

getTodos('../callback/todos_1.json').then(data => {
    console.log('promise resolved: ', data);
}).catch((err) => {
    console.log('promise rejected: ', err);
});