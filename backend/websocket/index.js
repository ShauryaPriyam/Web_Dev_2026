import { WebSocketServer } from 'ws';
import { handleConnection } from './connectionManager.js';
import { setupHeartbeat } from './heartbeat.js';

const SetupWebSocketServer = (server) => {
    const wss = new WebSocketServer({ server });
    
    wss.on('connection', handleConnection);
    const interval = setupHeartbeat(wss);
    server.on('close', () => {
        clearInterval(interval);
    });
};

export default SetupWebSocketServer;