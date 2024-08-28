import { WebSocketServer } from "ws";
import { IncomingMessage } from "http";

const server = new WebSocketServer({ port: 3000 });

server.on("connection", (ws, req: IncomingMessage) => {
    const remoteAddress = req.connection.remoteAddress;
    const remotePort = req.connection.remotePort;

    console.log(`Client connected from ${remoteAddress}:${remotePort}`);

    ws.on("message", (message) => {
        console.log(`Message received: ${message}`);
        server.clients.forEach((client) => {
            if (client !== ws && client.readyState === client.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on("close", () => {
        console.log("Client disconnected");
    });
});

console.log("WebSocket server running on ws://localhost:3000");