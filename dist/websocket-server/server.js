import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 3000 });
wss.on("connection", (ws) => {
    console.log("Client connected");
    ws.on("message", (message) => {
        console.log(`Message received: ${message}`);
    });
    ws.send("Hello from server");
});
console.log("WebSocket server running on ws://localhost:3000");
