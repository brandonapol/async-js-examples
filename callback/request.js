const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest(); // This doesn't work because it's for grandpas

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            callback(undefined, request.responseText);
        } else if (request.readyState === 4){
            callback('could not fetch data', undefined);
        }
    });

    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
    // context ^

    request.open('GET', resource); // Could also go right to callback/todos.json
    request.send();
};

getTodos(`https://jsonplaceholder.typicode.com/todos/`, (err, data) => {
    console.log('callback fired');
    if (err){
        console.log(err);
    } else {
        console.log(data);
    }
});