const messages = [
    "oscar",
    "ana",
    "jesica",
    "Diego",
    "laura",

];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };