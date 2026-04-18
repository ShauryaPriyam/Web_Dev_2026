const clients = new Map();

function getClient(userId) {
    return clients.get(userId);
}

function setClient(userId, ws) {
    clients.set(userId, ws);
}

function removeClient(userId) {
    clients.delete(userId);
}

function getAllClients() {
    return clients;
}

export { 
    getClient, 
    setClient, 
    removeClient, 
    getAllClients 
};