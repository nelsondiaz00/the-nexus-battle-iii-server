const ws = new WebSocket("ws://localhost:3000");

ws.onopen = () => {
    console.log("Connected to WebSocket server.");
};

ws.onmessage = (event: MessageEvent) => {
    const messagesDiv = document.getElementById("messages");
    if (messagesDiv) {
        messagesDiv.innerHTML += `<p>${event.data}</p>`;
    }
};

document.getElementById("sendMessageButton")?.addEventListener("click", () => {
    const input = document.getElementById("messageInput") as HTMLInputElement;
    const message = input.value;
    ws.send(message);
    input.value = "";
});
