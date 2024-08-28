import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";

const socket = io("http://192.168.78.146:3000");

socket.on("newUser", (matchInfo) => {
    console.log(matchInfo);
});

socket.on("chat message", (matchInfo) => {
    console.log(matchInfo);
});

socket.on("bindInfo", () => {
    console.log("User disconnected");
});

socket.emit("chat message", "HOLA");
