import { parseCookies } from "./messageHandler.js";
import jwt from "jsonwebtoken";
import { setClient, removeClient } from "./state.js";
import { beat } from "./heartbeat.js";

const handleConnection = (ws, req) => {
    const cookies = parseCookies(req.headers.cookie);
    const token = cookies.token;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.userId;
        ws.userId = userId;

        setClient(userId, ws);

        ws.on("close", () => {
            removeClient(userId);
        });

        ws.on("error", () => {
            removeClient(userId);
        });

        ws.on("pong",beat.bind(null, ws));

    } catch (err) {
        ws.close();
    }


    ws.on('close', () => {
        console.log('WebSocket connection closed');
    });
}

export { handleConnection };