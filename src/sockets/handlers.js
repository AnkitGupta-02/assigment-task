// src/sockets/handlers.js
module.exports = (io, socket) => {
    // Register custom event handlers here
    socket.on('custom-event', (data) => {
      // Handle custom events from client
      console.log('Custom event received:', data);
    });
    
    // Add more handlers as needed
  };