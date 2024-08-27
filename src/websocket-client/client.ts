// client.ts
const socket = new WebSocket("ws://localhost:8080");

const messageInput = document.getElementById(
    "messageInput"
) as HTMLInputElement;
const sendMessageButton = document.getElementById(
    "sendMessageButton"
) as HTMLButtonElement;
const messagesDiv = document.getElementById("messages") as HTMLDivElement;

let playerId = "player1"; // ID del jugador, puede ser generado dinámicamente

socket.addEventListener("open", () => {
    console.log("Connected to WebSocket server");
    // Enviar el ID del jugador al servidor al conectar
    socket.send(
        JSON.stringify({ type: "JOIN", playerId, hero: getHeroData() })
    );
});

socket.addEventListener("message", (event: MessageEvent) => {
    const data = JSON.parse(event.data);
    if (data.type === "UPDATE") {
        updateGameState(data.state);
    } else {
        const messageElement = document.createElement("div");
        messageElement.textContent = data.message;
        messagesDiv.appendChild(messageElement);
    }
});

sendMessageButton.addEventListener("click", () => {
    const action = messageInput.value;
    // Enviar la acción al servidor
    socket.send(JSON.stringify({ type: "TURN", playerId, action }));
    messageInput.value = "";
});

function getHeroData() {
    // Implementar función para obtener los datos del héroe
    return {
        // Datos del héroe
    };
}

function updateGameState(state: any) {
    // Implementar función para actualizar la interfaz de usuario con el nuevo estado del juego
}
