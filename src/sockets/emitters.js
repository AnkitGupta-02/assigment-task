// src/sockets/emitters.js
const { getIO } = require('./index');

// Utility functions to emit events
const emitDataChange = (operation, entityType, data) => {
  const io = getIO();
  io.emit('data-change', { operation, entityType, data });
};

module.exports = {
  emitDataChange
};