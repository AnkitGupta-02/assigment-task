// src/sockets/index.js
const { Server } = require('socket.io');
const socketHandlers = require('./handlers');

let io;

// Initialize socket.io
function initializeSocket(server) {
  io = new Server(server, {
    cors: {
      origin: ['http://localhost:5173', 'https://your-base-website.com'],
      credentials: true
    }
  });

  // Set up connection handler
  io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);
    
    // Register all handlers
    socketHandlers(io, socket);
    
    socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id);
    });
  });

  return io;
}

// Get io instance
function getIO() {
  if (!io) {
    throw new Error('Socket.io not initialized');
  }
  return io;
}

module.exports = {
  initializeSocket,
  getIO
};