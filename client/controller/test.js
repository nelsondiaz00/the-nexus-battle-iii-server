import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
const socket = io("http://192.168.78.146:3000");

fetch("../../src/database/input1.json")
    .then((response) => response.json()) // Convierte la respuesta a JSON
    .then((data) => {
        console.log(data); // Muestra los datos JSON en la consola

        // Usa los datos JSON directamente
        socket.on("connect", () => {
            socket.emit("chat message", "HOLA");
            socket.emit("bindInfo", data); // Envía el JSON directamente
        });
    })
    .catch((error) => console.error("Error al cargar el archivo:", error));


socket.on("newUser", (matchInfo) => {
    console.log(matchInfo);
});

// socket.on("turnInfo", (turnInfo) => {
//     console.log(turnInfo);
// });

// socket.on("chat message", (matchInfo) => {
//     console.log(matchInfo);
// });

// socket.emit("useProduct", { target: "user123", product: "19" });

// socket.emit("chat message", "holaaa");

// socket.emit("startBattle", "¡Que comience la batalla!");

// socket.emit("passTurn", "passTurnMessage");

// Usa fetch para obtener el JSON del archivo

// socket.emit("chat message", "holaaa");

// socket.on("bindInfo", () => {
//     console.log("User disconnected");
// })
