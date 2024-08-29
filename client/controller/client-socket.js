import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
import { fromEvent } from "https://esm.sh/rxjs@7.5.5";

export class GameClient {
    constructor(serverUrl, jsonFilePath) {
        this.serverUrl = serverUrl;
        this.jsonFilePath = jsonFilePath;
        this.socket = io(this.serverUrl);
        this.initSocket();
    }

    initSocket() {
        fetch(this.jsonFilePath)
            .then((response) => response.json())
            .then((data) => {
                if (data && data.idUser) {
                    localStorage.setItem("idUser", data.idUser);
                }
                console.log("data " + localStorage.getItem("idUser"));
                this.socket.on("connect", () => {
                    this.socket.emit("chat message", "HOLA");
                    this.socket.emit("bindInfo", data);
                });
            })
            .catch((error) =>
                console.error("Error al cargar el archivo:", error),
            );

        this.newUser$ = fromEvent(this.socket, "newUser");
        this.turnInfo$ = fromEvent(this.socket, "turnInfo");
        this.productUsed$ = fromEvent(this.socket, "productUsed");
        this.attackUsed$ = fromEvent(this.socket, "attackUsed");
        this.actualMatch$ = fromEvent(this.socket, "actualMatch");
    }
    getMatch() {
        this.socket.emit("getMatch");
        // this.passTurn();
    }

    useAttack(jsonAttackInfo) {
        this.socket.emit("useAttack", jsonAttackInfo);
        this.passTurn();
    }

    useProduct(jsonProductPath) {
        this.socket.emit("useProduct", jsonProductPath);
        this.passTurn();
    }

    startBattle() {
        this.socket.emit("startBattle");
    }

    passTurn() {
        this.socket.emit("passTurn");
    }
}
