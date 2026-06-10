const area_prev = document.querySelector('div.spawner_prev');
const area_next = document.querySelector('div.spawner_next');

const texts = [
    "DAMIAM?",
    "💗",
    "FICOU MT GAY?",
    "🥰",
    "😍",
    "PSIU",
    "LI AMU DMS",
    "😘",
    "❤️",
    "AMORT",
    "💘",
    "💝",
    "💖",
    "💓",
    "C VIU NOIS",
    "💞",
    "SDD DO C",
    "💕",
    "BU",
    "C TA MT LINDA NESSA FT TA"
];

function createMessage_prev() {

    const msg = document.createElement('span');

    msg.classList.add('message');

    msg.textContent =
        texts[Math.floor(Math.random() * texts.length)];

    msg.style.left = Math.random() * 100 + "%";
    msg.style.top = Math.random() * 100 + "%";

    msg.style.fontSize =
        (10 + Math.random() * 30) + "px";

    msg.style.transform =
        `rotate(${Math.random() * 45}deg)`;

    area_prev.appendChild(msg);

    setTimeout(() => {
        msg.remove();
    }, 4000);
}

setInterval(createMessage_prev, 1000);

function createMessage_next() {

    const msg = document.createElement('span');

    msg.classList.add('message');

    msg.textContent =
        texts[Math.floor(Math.random() * texts.length)];

    msg.style.left = Math.random() * 100 + "%";
    msg.style.top = Math.random() * 100 + "%";

    msg.style.fontSize =
        (10 + Math.random() * 30) + "px";

    msg.style.transform =
        `rotate(${Math.random() * -45}deg)`;

    area_next.appendChild(msg);

    setTimeout(() => {
        msg.remove();
    }, 4000);
}

setInterval(createMessage_next, 1000);