async function fetchPerson() {
    /* Alternative using `.then`: */
    // fetch("https://swapi.dev/api/people/1").then((response) => {
    //     return response.json();
    // }).then((body) => {
    //     console.log(body.name);
    // });

    const response = await fetch("https://swapi.dev/api/people/1");
    const body = await response.json();

    console.log(body.name);

    console.log("Here!!!");
}

async function timeoutExample() {
    /* Alternative: */
    // setTimeout(() => {
    //     console.log("Timer finished!");
    // }, 1000);

    setTimeout(() => console.log("3..."), 1000);
    setTimeout(() => console.log("2..."), 2000);
    setTimeout(() => console.log("1..."), 3000);

    console.log("3...");
    await wait(1000);
    console.log("2...");
    await wait(1000);
    console.log("1...");

    await wait(1000);

    console.log("Finished");

}

function wait(ms) {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });

    return promise;
}

fetchPerson();
timeoutExample()
