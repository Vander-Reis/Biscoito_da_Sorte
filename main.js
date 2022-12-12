const elementImage = document.querySelector('img');
const elementP = document.querySelector('p');
const elementH3 = document.querySelector('h3');
const elementButton = document.querySelector('button');
const elementBox = document.querySelector("#box-message");
const elementBoxText = document.querySelector("#box-message p")

const messages = ["javascript", "react", "node", "sql", "python"];

function randomMessage() {

    let messageRandom = messages[Math.floor(Math.random() * messages.length)]

    if (messageRandom == undefined) {
        return messageRandom = messages[Math.floor(Math.random() * messages.length)]
    }

    return messageRandom;

}

function firstMessage() {
    elementH3.innerText = "Aqui está a sua sorte de hoje:";
    elementImage.src = "./assets/opened-cookie.png";
    elementP.style.display = "none";
    elementBox.classList.add('box');
    elementButton.classList.add('message');
    elementBoxText.innerText = randomMessage();
}

const intervalMessage = setInterval(firstMessage, 2000);

elementButton.addEventListener('click', () => {
    elementBoxText.innerHTML = randomMessage();
    clearInterval(intervalMessage);
})

