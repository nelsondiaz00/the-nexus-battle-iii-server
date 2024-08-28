"use strict";
const usernameInput = document.getElementById("username");
const messageInput = document.getElementById("messageInput");
const sendMessageButton = document.getElementById("sendMessageButton");
const messagesDiv = document.getElementById("messages");
const socket = new WebSocket("ws://localhost:3000");
socket.onmessage = function (event) {
    const messageElement = document.createElement("div");
    messageElement.textContent = event.data;
    messagesDiv.appendChild(messageElement);
};
sendMessageButton.addEventListener("click", function () {
    const username = usernameInput.value;
    const message = messageInput.value;
    if (username && message) {
        socket.send(`${username}: ${message}`);
        messageInput.value = "";
    }
});
