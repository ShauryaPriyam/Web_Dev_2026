import { getAllClients, removeClient } from "./state.js";

function beat(ws) {
    ws.isAlive = true;
}

function setupHeartbeat(wss) {
    const interval = setInterval(() => {
        wss.clients.forEach((ws) => {
            if (!ws.isAlive){ 
                if(ws.userId) removeClient(ws.userId);
                return ws.terminate();
            }
            ws.isAlive = false;
            ws.ping();
        });
    }, 30000);

    return interval;
}

export { setupHeartbeat, beat };