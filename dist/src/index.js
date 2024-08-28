import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Bienvenido a mi juego!");
});
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
