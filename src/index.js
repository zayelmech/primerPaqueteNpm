const messages = [
    "oscar",
    "ana",
    "jesica",
    "Diego",
    "laura",
    "calorina",
    "paulina"

];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };