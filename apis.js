const fetch = require('node-fetch');

let randomDog1 = async function fetchARandomDog(feed) {
    const response = await fetch(feed);
    const data = await response.json();
    return data;
}

let randomDog2 = async function fetchARandomDog(feed) {
    const response = await fetch(feed);
    const data = await response.json();
    return data;
}

module.exports = { 
    randomDog1 : randomDog1,
    randomDog2 : randomDog2 
};