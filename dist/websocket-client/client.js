"use strict";
const ws = new WebSocket("ws://localhost:3000");
ws.onopen = () => {
    console.log("Connected to WebSocket server.");
};
ws.onmessage = (event) => {
    const messagesDiv = document.getElementById("messages");
    if (messagesDiv) {
        messagesDiv.innerHTML += `<p>${event.data}</p>`;
    }
};
document.getElementById("sendMessageButton")?.addEventListener("click", () => {
    const input = document.getElementById("messageInput");
    const message = input.value;
    ws.send(message);
    input.value = "";
});
