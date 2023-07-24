fetch("https://swapi.dev/api/people/1").then((response) => {
    return response.json();
}).then((body) => {
    console.log(body.name);
});
