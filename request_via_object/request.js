const request = new XMLHttpRequest(); // This doesn't work because it's for grandpas

request.addEventListener('readystatechange', () => {
    console.log(request, request.readyState);
});

// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
// context ^

request.open('GET', `https://jsonplaceholder.typicode.com/todos/`);
request.send();